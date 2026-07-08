import hashlib
import feedparser
import httpx
from celery import Celery
from slugify import slugify
from sqlalchemy.orm import Session
from app.config import settings
from app.db import SessionLocal
from app.models import Article, FeedItem, Source

celery_app = Celery("samachar_saral", broker=settings.redis_url, backend=settings.redis_url)


def clean(text: str, limit: int = 300) -> str:
    return " ".join((text or "").split())[:limit]


def digest(value: str) -> str:
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


@celery_app.task
def ingest_rss_feeds():
    db: Session = SessionLocal()
    try:
      for source in db.query(Source).filter(Source.active == 1).all():
          response = httpx.get(source.rss_url, timeout=20)
          response.raise_for_status()
          parsed = feedparser.parse(response.text)
          for entry in parsed.entries[:30]:
              title = clean(entry.get("title", ""), 180)
              link = entry.get("link", "")
              snippet = clean(entry.get("summary", ""), 260)
              if not title or not link:
                  continue
              if db.query(FeedItem).filter_by(source_url=link).first():
                  continue
              item = FeedItem(source_id=source.id, source_title=title, source_url=link, rss_snippet=snippet, category=source.category)
              db.add(item)
              db.flush()
              article = Article(
                  feed_item_id=item.id,
                  slug=slugify(title)[:180] + "-" + digest(link)[:8],
                  title_hi=title,
                  summary_hi=f"Editor draft: {snippet}",
                  explainer_hi="AI draft yahan banega. Publish se pehle editor original value add kare.",
                  eli15_hi="Is khabar ko simple shabdon me samjhaya jayega.",
                  status="draft",
              )
              db.add(article)
      db.commit()
    finally:
      db.close()

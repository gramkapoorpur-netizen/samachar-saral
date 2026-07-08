from fastapi import Depends, FastAPI, Header, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
from .config import settings
from .db import Base, engine, get_db
from .models import Article, FeedItem
from .tts import synthesize_hindi_mp3

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Samachar Saral API")


class AssistantRequest(BaseModel):
    query: str
    language: str = "hi"


class ArticleUpdate(BaseModel):
    title_hi: str
    summary_hi: str
    explainer_hi: str
    eli15_hi: str
    status: str = "draft"


@app.get("/api/health")
def health():
    return {"ok": True, "service": "samachar-saral"}


@app.get("/api/articles")
def articles(category: str | None = None, db: Session = Depends(get_db)):
    query = db.query(Article).filter(Article.status == "published")
    if category:
        query = query.join(FeedItem).filter(FeedItem.category == category)
    return query.order_by(Article.updated_at.desc()).limit(40).all()


@app.get("/api/admin/drafts")
def drafts(x_admin_secret: str = Header(default=""), db: Session = Depends(get_db)):
    require_admin(x_admin_secret)
    return db.query(Article).filter(Article.status.in_(["draft", "review"])).limit(100).all()


@app.put("/api/admin/articles/{article_id}")
def update_article(article_id: int, payload: ArticleUpdate, x_admin_secret: str = Header(default=""), db: Session = Depends(get_db)):
    require_admin(x_admin_secret)
    article = db.get(Article, article_id)
    if not article:
        raise HTTPException(status_code=404, detail="Article not found")
    article.title_hi = payload.title_hi
    article.summary_hi = payload.summary_hi
    article.explainer_hi = payload.explainer_hi
    article.eli15_hi = payload.eli15_hi
    article.status = payload.status
    db.commit()
    return {"ok": True}


@app.post("/api/assistant/search")
def assistant_search(payload: AssistantRequest, db: Session = Depends(get_db)):
    q = f"%{payload.query.strip()}%"
    if len(payload.query.strip()) < 2:
        return {"answer": "Topic likhen.", "results": []}
    results = (
        db.query(Article)
        .filter(Article.status == "published")
        .filter((Article.title_hi.like(q)) | (Article.summary_hi.like(q)) | (Article.eli15_hi.like(q)))
        .limit(5)
        .all()
    )
    answer = " ".join([f"{item.title_hi}. {item.eli15_hi}" for item in results]) or "Is topic par abhi reviewed explainer nahi mila."
    return {"answer": answer, "results": results}


@app.post("/api/articles/{article_id}/tts")
def article_tts(article_id: int, db: Session = Depends(get_db)):
    article = db.get(Article, article_id)
    if not article or article.status != "published":
        raise HTTPException(status_code=404, detail="Published article not found")
    audio = synthesize_hindi_mp3(f"{article.title_hi}. {article.summary_hi}. {article.eli15_hi}")
    return {"ok": True, "bytes": len(audio), "note": "Upload these bytes to storage and return audio_url in production."}


def require_admin(value: str):
    if value != settings.admin_secret:
        raise HTTPException(status_code=401, detail="Invalid admin secret")

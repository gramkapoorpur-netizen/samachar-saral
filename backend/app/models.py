from sqlalchemy import DateTime, ForeignKey, Integer, String, Text, func
from sqlalchemy.orm import Mapped, mapped_column, relationship
from .db import Base


class Source(Base):
    __tablename__ = "sources"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(160))
    website_url: Mapped[str] = mapped_column(String(500))
    rss_url: Mapped[str] = mapped_column(String(500))
    category: Mapped[str] = mapped_column(String(60))
    active: Mapped[int] = mapped_column(Integer, default=1)


class FeedItem(Base):
    __tablename__ = "feed_items"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    source_id: Mapped[int] = mapped_column(ForeignKey("sources.id"))
    source_title: Mapped[str] = mapped_column(String(500))
    source_url: Mapped[str] = mapped_column(String(900), unique=True)
    rss_snippet: Mapped[str] = mapped_column(Text, default="")
    category: Mapped[str] = mapped_column(String(60))
    status: Mapped[str] = mapped_column(String(40), default="draft")
    created_at: Mapped[str] = mapped_column(DateTime, server_default=func.now())
    source = relationship("Source")


class Article(Base):
    __tablename__ = "articles"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    feed_item_id: Mapped[int] = mapped_column(ForeignKey("feed_items.id"))
    slug: Mapped[str] = mapped_column(String(220), unique=True)
    title_hi: Mapped[str] = mapped_column(String(500))
    title_en: Mapped[str] = mapped_column(String(500), default="")
    summary_hi: Mapped[str] = mapped_column(Text)
    summary_en: Mapped[str] = mapped_column(Text, default="")
    explainer_hi: Mapped[str] = mapped_column(Text)
    eli15_hi: Mapped[str] = mapped_column(Text)
    timeline_json: Mapped[str] = mapped_column(Text, default="[]")
    status: Mapped[str] = mapped_column(String(40), default="draft")
    published_at: Mapped[str] = mapped_column(DateTime, nullable=True)
    updated_at: Mapped[str] = mapped_column(DateTime, server_default=func.now(), onupdate=func.now())

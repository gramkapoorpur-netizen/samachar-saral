# Samachar Saral

Hindi-first news explainer platform built to be copyright-safe and AdSense-ready.

Live goals:

- Hindi news dashboard by India, World, Jobs, Tech, Farming, Health, Education
- Browser Hindi text-to-speech for every explainer
- Hindi/English language switch
- Explain-like-I-am-15 mode inside article pages
- Daily Top 10 audio brief
- Bookmarks and reading history in browser
- SEO-friendly article URLs with Article schema
- AdSense-ready non-intrusive slots
- Admin review panel
- AI news assistant for topic search and read-aloud

Copyright rule:

- Do not copy full articles
- Do not scrape Google Search pages
- Always cite and link original source
- AI drafts require editor review before publishing

Backend:

The `backend/` folder contains the production FastAPI + SQLAlchemy + Celery blueprint. Use `DATABASE_URL` as an environment variable for SQL Server; do not commit private connection strings.

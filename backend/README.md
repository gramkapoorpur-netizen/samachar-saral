# Samachar Saral Backend Blueprint

The live GitHub Pages site is static. This backend folder is the production path for:

- RSS/API ingestion
- AI draft generation
- Admin review before publishing
- SQL Server or PostgreSQL storage
- Hindi Text-to-Speech audio caching
- Search assistant API

## SQL Server Setup

Do not commit your local SQL Server connection string to GitHub.

Set it as an environment variable on the server:

```powershell
$env:DATABASE_URL='mssql+pyodbc:///?odbc_connect=YOUR_URL_ENCODED_ODBC_CONNECTION_STRING'
```

For your local Windows SQL Server, convert the ODBC connection string to URL encoded form and use `TrustServerCertificate=yes`.

## Run Locally

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
celery -A app.tasks.ingest worker --beat --loglevel=info
```

## Copyright Safety

Ingestion stores only:

- source headline
- source URL
- source name
- short RSS/API snippet if legally provided
- original editorial explainer written by the platform

It must never copy full article text unless the source license explicitly allows it.

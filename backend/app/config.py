from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_url: str = "sqlite:///./samachar_saral.db"
    redis_url: str = "redis://localhost:6379/0"
    admin_secret: str = "change-this-long-secret"
    tts_provider: str = "browser"

    class Config:
        env_file = ".env"


settings = Settings()

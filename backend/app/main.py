from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic_settings import BaseSettings
from datetime import datetime, timedelta
import random

class Settings(BaseSettings):
    CORS_ORIGINS: str = "*"
    DATABASE_URL: str
    SECRET_KEY: str

    class Config:
        env_file = ".env"

settings = Settings()

app = FastAPI(
    title="Backup Service API",
    description="API for managing backup operations",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.get("/")
async def root():
    return {"message": "Welcome to the Backup Service API"}

# Mock data endpoints
@app.get("/api/backup/status")
async def get_backup_status():
    return {
        "lastBackupStatus": "successful",
        "lastBackupTime": (datetime.now() - timedelta(hours=2)).isoformat(),
        "storageUsed": 1024 * 1024 * 1024 * 5,  # 5GB
        "nextScheduledBackup": (datetime.now() + timedelta(hours=4)).isoformat()
    }

@app.get("/api/backup/jobs")
async def get_backup_jobs():
    jobs = []
    for i in range(5):
        jobs.append({
            "id": f"job-{i}",
            "name": f"Daily Backup {i}",
            "schedule": "0 0 * * *",
            "lastRun": (datetime.now() - timedelta(hours=random.randint(1, 24))).isoformat(),
            "nextRun": (datetime.now() + timedelta(hours=random.randint(1, 24))).isoformat(),
            "status": "active" if random.random() > 0.2 else "inactive"
        })
    return jobs

@app.get("/api/backup/history")
async def get_backup_history():
    history = []
    for i in range(10):
        history.append({
            "id": f"history-{i}",
            "status": "successful" if random.random() > 0.2 else "failed",
            "timestamp": (datetime.now() - timedelta(hours=i)).isoformat(),
            "size": random.randint(100000000, 1000000000),
            "duration": random.randint(60, 300),
            "message": "Backup completed successfully" if random.random() > 0.2 else "Network timeout occurred"
        })
    return history

@app.get("/api/backup/settings")
async def get_backup_settings():
    return {
        "retentionPeriod": 30,
        "compressionLevel": "medium",
        "scheduleEnabled": True,
        "emailNotifications": True
    }

@app.put("/api/backup/settings")
async def update_backup_settings(settings: dict):
    return settings 
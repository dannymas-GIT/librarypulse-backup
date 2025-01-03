export interface BackupStatus {
  lastBackupStatus: 'successful' | 'failed' | 'in_progress';
  lastBackupTime: string;
  storageUsed: number;
  nextScheduledBackup: string;
}

export interface BackupJob {
  id: string;
  name: string;
  schedule: string;
  lastRun?: string;
  nextRun: string;
  status: 'active' | 'inactive';
}

export interface BackupHistoryItem {
  id: string;
  status: 'successful' | 'failed';
  timestamp: string;
  size: number;
  duration: number;
  message?: string;
}

export interface BackupSettings {
  retentionPeriod: number;
  compressionLevel: 'low' | 'medium' | 'high';
  scheduleEnabled: boolean;
  emailNotifications: boolean;
} 
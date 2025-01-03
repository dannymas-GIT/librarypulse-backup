import { BackupStatus, BackupJob, BackupHistoryItem, BackupSettings } from '../types/backup';

const API_BASE_URL = '/api/backup';

export const backupService = {
  // Status
  getBackupStatus: async (): Promise<BackupStatus> => {
    const response = await fetch(`${API_BASE_URL}/status`);
    if (!response.ok) throw new Error('Failed to fetch backup status');
    return response.json();
  },

  // Jobs
  getBackupJobs: async (): Promise<BackupJob[]> => {
    const response = await fetch(`${API_BASE_URL}/jobs`);
    if (!response.ok) throw new Error('Failed to fetch backup jobs');
    return response.json();
  },

  createBackupJob: async (job: Omit<BackupJob, 'id'>): Promise<BackupJob> => {
    const response = await fetch(`${API_BASE_URL}/jobs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(job),
    });
    if (!response.ok) throw new Error('Failed to create backup job');
    return response.json();
  },

  // History
  getBackupHistory: async (): Promise<BackupHistoryItem[]> => {
    const response = await fetch(`${API_BASE_URL}/history`);
    if (!response.ok) throw new Error('Failed to fetch backup history');
    return response.json();
  },

  // Settings
  getBackupSettings: async (): Promise<BackupSettings> => {
    const response = await fetch(`${API_BASE_URL}/settings`);
    if (!response.ok) throw new Error('Failed to fetch backup settings');
    return response.json();
  },

  updateBackupSettings: async (settings: BackupSettings): Promise<BackupSettings> => {
    const response = await fetch(`${API_BASE_URL}/settings`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    });
    if (!response.ok) throw new Error('Failed to update backup settings');
    return response.json();
  },
}; 
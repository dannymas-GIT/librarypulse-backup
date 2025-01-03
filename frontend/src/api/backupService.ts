import { generateMockBackupJob, generateMockBackupJobs, generateMockBackupStats } from './mockData';
import type { BackupJob, BackupStats } from './mockData';

const SIMULATED_DELAY = 500; // ms

export const backupService = {
  // Get all backup jobs
  async getBackupJobs(): Promise<BackupJob[]> {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return generateMockBackupJobs(10);
  },

  // Get a specific backup job
  async getBackupJob(id: string): Promise<BackupJob> {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return generateMockBackupJob();
  },

  // Get backup statistics
  async getBackupStats(): Promise<BackupStats> {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return generateMockBackupStats();
  },

  // Start a new backup job
  async startBackup(type: 'full' | 'incremental' | 'differential', source: string, destination: string): Promise<BackupJob> {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return {
      ...generateMockBackupJob(),
      type,
      source,
      destination,
      status: 'running',
      progress: 0,
      startTime: new Date().toISOString(),
    };
  },

  // Stop a backup job
  async stopBackup(id: string): Promise<BackupJob> {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return {
      ...generateMockBackupJob(),
      id,
      status: 'failed',
      progress: 50,
      endTime: new Date().toISOString(),
    };
  },

  // Schedule a backup job
  async scheduleBackup(
    type: 'full' | 'incremental' | 'differential',
    source: string,
    destination: string,
    schedule: string
  ): Promise<BackupJob> {
    await new Promise(resolve => setTimeout(resolve, SIMULATED_DELAY));
    return {
      ...generateMockBackupJob(),
      type,
      source,
      destination,
      status: 'scheduled',
      nextScheduled: schedule,
    };
  },
}; 
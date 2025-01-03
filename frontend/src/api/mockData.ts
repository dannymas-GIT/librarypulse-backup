import { faker } from '@faker-js/faker';

export interface BackupJob {
  id: string;
  name: string;
  status: 'running' | 'completed' | 'failed' | 'scheduled';
  type: 'full' | 'incremental' | 'differential';
  source: string;
  destination: string;
  startTime: string;
  endTime?: string;
  size: number;
  progress: number;
  lastSuccess?: string;
  nextScheduled?: string;
}

export interface BackupStats {
  totalBackups: number;
  successfulBackups: number;
  failedBackups: number;
  totalDataSize: number;
  lastBackupTime: string;
  averageBackupSize: number;
  averageBackupDuration: number;
}

export const generateMockBackupJob = (): BackupJob => {
  const status = faker.helpers.arrayElement(['running', 'completed', 'failed', 'scheduled']);
  const startTime = faker.date.recent().toISOString();
  
  return {
    id: faker.string.uuid(),
    name: faker.helpers.arrayElement(['Daily-Full', 'Weekly-Full', 'Hourly-Incremental']),
    status,
    type: faker.helpers.arrayElement(['full', 'incremental', 'differential']),
    source: faker.system.directoryPath(),
    destination: faker.system.directoryPath(),
    startTime,
    endTime: status !== 'running' ? faker.date.soon({ refDate: startTime }).toISOString() : undefined,
    size: faker.number.int({ min: 1000000, max: 1000000000 }),
    progress: status === 'running' ? faker.number.int({ min: 0, max: 100 }) : 100,
    lastSuccess: faker.date.recent().toISOString(),
    nextScheduled: faker.date.soon().toISOString(),
  };
};

export const generateMockBackupStats = (): BackupStats => {
  const totalBackups = faker.number.int({ min: 100, max: 1000 });
  const failedBackups = faker.number.int({ min: 0, max: Math.floor(totalBackups * 0.1) });
  
  return {
    totalBackups,
    successfulBackups: totalBackups - failedBackups,
    failedBackups,
    totalDataSize: faker.number.int({ min: 1000000000, max: 10000000000 }),
    lastBackupTime: faker.date.recent().toISOString(),
    averageBackupSize: faker.number.int({ min: 100000000, max: 1000000000 }),
    averageBackupDuration: faker.number.int({ min: 300, max: 3600 }), // in seconds
  };
};

export const generateMockBackupJobs = (count: number = 10): BackupJob[] => {
  return Array.from({ length: count }, generateMockBackupJob);
};

// Helper function to format bytes to human readable format
export const formatBytes = (bytes: number): string => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`;
};

// Helper function to format duration in seconds to human readable format
export const formatDuration = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  return [
    hours > 0 ? `${hours}h` : null,
    minutes > 0 ? `${minutes}m` : null,
    `${remainingSeconds}s`
  ].filter(Boolean).join(' ');
}; 
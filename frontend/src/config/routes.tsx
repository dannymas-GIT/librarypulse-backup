import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { BackupJobs } from '@/components/backups/BackupJobs';
import { BackupSchedules } from '@/components/backups/BackupSchedules';
import { RetentionPolicies } from '@/components/backups/RetentionPolicies';
import { RecoveryPoints } from '@/components/backups/RecoveryPoints';
import { StorageCapacity } from '@/components/storage/StorageCapacity';
import { Deduplication } from '@/components/storage/Deduplication';
import { Archives } from '@/components/storage/Archives';
import { BackupHistory } from '@/components/reports/BackupHistory';
import { ComplianceReports } from '@/components/reports/ComplianceReports';
import { AuditLogs } from '@/components/reports/AuditLogs';
import { CustomReports } from '@/components/reports/CustomReports';
import { Performance } from '@/components/dashboard/Performance';
import { Statistics } from '@/components/dashboard/Statistics';

export const routes = [
  // Dashboard Routes
  { path: '/', element: <DashboardOverview /> },
  { path: '/performance', element: <Performance /> },
  { path: '/statistics', element: <Statistics /> },

  // Backup Routes
  { path: '/backups/jobs', element: <BackupJobs /> },
  { path: '/backups/schedules', element: <BackupSchedules /> },
  { path: '/backups/retention', element: <RetentionPolicies /> },
  { path: '/backups/recovery-points', element: <RecoveryPoints /> },

  // Storage Routes
  { path: '/storage/capacity', element: <StorageCapacity /> },
  { path: '/storage/deduplication', element: <Deduplication /> },
  { path: '/storage/archives', element: <Archives /> },

  // Reports Routes
  { path: '/reports/history', element: <BackupHistory /> },
  { path: '/reports/compliance', element: <ComplianceReports /> },
  { path: '/reports/audit', element: <AuditLogs /> },
  { path: '/reports/custom', element: <CustomReports /> },
]; 
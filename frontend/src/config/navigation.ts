import { NavigationConfig } from '../types/navigation';

export const navigationConfig: NavigationConfig = {
  dashboard: {
    label: 'Dashboard',
    items: [
      { label: 'Overview', path: '/' },
      { label: 'Performance', path: '/performance' },
      { label: 'Statistics', path: '/statistics' }
    ]
  },
  backups: {
    label: 'Backups',
    items: [
      { label: 'Active Jobs', path: '/backups/jobs' },
      { label: 'Schedules', path: '/backups/schedules' },
      { label: 'Retention Policies', path: '/backups/retention' },
      { label: 'Recovery Points', path: '/backups/recovery-points' }
    ]
  },
  storage: {
    label: 'Storage',
    items: [
      { label: 'Capacity', path: '/storage/capacity' },
      { label: 'Deduplication', path: '/storage/deduplication' },
      { label: 'Archives', path: '/storage/archives' }
    ]
  },
  reports: {
    label: 'Reports',
    items: [
      { label: 'Backup History', path: '/reports/history' },
      { label: 'Compliance', path: '/reports/compliance' },
      { label: 'Audit Logs', path: '/reports/audit' },
      { label: 'Custom Reports', path: '/reports/custom' }
    ]
  }
}; 
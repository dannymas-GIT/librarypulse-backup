import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { backupService } from '../services/backupService';
import type { BackupSettings } from '../types/backup';

export const Settings: React.FC = () => {
  const queryClient = useQueryClient();
  const { data: settings, isLoading, error } = useQuery({
    queryKey: ['backupSettings'],
    queryFn: backupService.getBackupSettings,
  });

  const mutation = useMutation({
    mutationFn: backupService.updateBackupSettings,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['backupSettings'] });
    },
  });

  const handleSettingChange = (key: keyof BackupSettings, value: any) => {
    if (!settings) return;
    
    const newSettings: BackupSettings = {
      ...settings,
      [key]: value,
    };
    
    mutation.mutate(newSettings);
  };

  if (isLoading) {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg animate-pulse">
        <div className="px-4 py-5 sm:px-6">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="border-t border-gray-200">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="mt-1 h-4 bg-gray-200 rounded w-2/3 sm:mt-0 sm:col-span-2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        Failed to load backup settings
      </div>
    );
  }

  if (!settings) return null;

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Backup Settings</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Configure your backup preferences</p>
      </div>
      <div className="border-t border-gray-200">
        {/* Retention Period */}
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Retention Period</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <select
              value={settings.retentionPeriod}
              onChange={(e) => handleSettingChange('retentionPeriod', parseInt(e.target.value))}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value={7}>7 days</option>
              <option value={14}>14 days</option>
              <option value={30}>30 days</option>
              <option value={60}>60 days</option>
              <option value={90}>90 days</option>
            </select>
          </dd>
        </div>

        {/* Compression Level */}
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Compression Level</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <select
              value={settings.compressionLevel}
              onChange={(e) => handleSettingChange('compressionLevel', e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </dd>
        </div>

        {/* Schedule Enabled */}
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Enable Scheduled Backups</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.scheduleEnabled}
                onChange={(e) => handleSettingChange('scheduleEnabled', e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2">
                {settings.scheduleEnabled ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </dd>
        </div>

        {/* Email Notifications */}
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm font-medium text-gray-500">Email Notifications</dt>
          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2">
                {settings.emailNotifications ? 'Enabled' : 'Disabled'}
              </span>
            </div>
          </dd>
        </div>
      </div>
    </div>
  );
}; 
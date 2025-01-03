import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { backupService } from '../services/backupService';
import { formatBytes, formatRelativeTime } from '../utils/formatters';
import type { BackupHistoryItem } from '../types/backup';

export const History: React.FC = () => {
  const { data: history, isLoading, error } = useQuery({
    queryKey: ['backupHistory'],
    queryFn: backupService.getBackupHistory,
  });

  if (isLoading) {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg animate-pulse">
        <div className="px-4 py-5 sm:px-6">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3].map((i) => (
              <li key={i} className="px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-5 w-5 bg-gray-200 rounded-full"></div>
                    <div className="ml-3">
                      <div className="h-4 bg-gray-200 rounded w-32 mb-1"></div>
                      <div className="h-3 bg-gray-200 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        Failed to load backup history
      </div>
    );
  }

  if (!history?.length) {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Backup History</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">No backup history available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Backup History</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">View past backup operations</p>
      </div>
      <div className="border-t border-gray-200">
        <ul className="divide-y divide-gray-200">
          {history.map((item: BackupHistoryItem) => (
            <li key={item.id} className="px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg 
                      className={`h-5 w-5 ${item.status === 'successful' ? 'text-green-500' : 'text-red-500'}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d={item.status === 'successful' ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"} 
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      {item.status === 'successful' ? 'Backup completed successfully' : 'Backup failed'}
                      {item.message && ` - ${item.message}`}
                    </p>
                    <p className="text-sm text-gray-500">
                      {formatBytes(item.size)} • {item.duration}s
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {formatRelativeTime(item.timestamp)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}; 
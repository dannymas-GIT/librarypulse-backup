import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { backupService } from '../services/backupService';
import { formatRelativeTime } from '../utils/formatters';

export const BackupJobs: React.FC = () => {
  const { data: jobs, isLoading, error } = useQuery({
    queryKey: ['backupJobs'],
    queryFn: backupService.getBackupJobs,
  });

  if (isLoading) {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg animate-pulse">
        <div className="px-4 py-5 sm:px-6">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
        <div className="border-t border-gray-200">
          {[1, 2].map((i) => (
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
        Failed to load backup jobs
      </div>
    );
  }

  if (!jobs?.length) {
    return (
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Backup Jobs</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">No backup jobs configured</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Backup Jobs</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Manage and monitor your backup jobs</p>
      </div>
      <div className="border-t border-gray-200">
        {jobs.map((job) => (
          <div key={job.id} className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">{job.name}</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    job.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {job.status}
                  </span>
                  <span className="text-gray-500">{job.schedule}</span>
                </div>
                {job.lastRun && (
                  <span className="text-gray-500 text-sm">
                    Last run: {formatRelativeTime(job.lastRun)}
                  </span>
                )}
                <span className="text-gray-500 text-sm">
                  Next run: {formatRelativeTime(job.nextRun)}
                </span>
              </div>
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
}; 
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { backupService } from '../services/backupService';
import { formatBytes } from '../utils/formatters';
import { Card } from './ui/Card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { AlertCircle, CheckCircle2, Clock, Database } from 'lucide-react';

// Mock data - replace with real data from API when available
const backupTrendData = [
  { time: '4:06:07 PM', backups: 110 },
  { time: '6:06:07 PM', backups: 65 },
  { time: '8:06:07 PM', backups: 98 },
  { time: '10:06:07 PM', backups: 75 },
  { time: '12:06:07 AM', backups: 55 },
  { time: '2:06:07 AM', backups: 95 },
  { time: '4:06:07 AM', backups: 45 },
  { time: '6:06:07 AM', backups: 105 },
  { time: '8:06:07 AM', backups: 55 },
  { time: '10:06:07 AM', backups: 115 },
  { time: '12:06:07 PM', backups: 48 },
  { time: '2:06:07 PM', backups: 95 }
];

const backupIssues = [
  { name: 'Incomplete Backups', count: 2400 },
  { name: 'Storage Space Low', count: 1800 },
  { name: 'Verification Failed', count: 1200 }
];

export const Overview: React.FC = () => {
  const { data: status, isLoading, error } = useQuery({
    queryKey: ['backupStatus'],
    queryFn: backupService.getBackupStatus,
  });

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="grid grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="h-24">
              <div className="w-full h-full bg-gray-200 rounded" />
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <Card key={i} className="h-[300px]">
              <div className="w-full h-full bg-gray-200 rounded" />
            </Card>
          ))}
        </div>
        <Card className="h-[400px]">
          <div className="w-full h-full bg-gray-200 rounded" />
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        Failed to load backup status
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <Card className="metric-card">
          <div className="metric-icon bg-error-50">
            <AlertCircle className="w-6 h-6 text-error-500" />
          </div>
          <div>
            <div className="metric-label">Failed Backups</div>
            <div className="metric-value">89</div>
          </div>
        </Card>

        <Card className="metric-card">
          <div className="metric-icon bg-success-50">
            <CheckCircle2 className="w-6 h-6 text-success-500" />
          </div>
          <div>
            <div className="metric-label">Successful Backups</div>
            <div className="metric-value">1,247</div>
          </div>
        </Card>

        <Card className="metric-card">
          <div className="metric-icon bg-primary-50">
            <Clock className="w-6 h-6 text-primary-500" />
          </div>
          <div>
            <div className="metric-label">Pending Jobs</div>
            <div className="metric-value">47</div>
          </div>
        </Card>

        <Card className="metric-card">
          <div className="metric-icon bg-warning-50">
            <Database className="w-6 h-6 text-warning-500" />
          </div>
          <div>
            <div className="metric-label">Storage Used</div>
            <div className="metric-value">{formatBytes(status?.storageUsed || 0)}</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Backup Job Trend (24h)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={backupTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 12 }}
                interval={2}
              />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="backups"
                stroke="#0ea5e9"
                strokeWidth={2}
                dot={false}
                fill="#e0f2fe"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Top Backup Issues</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={backupIssues}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" />
              <YAxis 
                type="category" 
                dataKey="name" 
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#0ea5e9" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Backup Jobs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Job Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Completed
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Successful
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    Daily Backup {i}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {formatBytes(Math.random() * 1000000000)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {Math.floor(Math.random() * 300)}s
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date().toLocaleTimeString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}; 
import React from 'react';
import { Card } from '@/components/ui/Card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { History, CheckCircle, XCircle, AlertTriangle, Clock, Download, Filter, RefreshCw } from 'lucide-react';

const successRateTrend = [
  { date: '2024-01-01', success: 98, failure: 2 },
  { date: '2024-01-02', success: 97, failure: 3 },
  { date: '2024-01-03', success: 99, failure: 1 },
  { date: '2024-01-04', success: 100, failure: 0 },
  { date: '2024-01-05', success: 96, failure: 4 },
  { date: '2024-01-06', success: 98, failure: 2 },
  { date: '2024-01-07', success: 99, failure: 1 }
];

const backupTypes = [
  { name: 'Full Backup', value: 40, color: '#0ea5e9' },
  { name: 'Incremental', value: 45, color: '#22c55e' },
  { name: 'Differential', value: 15, color: '#f59e0b' }
];

const backupHistory = [
  {
    id: 1,
    jobName: 'Daily Full Backup',
    startTime: '2024-01-07 00:00:00',
    endTime: '2024-01-07 02:30:00',
    duration: '2h 30m',
    type: 'Full',
    size: '1.2 TB',
    status: 'Success',
    speed: '145 MB/s',
    verificationStatus: 'Verified'
  },
  {
    id: 2,
    jobName: 'Hourly Incremental',
    startTime: '2024-01-07 01:00:00',
    endTime: '2024-01-07 01:15:00',
    duration: '15m',
    type: 'Incremental',
    size: '50 GB',
    status: 'Success',
    speed: '120 MB/s',
    verificationStatus: 'Verified'
  },
  {
    id: 3,
    jobName: 'Weekly Archive',
    startTime: '2024-01-07 03:00:00',
    endTime: '2024-01-07 06:45:00',
    duration: '3h 45m',
    type: 'Full',
    size: '2.5 TB',
    status: 'Failed',
    speed: '0 MB/s',
    verificationStatus: 'Failed'
  },
  {
    id: 4,
    jobName: 'System State Backup',
    startTime: '2024-01-07 12:00:00',
    endTime: '2024-01-07 12:45:00',
    duration: '45m',
    type: 'Differential',
    size: '200 GB',
    status: 'Warning',
    speed: '85 MB/s',
    verificationStatus: 'Warning'
  },
  {
    id: 5,
    jobName: 'Database Backup',
    startTime: '2024-01-07 15:00:00',
    endTime: '2024-01-07 16:30:00',
    duration: '1h 30m',
    type: 'Full',
    size: '800 GB',
    status: 'Success',
    speed: '155 MB/s',
    verificationStatus: 'Verified'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Success':
      return 'bg-green-100 text-green-800';
    case 'Failed':
      return 'bg-red-100 text-red-800';
    case 'Warning':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const BackupHistory: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Backup History</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Export Report
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
            <RefreshCw className="w-5 h-5 mr-2" />
            Refresh
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <History className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Total Backups</div>
              <div className="text-2xl font-bold text-blue-600">1,248</div>
              <div className="text-xs text-gray-500">Last 30 days</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Success Rate</div>
              <div className="text-2xl font-bold text-green-600">98.5%</div>
              <div className="text-xs text-gray-500">Above target</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <XCircle className="w-8 h-8 text-red-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Failed Backups</div>
              <div className="text-2xl font-bold text-red-600">18</div>
              <div className="text-xs text-gray-500">Last 30 days</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Average Duration</div>
              <div className="text-2xl font-bold text-purple-600">1.8h</div>
              <div className="text-xs text-gray-500">Per backup</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Success Rate Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={successRateTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="success"
                name="Success Rate (%)"
                stroke="#22c55e"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="failure"
                name="Failure Rate (%)"
                stroke="#ef4444"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Backup Type Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={backupTypes}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {backupTypes.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Backup History Table */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Backup Jobs</h2>
          <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center">
            <Filter className="w-4 h-4 mr-1" />
            Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verification</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {backupHistory.map((job) => (
                <tr key={job.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {job.jobName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.startTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.endTime}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.speed}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(job.verificationStatus)}`}>
                      {job.verificationStatus}
                    </span>
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
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
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Play, Pause, StopCircle, RefreshCw, AlertTriangle } from 'lucide-react';

const activeJobs = [
  {
    id: 1,
    name: 'Daily Full Backup - Main DB',
    type: 'Full',
    progress: 78,
    timeRemaining: '45 minutes',
    speed: '385 MB/s',
    status: 'Running',
    priority: 'High'
  },
  {
    id: 2,
    name: 'Weekly Archive - Documents',
    type: 'Incremental',
    progress: 92,
    timeRemaining: '12 minutes',
    speed: '420 MB/s',
    status: 'Running',
    priority: 'Medium'
  },
  {
    id: 3,
    name: 'System State Backup',
    type: 'Full',
    progress: 45,
    timeRemaining: '1 hour 15 minutes',
    speed: '290 MB/s',
    status: 'Running',
    priority: 'High'
  },
  {
    id: 4,
    name: 'User Data Backup',
    type: 'Differential',
    progress: 0,
    timeRemaining: 'Queued',
    speed: '-',
    status: 'Queued',
    priority: 'Low'
  }
];

const jobTypeData = [
  { name: 'Full', value: 35, color: '#0ea5e9' },
  { name: 'Incremental', value: 45, color: '#22c55e' },
  { name: 'Differential', value: 20, color: '#f59e0b' }
];

const jobStatusData = [
  { name: 'Running', count: 3 },
  { name: 'Queued', count: 4 },
  { name: 'Completed', count: 12 },
  { name: 'Failed', count: 1 }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Running':
      return 'bg-blue-100 text-blue-800';
    case 'Queued':
      return 'bg-yellow-100 text-yellow-800';
    case 'Completed':
      return 'bg-green-100 text-green-800';
    case 'Failed':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'text-red-600';
    case 'Medium':
      return 'text-yellow-600';
    case 'Low':
      return 'text-blue-600';
    default:
      return 'text-gray-600';
  }
};

export const BackupJobs: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Active Backup Jobs</h1>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100">
            <RefreshCw className="w-5 h-5 inline-block mr-2" />
            Refresh
          </button>
          <button className="px-4 py-2 bg-green-50 text-green-600 rounded-md hover:bg-green-100">
            <Play className="w-5 h-5 inline-block mr-2" />
            New Job
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-sm text-gray-600">Active Jobs</div>
          <div className="text-2xl font-bold text-blue-600">3</div>
          <div className="text-xs text-gray-500">2 high priority</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Queued Jobs</div>
          <div className="text-2xl font-bold text-yellow-600">4</div>
          <div className="text-xs text-gray-500">Starting soon</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Completed Today</div>
          <div className="text-2xl font-bold text-green-600">12</div>
          <div className="text-xs text-gray-500">100% success rate</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Failed Jobs</div>
          <div className="text-2xl font-bold text-red-600">1</div>
          <div className="text-xs text-gray-500">View details</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Job Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={jobTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {jobTypeData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Job Status Overview</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={jobStatusData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Active Jobs Table */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Active Jobs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Remaining</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {activeJobs.map((job) => (
                <tr key={job.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {job.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${job.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{job.progress}%</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.timeRemaining}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.speed}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-sm font-medium ${getPriorityColor(job.priority)}`}>
                      {job.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-yellow-600 hover:text-yellow-900">
                        <Pause className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <StopCircle className="w-5 h-5" />
                      </button>
                    </div>
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
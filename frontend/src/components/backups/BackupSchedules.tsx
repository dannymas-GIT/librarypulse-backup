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
import { Calendar, Clock, Plus, Edit2, Trash2 } from 'lucide-react';

const scheduleDistribution = [
  { name: 'Daily', value: 45, color: '#0ea5e9' },
  { name: 'Weekly', value: 30, color: '#22c55e' },
  { name: 'Monthly', value: 15, color: '#f59e0b' },
  { name: 'Custom', value: 10, color: '#8b5cf6' }
];

const timeDistribution = [
  { hour: '00:00', jobs: 5 },
  { hour: '03:00', jobs: 8 },
  { hour: '06:00', jobs: 12 },
  { hour: '09:00', jobs: 4 },
  { hour: '12:00', jobs: 6 },
  { hour: '15:00', jobs: 3 },
  { hour: '18:00', jobs: 7 },
  { hour: '21:00', jobs: 9 }
];

const schedules = [
  {
    id: 1,
    name: 'Daily Full Backup',
    type: 'Full',
    frequency: 'Daily',
    time: '00:00',
    lastRun: '2024-01-20 00:00:00',
    nextRun: '2024-01-21 00:00:00',
    status: 'Active',
    retention: '30 days'
  },
  {
    id: 2,
    name: 'Weekly Archive',
    type: 'Full',
    frequency: 'Weekly',
    time: '02:00',
    lastRun: '2024-01-14 02:00:00',
    nextRun: '2024-01-21 02:00:00',
    status: 'Active',
    retention: '90 days'
  },
  {
    id: 3,
    name: 'Hourly Incremental',
    type: 'Incremental',
    frequency: 'Hourly',
    time: 'Every hour',
    lastRun: '2024-01-20 15:00:00',
    nextRun: '2024-01-20 16:00:00',
    status: 'Active',
    retention: '7 days'
  },
  {
    id: 4,
    name: 'Monthly Full Backup',
    type: 'Full',
    frequency: 'Monthly',
    time: '03:00',
    lastRun: '2023-12-01 03:00:00',
    nextRun: '2024-02-01 03:00:00',
    status: 'Paused',
    retention: '365 days'
  }
];

export const BackupSchedules: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Backup Schedules</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="w-5 h-5 inline-block mr-2" />
          New Schedule
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-sm text-gray-600">Total Schedules</div>
          <div className="text-2xl font-bold text-blue-600">12</div>
          <div className="text-xs text-gray-500">4 types configured</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Active Schedules</div>
          <div className="text-2xl font-bold text-green-600">10</div>
          <div className="text-xs text-gray-500">2 paused</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Next 24 Hours</div>
          <div className="text-2xl font-bold text-yellow-600">8</div>
          <div className="text-xs text-gray-500">Scheduled jobs</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Total Daily Volume</div>
          <div className="text-2xl font-bold text-purple-600">2.5 TB</div>
          <div className="text-xs text-gray-500">Estimated size</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Schedule Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={scheduleDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {scheduleDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Backup Time Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timeDistribution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="jobs" name="Number of Jobs" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Schedules Table */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Configured Schedules</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Run</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Run</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {schedules.map((schedule) => (
                <tr key={schedule.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {schedule.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {schedule.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {schedule.frequency}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {schedule.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {schedule.lastRun}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {schedule.nextRun}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      schedule.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {schedule.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {schedule.retention}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-5 h-5" />
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
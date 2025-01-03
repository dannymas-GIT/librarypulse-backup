import React from 'react';
import { Card } from '@/components/ui/Card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
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
import { Table } from '@/components/ui/Table';

const performanceData = [
  { time: '00:00', speed: 85, load: 45, latency: 12 },
  { time: '04:00', speed: 92, load: 38, latency: 8 },
  { time: '08:00', speed: 78, load: 65, latency: 15 },
  { time: '12:00', speed: 95, load: 72, latency: 18 },
  { time: '16:00', speed: 88, load: 54, latency: 11 },
  { time: '20:00', speed: 82, load: 42, latency: 9 },
];

const backupDistribution = [
  { name: 'Full Backups', value: 35, color: '#0ea5e9' },
  { name: 'Incremental', value: 45, color: '#22c55e' },
  { name: 'Differential', value: 20, color: '#f59e0b' },
];

const recentBackups = [
  { id: 1, type: 'Full', startTime: '2024-01-20 08:00:00', duration: '45m', size: '1.2TB', speed: '450MB/s', status: 'Completed' },
  { id: 2, type: 'Incremental', startTime: '2024-01-20 12:00:00', duration: '15m', size: '250GB', speed: '380MB/s', status: 'Completed' },
  { id: 3, type: 'Differential', startTime: '2024-01-20 16:00:00', duration: '25m', size: '500GB', speed: '420MB/s', status: 'Completed' },
  { id: 4, type: 'Incremental', startTime: '2024-01-20 20:00:00', duration: '12m', size: '180GB', speed: '400MB/s', status: 'Completed' },
];

export const Performance: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Backup Performance</h1>

      {/* Performance Metrics Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-sm text-gray-600">Average Backup Speed</div>
          <div className="text-2xl font-bold text-blue-600">425 MB/s</div>
          <div className="text-xs text-gray-500">↑ 5% from last week</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Success Rate</div>
          <div className="text-2xl font-bold text-green-600">99.8%</div>
          <div className="text-xs text-gray-500">↑ 0.2% from last week</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Average Load</div>
          <div className="text-2xl font-bold text-yellow-600">52%</div>
          <div className="text-xs text-gray-500">↓ 3% from last week</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Average Latency</div>
          <div className="text-2xl font-bold text-purple-600">12ms</div>
          <div className="text-xs text-gray-500">↓ 1ms from last week</div>
        </Card>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Backup Performance Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="speed" 
                name="Speed (MB/s)" 
                stroke="#0ea5e9" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="load" 
                name="System Load (%)" 
                stroke="#f59e0b" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="latency" 
                name="Latency (ms)" 
                stroke="#8b5cf6" 
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
                data={backupDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {backupDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* System Load Chart */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">System Resource Usage</h2>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={performanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="load" 
              name="System Load" 
              stroke="#f59e0b" 
              fill="#fef3c7" 
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Recent Backups Table */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Backup Performance</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentBackups.map((backup) => (
                <tr key={backup.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{backup.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{backup.startTime}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{backup.duration}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{backup.size}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{backup.speed}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {backup.status}
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
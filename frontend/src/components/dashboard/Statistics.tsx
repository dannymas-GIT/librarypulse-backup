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
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { 
  BarChart2,
  TrendingUp,
  Clock,
  HardDrive,
  Download,
  RefreshCw,
  Filter,
  Calendar,
  Database,
  Server
} from 'lucide-react';

const backupSizeTrend = [
  { month: 'Jan', size: 2.5, growth: 0.3 },
  { month: 'Feb', size: 2.8, growth: 0.4 },
  { month: 'Mar', size: 3.2, growth: 0.5 },
  { month: 'Apr', size: 3.7, growth: 0.6 },
  { month: 'May', size: 4.3, growth: 0.7 },
  { month: 'Jun', size: 5.0, growth: 0.8 },
  { month: 'Jul', size: 5.8, growth: 0.9 }
];

const backupFrequency = [
  { time: '00:00', count: 15 },
  { time: '04:00', count: 8 },
  { time: '08:00', count: 25 },
  { time: '12:00', count: 30 },
  { time: '16:00', count: 28 },
  { time: '20:00', count: 12 }
];

const dataTypeDistribution = [
  { name: 'Documents', value: 35, color: '#0ea5e9' },
  { name: 'Databases', value: 25, color: '#22c55e' },
  { name: 'Media Files', value: 20, color: '#f59e0b' },
  { name: 'System Files', value: 20, color: '#8b5cf6' }
];

const monthlyStats = [
  {
    id: 1,
    month: 'January 2024',
    totalBackups: 1250,
    successRate: '99.2%',
    avgSize: '2.5 TB',
    avgDuration: '1.8h',
    dataGrowth: '+8.5%',
    deduplication: '3.2:1'
  },
  {
    id: 2,
    month: 'December 2023',
    totalBackups: 1180,
    successRate: '98.8%',
    avgSize: '2.3 TB',
    avgDuration: '1.7h',
    dataGrowth: '+7.8%',
    deduplication: '3.1:1'
  },
  {
    id: 3,
    month: 'November 2023',
    totalBackups: 1120,
    successRate: '98.5%',
    avgSize: '2.1 TB',
    avgDuration: '1.6h',
    dataGrowth: '+7.2%',
    deduplication: '3.0:1'
  },
  {
    id: 4,
    month: 'October 2023',
    totalBackups: 1050,
    successRate: '98.0%',
    avgSize: '1.9 TB',
    avgDuration: '1.5h',
    dataGrowth: '+6.8%',
    deduplication: '2.9:1'
  }
];

export const Statistics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Backup Statistics</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Export Statistics
          </button>
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center">
            <RefreshCw className="w-5 h-5 mr-2" />
            Refresh Data
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <Database className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Total Data Protected</div>
              <div className="text-2xl font-bold text-blue-600">156.8 TB</div>
              <div className="text-xs text-gray-500">Across all backups</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Monthly Growth</div>
              <div className="text-2xl font-bold text-green-600">8.5%</div>
              <div className="text-xs text-gray-500">↑ 0.7% from last month</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Average Duration</div>
              <div className="text-2xl font-bold text-yellow-600">1.8h</div>
              <div className="text-xs text-gray-500">Per backup job</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Server className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Deduplication Ratio</div>
              <div className="text-2xl font-bold text-purple-600">3.2:1</div>
              <div className="text-xs text-gray-500">Space saved</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Backup Size Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={backupSizeTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="size"
                name="Total Size (TB)"
                stroke="#0ea5e9"
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="growth"
                name="Monthly Growth (TB)"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Data Type Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dataTypeDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {dataTypeDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Backup Frequency Chart */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Backup Frequency Distribution</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={backupFrequency}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" name="Number of Backups" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Monthly Statistics Table */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Monthly Statistics</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center">
              <Filter className="w-4 h-4 mr-1" />
              Filter
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              Change Period
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Backups</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Success Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Growth</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deduplication</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {monthlyStats.map((stat) => (
                <tr key={stat.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {stat.month}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {stat.totalBackups}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {stat.successRate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {stat.avgSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {stat.avgDuration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {stat.dataGrowth}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {stat.deduplication}
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
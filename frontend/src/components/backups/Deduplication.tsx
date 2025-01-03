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
import { Layers, Database, TrendingUp, Percent, RefreshCw, Settings, Filter } from 'lucide-react';

const dedupeRatioTrend = [
  { date: '2024-01-01', ratio: 3.2 },
  { date: '2024-01-02', ratio: 3.5 },
  { date: '2024-01-03', ratio: 3.8 },
  { date: '2024-01-04', ratio: 3.6 },
  { date: '2024-01-05', ratio: 4.1 },
  { date: '2024-01-06', ratio: 4.3 },
  { date: '2024-01-07', ratio: 4.5 }
];

const storageComparison = [
  { category: 'Original', size: 450 },
  { category: 'After Deduplication', size: 100 }
];

const dataTypes = [
  { name: 'System Files', value: 35, color: '#0ea5e9' },
  { name: 'User Data', value: 25, color: '#22c55e' },
  { name: 'Applications', value: 20, color: '#f59e0b' },
  { name: 'Media Files', value: 20, color: '#8b5cf6' }
];

const dedupeJobs = [
  {
    id: 1,
    name: 'System Backup Dedupe',
    originalSize: '2.5 TB',
    dedupeSize: '600 GB',
    ratio: '4.2:1',
    savings: '76%',
    status: 'Completed',
    duration: '45 minutes',
    lastRun: '2024-01-07 08:00:00'
  },
  {
    id: 2,
    name: 'User Data Dedupe',
    originalSize: '1.8 TB',
    dedupeSize: '450 GB',
    ratio: '4.0:1',
    savings: '75%',
    status: 'Running',
    duration: '30 minutes',
    lastRun: '2024-01-07 12:00:00'
  },
  {
    id: 3,
    name: 'Application Backup Dedupe',
    originalSize: '3.2 TB',
    dedupeSize: '800 GB',
    ratio: '4.0:1',
    savings: '75%',
    status: 'Completed',
    duration: '55 minutes',
    lastRun: '2024-01-07 16:00:00'
  },
  {
    id: 4,
    name: 'Media Files Dedupe',
    originalSize: '5.0 TB',
    dedupeSize: '1.2 TB',
    ratio: '4.2:1',
    savings: '76%',
    status: 'Scheduled',
    duration: '90 minutes',
    lastRun: '2024-01-07 20:00:00'
  },
  {
    id: 5,
    name: 'Archive Dedupe',
    originalSize: '8.5 TB',
    dedupeSize: '2.0 TB',
    ratio: '4.25:1',
    savings: '76.5%',
    status: 'Failed',
    duration: '120 minutes',
    lastRun: '2024-01-08 00:00:00'
  }
];

export const Deduplication: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Deduplication</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Configure
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
            <RefreshCw className="w-5 h-5 mr-2" />
            Run Analysis
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <Layers className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Total Data Processed</div>
              <div className="text-2xl font-bold text-blue-600">21 TB</div>
              <div className="text-xs text-gray-500">Original size</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Database className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">After Deduplication</div>
              <div className="text-2xl font-bold text-green-600">5 TB</div>
              <div className="text-xs text-gray-500">Optimized size</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Deduplication Ratio</div>
              <div className="text-2xl font-bold text-yellow-600">4.2:1</div>
              <div className="text-xs text-gray-500">Average ratio</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Percent className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Storage Saved</div>
              <div className="text-2xl font-bold text-purple-600">76%</div>
              <div className="text-xs text-gray-500">Space reduction</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Deduplication Ratio Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dedupeRatioTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="ratio"
                name="Deduplication Ratio"
                stroke="#0ea5e9"
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
                data={dataTypes}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {dataTypes.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Storage Comparison */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Storage Comparison</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={storageComparison}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="size" name="Storage Size (TB)" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Deduplication Jobs Table */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Deduplication Jobs</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">After Dedupe</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ratio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Savings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Run</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {dedupeJobs.map((job) => (
                <tr key={job.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {job.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.originalSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.dedupeSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.ratio}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.savings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      job.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : job.status === 'Running'
                        ? 'bg-blue-100 text-blue-800'
                        : job.status === 'Scheduled'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.lastRun}
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
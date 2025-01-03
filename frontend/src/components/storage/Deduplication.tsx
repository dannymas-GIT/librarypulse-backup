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
  Layers,
  TrendingUp,
  Zap,
  HardDrive,
  Download,
  RefreshCw,
  Filter,
  Settings
} from 'lucide-react';

const deduplicationTrend = [
  { date: '2024-01-01', original: 10.2, deduplicated: 4.1 },
  { date: '2024-01-02', original: 11.5, deduplicated: 4.6 },
  { date: '2024-01-03', original: 12.8, deduplicated: 5.1 },
  { date: '2024-01-04', original: 14.1, deduplicated: 5.6 },
  { date: '2024-01-05', original: 15.4, deduplicated: 6.2 },
  { date: '2024-01-06', original: 16.7, deduplicated: 6.7 },
  { date: '2024-01-07', original: 18.0, deduplicated: 7.2 }
];

const dataTypeDistribution = [
  { name: 'Documents', value: 35, ratio: '4.2:1', color: '#0ea5e9' },
  { name: 'Images', value: 25, ratio: '2.8:1', color: '#22c55e' },
  { name: 'Databases', value: 20, ratio: '3.5:1', color: '#f59e0b' },
  { name: 'System Files', value: 20, ratio: '3.1:1', color: '#8b5cf6' }
];

const performanceMetrics = [
  { time: '00:00', throughput: 450, cpu: 35 },
  { time: '04:00', throughput: 380, cpu: 28 },
  { time: '08:00', throughput: 520, cpu: 42 },
  { time: '12:00', throughput: 480, cpu: 38 },
  { time: '16:00', throughput: 550, cpu: 45 },
  { time: '20:00', throughput: 420, cpu: 32 }
];

const deduplicationJobs = [
  {
    id: 1,
    name: 'Daily Incremental Dedup',
    status: 'Running',
    originalSize: '2.5 TB',
    deduplicatedSize: '850 GB',
    ratio: '3.0:1',
    savings: '1.65 TB',
    duration: '45 minutes',
    throughput: '450 MB/s'
  },
  {
    id: 2,
    name: 'Weekly Full Dedup',
    status: 'Completed',
    originalSize: '8.2 TB',
    deduplicatedSize: '2.1 TB',
    ratio: '3.9:1',
    savings: '6.1 TB',
    duration: '3.5 hours',
    throughput: '380 MB/s'
  },
  {
    id: 3,
    name: 'Archive Dedup',
    status: 'Queued',
    originalSize: '5.8 TB',
    deduplicatedSize: '1.8 TB',
    ratio: '3.2:1',
    savings: '4.0 TB',
    duration: 'Pending',
    throughput: '-'
  },
  {
    id: 4,
    name: 'System State Dedup',
    status: 'Warning',
    originalSize: '1.2 TB',
    deduplicatedSize: '450 GB',
    ratio: '2.7:1',
    savings: '750 GB',
    duration: '35 minutes',
    throughput: '320 MB/s'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Running':
      return 'bg-blue-100 text-blue-800';
    case 'Completed':
      return 'bg-green-100 text-green-800';
    case 'Warning':
      return 'bg-yellow-100 text-yellow-800';
    case 'Error':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const Deduplication: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Data Deduplication</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Configure
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Export Report
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <Layers className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Overall Ratio</div>
              <div className="text-2xl font-bold text-blue-600">3.5:1</div>
              <div className="text-xs text-gray-500">Deduplication ratio</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <HardDrive className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Storage Saved</div>
              <div className="text-2xl font-bold text-green-600">10.8 TB</div>
              <div className="text-xs text-gray-500">Total savings</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Zap className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Processing Rate</div>
              <div className="text-2xl font-bold text-yellow-600">425 MB/s</div>
              <div className="text-xs text-gray-500">Average speed</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Weekly Trend</div>
              <div className="text-2xl font-bold text-purple-600">+5%</div>
              <div className="text-xs text-gray-500">Deduplication ratio</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Deduplication Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={deduplicationTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="original"
                name="Original Size (TB)"
                stroke="#0ea5e9"
                fill="#0ea5e9"
                fillOpacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="deduplicated"
                name="Deduplicated Size (TB)"
                stroke="#22c55e"
                fill="#22c55e"
                fillOpacity={0.2}
              />
            </AreaChart>
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
                label={({ name, ratio }) => `${name} (${ratio})`}
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

      {/* Performance Metrics */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Deduplication Performance</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={performanceMetrics}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="throughput"
              name="Throughput (MB/s)"
              stroke="#0ea5e9"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cpu"
              name="CPU Usage (%)"
              stroke="#f59e0b"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Deduplication Jobs Table */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Active Deduplication Jobs</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center">
              <Filter className="w-4 h-4 mr-1" />
              Filter
            </button>
            <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 flex items-center">
              <RefreshCw className="w-4 h-4 mr-1" />
              Refresh
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deduplicated Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ratio</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Space Saved</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Throughput</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deduplicationJobs.map((job) => (
                <tr key={job.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {job.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.originalSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.deduplicatedSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.ratio}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.savings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.throughput}
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
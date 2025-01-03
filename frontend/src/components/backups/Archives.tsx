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
import { Archive, Clock, Database, Calendar, Search, Download, Filter, RefreshCw } from 'lucide-react';

const archiveGrowth = [
  { month: 'Jan', size: 25 },
  { month: 'Feb', size: 32 },
  { month: 'Mar', size: 38 },
  { month: 'Apr', size: 45 },
  { month: 'May', size: 52 },
  { month: 'Jun', size: 58 },
  { month: 'Jul', size: 65 }
];

const retentionDistribution = [
  { name: '1 Year', value: 40, color: '#0ea5e9' },
  { name: '3 Years', value: 30, color: '#22c55e' },
  { name: '5 Years', value: 20, color: '#f59e0b' },
  { name: '7+ Years', value: 10, color: '#8b5cf6' }
];

const archiveTypes = [
  { name: 'Financial Records', value: 35, color: '#0ea5e9' },
  { name: 'Legal Documents', value: 25, color: '#22c55e' },
  { name: 'Email Archives', value: 20, color: '#f59e0b' },
  { name: 'System Logs', value: 20, color: '#8b5cf6' }
];

const archives = [
  {
    id: 1,
    name: 'Financial Records 2023',
    type: 'Financial',
    size: '2.5 TB',
    items: '1.2M',
    retention: '7 years',
    status: 'Active',
    lastAccessed: '2024-01-07',
    location: 'Cold Storage'
  },
  {
    id: 2,
    name: 'Legal Documents 2023',
    type: 'Legal',
    size: '1.8 TB',
    items: '800K',
    retention: '10 years',
    status: 'Active',
    lastAccessed: '2024-01-05',
    location: 'Cloud Archive'
  },
  {
    id: 3,
    name: 'Email Archives Q4 2023',
    type: 'Email',
    size: '3.2 TB',
    items: '15M',
    retention: '5 years',
    status: 'Processing',
    lastAccessed: '2024-01-06',
    location: 'Local Archive'
  },
  {
    id: 4,
    name: 'System Logs 2023',
    type: 'Logs',
    size: '5.0 TB',
    items: '50M',
    retention: '3 years',
    status: 'Active',
    lastAccessed: '2024-01-07',
    location: 'Cold Storage'
  },
  {
    id: 5,
    name: 'HR Documents 2023',
    type: 'Legal',
    size: '1.5 TB',
    items: '500K',
    retention: '7 years',
    status: 'Retrieving',
    lastAccessed: '2024-01-08',
    location: 'Cloud Archive'
  }
];

export const Archives: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Archives</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Search className="w-5 h-5 mr-2" />
            Search Archives
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
            <Archive className="w-5 h-5 mr-2" />
            Create Archive
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <Archive className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Total Archives</div>
              <div className="text-2xl font-bold text-blue-600">14 TB</div>
              <div className="text-xs text-gray-500">Across all types</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Database className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Total Items</div>
              <div className="text-2xl font-bold text-green-600">67.5M</div>
              <div className="text-xs text-gray-500">Archived objects</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Average Age</div>
              <div className="text-2xl font-bold text-yellow-600">3.2 yrs</div>
              <div className="text-xs text-gray-500">Across archives</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Retention Period</div>
              <div className="text-2xl font-bold text-purple-600">7 yrs</div>
              <div className="text-xs text-gray-500">Average retention</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Archive Growth Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={archiveGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="size"
                name="Archive Size (TB)"
                stroke="#0ea5e9"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Archive Types Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={archiveTypes}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {archiveTypes.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Retention Distribution */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Retention Period Distribution</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={retentionDistribution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" name="Percentage of Archives" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Archives Table */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Archive List</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Accessed</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {archives.map((archive) => (
                <tr key={archive.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {archive.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {archive.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {archive.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {archive.items}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {archive.retention}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      archive.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : archive.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {archive.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {archive.lastAccessed}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {archive.location}
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
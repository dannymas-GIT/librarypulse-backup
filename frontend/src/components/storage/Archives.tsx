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
import { 
  Archive,
  Clock,
  HardDrive,
  AlertTriangle,
  Download,
  RefreshCw,
  Filter,
  Plus,
  Search,
  Trash2,
  ArrowUpCircle
} from 'lucide-react';

const archiveAgeTrend = [
  { age: '0-30 days', size: 2.5 },
  { age: '31-90 days', size: 4.8 },
  { age: '91-180 days', size: 6.2 },
  { age: '181-365 days', size: 8.5 },
  { age: '1-2 years', size: 12.4 },
  { age: '2+ years', size: 15.6 }
];

const retentionDistribution = [
  { name: 'Short Term (30d)', value: 25, color: '#0ea5e9' },
  { name: 'Medium Term (90d)', value: 35, color: '#22c55e' },
  { name: 'Long Term (1y)', value: 25, color: '#f59e0b' },
  { name: 'Permanent', value: 15, color: '#8b5cf6' }
];

const archiveTypeDistribution = [
  { name: 'Database Backups', value: 40, color: '#0ea5e9' },
  { name: 'File System', value: 30, color: '#22c55e' },
  { name: 'Email Archives', value: 20, color: '#f59e0b' },
  { name: 'System Images', value: 10, color: '#8b5cf6' }
];

const archives = [
  {
    id: 1,
    name: 'Q4 2023 Database Backup',
    type: 'Database',
    size: '2.5 TB',
    created: '2023-12-31',
    retention: '1 year',
    expiryDate: '2024-12-31',
    status: 'Active',
    location: 'Cloud Storage'
  },
  {
    id: 2,
    name: 'Annual System Backup 2023',
    type: 'System Image',
    size: '1.8 TB',
    created: '2023-12-31',
    retention: 'Permanent',
    expiryDate: 'Never',
    status: 'Active',
    location: 'Tape Library'
  },
  {
    id: 3,
    name: 'Email Archive Dec 2023',
    type: 'Email',
    size: '500 GB',
    created: '2023-12-31',
    retention: '90 days',
    expiryDate: '2024-03-31',
    status: 'Warning',
    location: 'Local Storage'
  },
  {
    id: 4,
    name: 'File System Backup Q4',
    type: 'File System',
    size: '3.2 TB',
    created: '2023-12-31',
    retention: '180 days',
    expiryDate: '2024-06-30',
    status: 'Active',
    location: 'Cloud Storage'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800';
    case 'Warning':
      return 'bg-yellow-100 text-yellow-800';
    case 'Expired':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const Archives: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Archives</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search archives..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            New Archive
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
              <div className="text-2xl font-bold text-blue-600">50.0 TB</div>
              <div className="text-xs text-gray-500">4,586 items</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Average Age</div>
              <div className="text-2xl font-bold text-green-600">186</div>
              <div className="text-xs text-gray-500">Days</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Expiring Soon</div>
              <div className="text-2xl font-bold text-yellow-600">15</div>
              <div className="text-xs text-gray-500">Next 30 days</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <HardDrive className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Growth Rate</div>
              <div className="text-2xl font-bold text-purple-600">2.8 TB</div>
              <div className="text-xs text-gray-500">Per month</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Archive Age Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={archiveAgeTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="size" name="Size (TB)" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Retention Policy Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={retentionDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {retentionDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Archive Type Distribution */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Archive Type Distribution</h2>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={archiveTypeDistribution}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              label
            >
              {archiveTypeDistribution.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Archive Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
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
                    {archive.created}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {archive.retention}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {archive.expiryDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(archive.status)}`}>
                      {archive.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {archive.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <ArrowUpCircle className="w-5 h-5" />
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
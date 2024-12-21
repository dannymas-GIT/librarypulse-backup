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
  Database,
  HardDrive,
  AlertTriangle,
  TrendingUp,
  Download,
  RefreshCw,
  Filter,
  Settings
} from 'lucide-react';

const storageUsageTrend = [
  { date: '2024-01-01', used: 3.2, available: 6.8 },
  { date: '2024-01-02', used: 3.5, available: 6.5 },
  { date: '2024-01-03', used: 3.8, available: 6.2 },
  { date: '2024-01-04', used: 4.1, available: 5.9 },
  { date: '2024-01-05', used: 4.4, available: 5.6 },
  { date: '2024-01-06', used: 4.7, available: 5.3 },
  { date: '2024-01-07', used: 5.0, available: 5.0 }
];

const storageDistribution = [
  { name: 'Full Backups', value: 45, color: '#0ea5e9' },
  { name: 'Incremental', value: 25, color: '#22c55e' },
  { name: 'Archives', value: 20, color: '#f59e0b' },
  { name: 'System', value: 10, color: '#8b5cf6' }
];

const growthProjection = [
  { month: 'Jan', actual: 5.0, projected: 5.0 },
  { month: 'Feb', actual: null, projected: 5.4 },
  { month: 'Mar', actual: null, projected: 5.9 },
  { month: 'Apr', actual: null, projected: 6.4 },
  { month: 'May', actual: null, projected: 7.0 },
  { month: 'Jun', actual: null, projected: 7.6 }
];

const storageVolumes = [
  {
    id: 1,
    name: 'Primary Backup Storage',
    totalCapacity: '10 TB',
    used: '5.0 TB',
    available: '5.0 TB',
    status: 'Warning',
    growthRate: '+256 GB/day',
    daysRemaining: '45'
  },
  {
    id: 2,
    name: 'Archive Storage',
    totalCapacity: '20 TB',
    used: '8.5 TB',
    available: '11.5 TB',
    status: 'Healthy',
    growthRate: '+128 GB/day',
    daysRemaining: '180'
  },
  {
    id: 3,
    name: 'Cloud Storage',
    totalCapacity: '50 TB',
    used: '15.2 TB',
    available: '34.8 TB',
    status: 'Healthy',
    growthRate: '+512 GB/day',
    daysRemaining: '120'
  },
  {
    id: 4,
    name: 'Disaster Recovery',
    totalCapacity: '10 TB',
    used: '4.8 TB',
    available: '5.2 TB',
    status: 'Healthy',
    growthRate: '+256 GB/day',
    daysRemaining: '90'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Healthy':
      return 'bg-green-100 text-green-800';
    case 'Warning':
      return 'bg-yellow-100 text-yellow-800';
    case 'Critical':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const StorageCapacity: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Storage Capacity</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Configure Storage
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
            <Database className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Total Storage</div>
              <div className="text-2xl font-bold text-blue-600">90 TB</div>
              <div className="text-xs text-gray-500">Across all volumes</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <HardDrive className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Available Space</div>
              <div className="text-2xl font-bold text-green-600">56.5 TB</div>
              <div className="text-xs text-gray-500">62.8% free</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Critical Volumes</div>
              <div className="text-2xl font-bold text-yellow-600">1</div>
              <div className="text-xs text-gray-500">Requires attention</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <TrendingUp className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Growth Rate</div>
              <div className="text-2xl font-bold text-purple-600">1.15 TB</div>
              <div className="text-xs text-gray-500">Per week</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Storage Usage Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={storageUsageTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="used"
                name="Used Space (TB)"
                stackId="1"
                stroke="#0ea5e9"
                fill="#0ea5e9"
              />
              <Area
                type="monotone"
                dataKey="available"
                name="Available Space (TB)"
                stackId="1"
                stroke="#22c55e"
                fill="#22c55e"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Storage Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={storageDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {storageDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Growth Projection */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Storage Growth Projection</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={growthProjection}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="actual"
              name="Actual Usage (TB)"
              stroke="#0ea5e9"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="projected"
              name="Projected Usage (TB)"
              stroke="#22c55e"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Storage Volumes Table */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Storage Volumes</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Volume Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Capacity</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Used</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth Rate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Remaining</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {storageVolumes.map((volume) => (
                <tr key={volume.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {volume.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {volume.totalCapacity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {volume.used}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {volume.available}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(volume.status)}`}>
                      {volume.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {volume.growthRate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {volume.daysRemaining} days
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
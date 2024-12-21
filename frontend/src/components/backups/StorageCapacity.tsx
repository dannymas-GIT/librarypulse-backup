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
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { HardDrive, Database, AlertTriangle, ArrowUp, Server, Cloud, Archive } from 'lucide-react';

const storageDistribution = [
  { name: 'Primary Storage', value: 45, color: '#0ea5e9' },
  { name: 'Secondary Storage', value: 30, color: '#22c55e' },
  { name: 'Archive Storage', value: 15, color: '#f59e0b' },
  { name: 'Cloud Storage', value: 10, color: '#8b5cf6' }
];

const capacityTrend = [
  { date: '2024-01-01', used: 2.5, available: 7.5 },
  { date: '2024-01-02', used: 3.0, available: 7.0 },
  { date: '2024-01-03', used: 3.8, available: 6.2 },
  { date: '2024-01-04', used: 4.2, available: 5.8 },
  { date: '2024-01-05', used: 4.5, available: 5.5 },
  { date: '2024-01-06', used: 5.0, available: 5.0 },
  { date: '2024-01-07', used: 5.5, available: 4.5 }
];

const storageLocations = [
  {
    id: 1,
    name: 'Primary SAN',
    type: 'Primary',
    totalCapacity: '10 TB',
    usedCapacity: '6.5 TB',
    availableCapacity: '3.5 TB',
    status: 'Healthy',
    utilizationPercent: 65,
    growthRate: '+2.5% /week'
  },
  {
    id: 2,
    name: 'Secondary NAS',
    type: 'Secondary',
    totalCapacity: '8 TB',
    usedCapacity: '4.2 TB',
    availableCapacity: '3.8 TB',
    status: 'Healthy',
    utilizationPercent: 52,
    growthRate: '+1.8% /week'
  },
  {
    id: 3,
    name: 'Cloud Storage',
    type: 'Cloud',
    totalCapacity: '20 TB',
    usedCapacity: '8.5 TB',
    availableCapacity: '11.5 TB',
    status: 'Healthy',
    utilizationPercent: 42,
    growthRate: '+3.2% /week'
  },
  {
    id: 4,
    name: 'Archive Storage',
    type: 'Archive',
    totalCapacity: '50 TB',
    usedCapacity: '35 TB',
    availableCapacity: '15 TB',
    status: 'Warning',
    utilizationPercent: 70,
    growthRate: '+1.2% /week'
  },
  {
    id: 5,
    name: 'Disaster Recovery',
    type: 'Secondary',
    totalCapacity: '15 TB',
    usedCapacity: '7.8 TB',
    availableCapacity: '7.2 TB',
    status: 'Healthy',
    utilizationPercent: 52,
    growthRate: '+2.0% /week'
  }
];

export const StorageCapacity: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Storage Capacity</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Server className="w-5 h-5 mr-2" />
            Add Storage
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
            <Cloud className="w-5 h-5 mr-2" />
            Cloud Integration
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <HardDrive className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Total Capacity</div>
              <div className="text-2xl font-bold text-blue-600">103 TB</div>
              <div className="text-xs text-gray-500">Across all storage</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Database className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Used Space</div>
              <div className="text-2xl font-bold text-green-600">62 TB</div>
              <div className="text-xs text-gray-500">60.2% utilized</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Critical Threshold</div>
              <div className="text-2xl font-bold text-yellow-600">2</div>
              <div className="text-xs text-gray-500">Locations at risk</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <ArrowUp className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Growth Rate</div>
              <div className="text-2xl font-bold text-purple-600">2.1%</div>
              <div className="text-xs text-gray-500">Per week</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
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

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Capacity Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={capacityTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="used"
                name="Used Capacity (TB)"
                stackId="1"
                stroke="#0ea5e9"
                fill="#e0f2fe"
              />
              <Area
                type="monotone"
                dataKey="available"
                name="Available Capacity (TB)"
                stackId="1"
                stroke="#22c55e"
                fill="#dcfce7"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Storage Locations Table */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Storage Locations</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Used</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilization</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth Rate</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {storageLocations.map((location) => (
                <tr key={location.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {location.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {location.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {location.totalCapacity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {location.usedCapacity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {location.availableCapacity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      location.status === 'Healthy'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {location.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div
                          className={`h-2 rounded-full ${
                            location.utilizationPercent >= 80
                              ? 'bg-red-500'
                              : location.utilizationPercent >= 60
                              ? 'bg-yellow-500'
                              : 'bg-green-500'
                          }`}
                          style={{ width: `${location.utilizationPercent}%` }}
                        />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{location.utilizationPercent}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {location.growthRate}
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
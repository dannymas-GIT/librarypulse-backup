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
import { Plus, Edit2, Trash2, Clock, HardDrive, Archive, AlertTriangle } from 'lucide-react';

const retentionDistribution = [
  { name: '7 Days', value: 30, color: '#0ea5e9' },
  { name: '30 Days', value: 40, color: '#22c55e' },
  { name: '90 Days', value: 20, color: '#f59e0b' },
  { name: '365 Days', value: 10, color: '#8b5cf6' }
];

const storageProjection = [
  { day: '1', size: 100 },
  { day: '7', size: 250 },
  { day: '15', size: 400 },
  { day: '30', size: 650 },
  { day: '60', size: 900 },
  { day: '90', size: 1200 }
];

const policies = [
  {
    id: 1,
    name: 'Short-term Backups',
    retention: '7 days',
    schedule: 'Daily',
    dataTypes: 'System Files, User Data',
    storageLocation: 'Local Disk',
    compression: 'High',
    estimatedSize: '500 GB',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Monthly Archives',
    retention: '90 days',
    schedule: 'Monthly',
    dataTypes: 'All Data',
    storageLocation: 'Cloud Storage',
    compression: 'Medium',
    estimatedSize: '2 TB',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Critical Data Retention',
    retention: '365 days',
    schedule: 'Weekly',
    dataTypes: 'Critical Business Data',
    storageLocation: 'Offsite Storage',
    compression: 'Low',
    estimatedSize: '1.5 TB',
    status: 'Active'
  },
  {
    id: 4,
    name: 'Compliance Backups',
    retention: '7 years',
    schedule: 'Monthly',
    dataTypes: 'Financial Data, Legal Documents',
    storageLocation: 'Secure Archive',
    compression: 'None',
    estimatedSize: '5 TB',
    status: 'Paused'
  }
];

export const RetentionPolicies: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Retention Policies</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Plus className="w-5 h-5 inline-block mr-2" />
          New Policy
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="text-sm text-gray-600">Active Policies</div>
          <div className="text-2xl font-bold text-blue-600">8</div>
          <div className="text-xs text-gray-500">2 pending review</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Total Data Protected</div>
          <div className="text-2xl font-bold text-green-600">9 TB</div>
          <div className="text-xs text-gray-500">Across all policies</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Retention Period</div>
          <div className="text-2xl font-bold text-yellow-600">7-365</div>
          <div className="text-xs text-gray-500">Days range</div>
        </Card>
        <Card className="p-4">
          <div className="text-sm text-gray-600">Storage Efficiency</div>
          <div className="text-2xl font-bold text-purple-600">68%</div>
          <div className="text-xs text-gray-500">With compression</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Retention Period Distribution</h2>
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

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Storage Growth Projection</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={storageProjection}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="size" 
                name="Storage Size (GB)" 
                stroke="#0ea5e9"
                fill="#e0f2fe" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Policies Table */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Configured Policies</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Types</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Storage Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compression</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Est. Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {policies.map((policy) => (
                <tr key={policy.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {policy.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {policy.retention}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {policy.schedule}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {policy.dataTypes}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {policy.storageLocation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {policy.compression}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {policy.estimatedSize}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      policy.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {policy.status}
                    </span>
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
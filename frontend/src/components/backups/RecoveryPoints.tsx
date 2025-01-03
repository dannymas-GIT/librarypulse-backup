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
  Line
} from 'recharts';
import { Clock, Database, HardDrive, Search, Download, RefreshCw } from 'lucide-react';

const recoveryPointsData = [
  { hour: '00:00', points: 12 },
  { hour: '04:00', points: 15 },
  { hour: '08:00', points: 28 },
  { hour: '12:00', points: 22 },
  { hour: '16:00', points: 25 },
  { hour: '20:00', points: 18 }
];

const storageUsage = [
  { date: '2024-01-01', size: 250 },
  { date: '2024-01-02', size: 280 },
  { date: '2024-01-03', size: 310 },
  { date: '2024-01-04', size: 290 },
  { date: '2024-01-05', size: 320 },
  { date: '2024-01-06', size: 350 },
  { date: '2024-01-07', size: 380 }
];

const recoveryPoints = [
  {
    id: 1,
    timestamp: '2024-01-07 08:00:00',
    type: 'Full Backup',
    size: '1.2 TB',
    status: 'Available',
    location: 'Primary Storage',
    retention: '30 days',
    verificationStatus: 'Verified'
  },
  {
    id: 2,
    timestamp: '2024-01-07 12:00:00',
    type: 'Incremental',
    size: '50 GB',
    status: 'Available',
    location: 'Primary Storage',
    retention: '14 days',
    verificationStatus: 'Pending'
  },
  {
    id: 3,
    timestamp: '2024-01-07 16:00:00',
    type: 'Incremental',
    size: '75 GB',
    status: 'Available',
    location: 'Primary Storage',
    retention: '14 days',
    verificationStatus: 'Verified'
  },
  {
    id: 4,
    timestamp: '2024-01-07 20:00:00',
    type: 'Differential',
    size: '250 GB',
    status: 'Available',
    location: 'Secondary Storage',
    retention: '7 days',
    verificationStatus: 'Failed'
  },
  {
    id: 5,
    timestamp: '2024-01-08 00:00:00',
    type: 'Incremental',
    size: '45 GB',
    status: 'Processing',
    location: 'Primary Storage',
    retention: '14 days',
    verificationStatus: 'In Progress'
  }
];

export const RecoveryPoints: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Recovery Points</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Search className="w-5 h-5 mr-2" />
            Browse Points
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
            <RefreshCw className="w-5 h-5 mr-2" />
            Refresh Status
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Total Recovery Points</div>
              <div className="text-2xl font-bold text-blue-600">124</div>
              <div className="text-xs text-gray-500">Last 24 hours</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Database className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Storage Used</div>
              <div className="text-2xl font-bold text-green-600">2.8 TB</div>
              <div className="text-xs text-gray-500">Across all points</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <HardDrive className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Available Points</div>
              <div className="text-2xl font-bold text-yellow-600">98%</div>
              <div className="text-xs text-gray-500">Healthy status</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Download className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Recovery Success</div>
              <div className="text-2xl font-bold text-purple-600">99.9%</div>
              <div className="text-xs text-gray-500">Last 30 days</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Recovery Points Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={recoveryPointsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="points" name="Recovery Points" fill="#0ea5e9" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Storage Usage Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={storageUsage}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="size" 
                name="Storage Size (GB)" 
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recovery Points Table */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Recovery Points</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retention</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Verification</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recoveryPoints.map((point) => (
                <tr key={point.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {point.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {point.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {point.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      point.status === 'Available' 
                        ? 'bg-green-100 text-green-800'
                        : point.status === 'Processing'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {point.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {point.location}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {point.retention}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      point.verificationStatus === 'Verified'
                        ? 'bg-green-100 text-green-800'
                        : point.verificationStatus === 'Pending' || point.verificationStatus === 'In Progress'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {point.verificationStatus}
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
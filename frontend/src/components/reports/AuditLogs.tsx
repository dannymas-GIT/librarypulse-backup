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
  Activity,
  AlertTriangle,
  User,
  Clock,
  Download,
  Filter,
  RefreshCw,
  Search,
  Shield,
  FileText
} from 'lucide-react';

const activityTrend = [
  { hour: '00:00', events: 45 },
  { hour: '04:00', events: 32 },
  { hour: '08:00', events: 78 },
  { hour: '12:00', events: 95 },
  { hour: '16:00', events: 86 },
  { hour: '20:00', events: 52 }
];

const eventDistribution = [
  { name: 'System Events', value: 40, color: '#0ea5e9' },
  { name: 'User Actions', value: 30, color: '#22c55e' },
  { name: 'Security Events', value: 20, color: '#f59e0b' },
  { name: 'Backup Events', value: 10, color: '#8b5cf6' }
];

const severityDistribution = [
  { name: 'Info', value: 65 },
  { name: 'Warning', value: 25 },
  { name: 'Error', value: 8 },
  { name: 'Critical', value: 2 }
];

const auditLogs = [
  {
    id: 1,
    timestamp: '2024-01-07 15:45:23',
    event: 'Backup Job Started',
    user: 'system',
    action: 'BACKUP_START',
    resource: 'Daily Full Backup',
    status: 'Info',
    details: 'Scheduled backup job initiated',
    ip: '192.168.1.100'
  },
  {
    id: 2,
    timestamp: '2024-01-07 15:30:12',
    event: 'User Login',
    user: 'admin',
    action: 'USER_LOGIN',
    resource: 'Web Console',
    status: 'Info',
    details: 'Successful login attempt',
    ip: '10.0.0.15'
  },
  {
    id: 3,
    timestamp: '2024-01-07 15:15:45',
    event: 'Policy Modified',
    user: 'admin',
    action: 'POLICY_UPDATE',
    resource: 'Retention Policy',
    status: 'Warning',
    details: 'Retention period modified from 30 to 45 days',
    ip: '10.0.0.15'
  },
  {
    id: 4,
    timestamp: '2024-01-07 15:00:00',
    event: 'Storage Alert',
    user: 'system',
    action: 'STORAGE_ALERT',
    resource: 'Primary Storage',
    status: 'Error',
    details: 'Storage capacity exceeds 90%',
    ip: '192.168.1.100'
  },
  {
    id: 5,
    timestamp: '2024-01-07 14:45:30',
    event: 'Backup Failed',
    user: 'system',
    action: 'BACKUP_ERROR',
    resource: 'Weekly Archive',
    status: 'Critical',
    details: 'Backup job failed due to network timeout',
    ip: '192.168.1.100'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Info':
      return 'bg-blue-100 text-blue-800';
    case 'Warning':
      return 'bg-yellow-100 text-yellow-800';
    case 'Error':
      return 'bg-red-100 text-red-800';
    case 'Critical':
      return 'bg-red-200 text-red-900';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const AuditLogs: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Audit Logs</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search logs..."
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Export Logs
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <Activity className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Total Events</div>
              <div className="text-2xl font-bold text-blue-600">12,458</div>
              <div className="text-xs text-gray-500">Last 24 hours</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Critical Events</div>
              <div className="text-2xl font-bold text-yellow-600">23</div>
              <div className="text-xs text-gray-500">Require attention</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <User className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Active Users</div>
              <div className="text-2xl font-bold text-green-600">18</div>
              <div className="text-xs text-gray-500">Currently online</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Security Events</div>
              <div className="text-2xl font-bold text-purple-600">156</div>
              <div className="text-xs text-gray-500">Last 24 hours</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Activity Timeline</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activityTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="events"
                name="Events"
                stroke="#0ea5e9"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Event Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={eventDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {eventDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Severity Distribution */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Event Severity Distribution</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={severityDistribution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" name="Event Count" fill="#0ea5e9" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Audit Logs Table */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Events</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resource</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {auditLogs.map((log) => (
                <tr key={log.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.timestamp}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {log.event}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.action}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.resource}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(log.status)}`}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.details}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {log.ip}
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
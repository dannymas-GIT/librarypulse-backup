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
  FileText,
  Plus,
  Download,
  Filter,
  RefreshCw,
  Calendar,
  Clock,
  Settings,
  Edit2,
  Trash2,
  Copy
} from 'lucide-react';

const reportUsage = [
  { month: 'Jan', generated: 45, scheduled: 30 },
  { month: 'Feb', generated: 52, scheduled: 35 },
  { month: 'Mar', generated: 48, scheduled: 32 },
  { month: 'Apr', generated: 65, scheduled: 40 },
  { month: 'May', generated: 58, scheduled: 38 },
  { month: 'Jun', generated: 72, scheduled: 45 },
  { month: 'Jul', generated: 68, scheduled: 42 }
];

const reportTypes = [
  { name: 'Backup Summary', value: 35, color: '#0ea5e9' },
  { name: 'Performance', value: 25, color: '#22c55e' },
  { name: 'Storage Usage', value: 20, color: '#f59e0b' },
  { name: 'Compliance', value: 20, color: '#8b5cf6' }
];

const customReports = [
  {
    id: 1,
    name: 'Monthly Backup Overview',
    type: 'Backup Summary',
    schedule: 'Monthly',
    lastRun: '2024-01-01 00:00:00',
    nextRun: '2024-02-01 00:00:00',
    format: 'PDF',
    recipients: 'admin@company.com',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Weekly Performance Report',
    type: 'Performance',
    schedule: 'Weekly',
    lastRun: '2024-01-07 00:00:00',
    nextRun: '2024-01-14 00:00:00',
    format: 'Excel',
    recipients: 'team@company.com',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Storage Capacity Trends',
    type: 'Storage Usage',
    schedule: 'Daily',
    lastRun: '2024-01-07 23:00:00',
    nextRun: '2024-01-08 23:00:00',
    format: 'PDF',
    recipients: 'storage@company.com',
    status: 'Paused'
  },
  {
    id: 4,
    name: 'Quarterly Compliance Review',
    type: 'Compliance',
    schedule: 'Quarterly',
    lastRun: '2024-01-01 00:00:00',
    nextRun: '2024-04-01 00:00:00',
    format: 'PDF',
    recipients: 'compliance@company.com',
    status: 'Active'
  },
  {
    id: 5,
    name: 'Daily Backup Status',
    type: 'Backup Summary',
    schedule: 'Daily',
    lastRun: '2024-01-07 23:59:00',
    nextRun: '2024-01-08 23:59:00',
    format: 'HTML',
    recipients: 'backups@company.com',
    status: 'Active'
  }
];

const reportTemplates = [
  {
    id: 1,
    name: 'Backup Summary Template',
    description: 'Overview of backup jobs, success rates, and storage usage',
    type: 'Backup Summary',
    lastModified: '2024-01-05'
  },
  {
    id: 2,
    name: 'Performance Analysis',
    description: 'Detailed performance metrics and trends',
    type: 'Performance',
    lastModified: '2024-01-06'
  },
  {
    id: 3,
    name: 'Storage Usage Report',
    description: 'Storage capacity, growth, and optimization metrics',
    type: 'Storage Usage',
    lastModified: '2024-01-07'
  },
  {
    id: 4,
    name: 'Compliance Status',
    description: 'Regulatory compliance status and audit findings',
    type: 'Compliance',
    lastModified: '2024-01-07'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return 'bg-green-100 text-green-800';
    case 'Paused':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const CustomReports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Custom Reports</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            New Report
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
            <Settings className="w-5 h-5 mr-2" />
            Manage Templates
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <FileText className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Total Reports</div>
              <div className="text-2xl font-bold text-blue-600">24</div>
              <div className="text-xs text-gray-500">Active reports</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Scheduled</div>
              <div className="text-2xl font-bold text-green-600">18</div>
              <div className="text-xs text-gray-500">Auto-generated</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Next Report</div>
              <div className="text-2xl font-bold text-yellow-600">2h</div>
              <div className="text-xs text-gray-500">Time remaining</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Download className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Generated</div>
              <div className="text-2xl font-bold text-purple-600">156</div>
              <div className="text-xs text-gray-500">This month</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Report Generation Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={reportUsage}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="generated"
                name="Generated Reports"
                stroke="#0ea5e9"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="scheduled"
                name="Scheduled Reports"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Report Type Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={reportTypes}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {reportTypes.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Report Templates */}
      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Available Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportTemplates.map((template) => (
            <div key={template.id} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <FileText className="w-6 h-6 text-blue-500" />
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Copy className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h3 className="font-medium text-gray-900">{template.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{template.description}</p>
              <div className="mt-2 text-xs text-gray-400">
                Last modified: {template.lastModified}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Custom Reports Table */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Configured Reports</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Run</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Run</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Format</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipients</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {customReports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {report.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.schedule}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.lastRun}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.nextRun}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.format}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.recipients}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(report.status)}`}>
                      {report.status}
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
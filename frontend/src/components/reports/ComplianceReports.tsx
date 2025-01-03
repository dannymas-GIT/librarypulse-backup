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
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  FileCheck, 
  Download, 
  Filter, 
  RefreshCw,
  Calendar,
  CheckCircle,
  XCircle
} from 'lucide-react';

const complianceTrend = [
  { date: '2024-01-01', compliant: 95, nonCompliant: 5 },
  { date: '2024-01-02', compliant: 96, nonCompliant: 4 },
  { date: '2024-01-03', compliant: 98, nonCompliant: 2 },
  { date: '2024-01-04', compliant: 97, nonCompliant: 3 },
  { date: '2024-01-05', compliant: 99, nonCompliant: 1 },
  { date: '2024-01-06', compliant: 98, nonCompliant: 2 },
  { date: '2024-01-07', compliant: 100, nonCompliant: 0 }
];

const regulatoryDistribution = [
  { name: 'GDPR', value: 35, color: '#0ea5e9' },
  { name: 'HIPAA', value: 25, color: '#22c55e' },
  { name: 'SOX', value: 20, color: '#f59e0b' },
  { name: 'PCI DSS', value: 20, color: '#8b5cf6' }
];

const complianceReports = [
  {
    id: 1,
    name: 'GDPR Compliance Report',
    regulation: 'GDPR',
    generatedDate: '2024-01-07 08:00:00',
    period: 'Q4 2023',
    status: 'Compliant',
    score: '98%',
    findings: '2 minor',
    nextAudit: '2024-04-01'
  },
  {
    id: 2,
    name: 'HIPAA Security Assessment',
    regulation: 'HIPAA',
    generatedDate: '2024-01-06 15:30:00',
    period: 'Q4 2023',
    status: 'Warning',
    score: '92%',
    findings: '3 moderate',
    nextAudit: '2024-03-15'
  },
  {
    id: 3,
    name: 'SOX Backup Compliance',
    regulation: 'SOX',
    generatedDate: '2024-01-05 12:00:00',
    period: 'Q4 2023',
    status: 'Compliant',
    score: '99%',
    findings: '1 minor',
    nextAudit: '2024-04-01'
  },
  {
    id: 4,
    name: 'PCI DSS Data Security',
    regulation: 'PCI DSS',
    generatedDate: '2024-01-04 09:15:00',
    period: 'Q4 2023',
    status: 'Non-Compliant',
    score: '85%',
    findings: '2 critical',
    nextAudit: '2024-02-15'
  },
  {
    id: 5,
    name: 'ISO 27001 Assessment',
    regulation: 'ISO 27001',
    generatedDate: '2024-01-03 14:45:00',
    period: 'Q4 2023',
    status: 'Compliant',
    score: '97%',
    findings: 'None',
    nextAudit: '2024-04-15'
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Compliant':
      return 'bg-green-100 text-green-800';
    case 'Non-Compliant':
      return 'bg-red-100 text-red-800';
    case 'Warning':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const ComplianceReports: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Compliance Reports</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
            <FileCheck className="w-5 h-5 mr-2" />
            Generate Report
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Export All
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center">
            <ShieldCheck className="w-8 h-8 text-blue-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Overall Compliance</div>
              <div className="text-2xl font-bold text-blue-600">96.8%</div>
              <div className="text-xs text-gray-500">Above target</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <AlertTriangle className="w-8 h-8 text-yellow-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Active Findings</div>
              <div className="text-2xl font-bold text-yellow-600">8</div>
              <div className="text-xs text-gray-500">Require attention</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Clock className="w-8 h-8 text-green-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Next Audit</div>
              <div className="text-2xl font-bold text-green-600">15d</div>
              <div className="text-xs text-gray-500">Days remaining</div>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 text-purple-500 mr-3" />
            <div>
              <div className="text-sm text-gray-600">Reports Generated</div>
              <div className="text-2xl font-bold text-purple-600">24</div>
              <div className="text-xs text-gray-500">This quarter</div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Compliance Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={complianceTrend}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="compliant"
                name="Compliant (%)"
                stroke="#22c55e"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="nonCompliant"
                name="Non-Compliant (%)"
                stroke="#ef4444"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Regulatory Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={regulatoryDistribution}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
                label
              >
                {regulatoryDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Compliance Reports Table */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Reports</h2>
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Regulation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Generated Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Findings</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Next Audit</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {complianceReports.map((report) => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {report.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.regulation}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.generatedDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.period}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.score}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.findings}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.nextAudit}
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
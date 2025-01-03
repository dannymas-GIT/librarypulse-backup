import React from 'react';
import { Card } from '@/components/ui/Card';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { AlertCircle, CheckCircle2, Clock, Database } from 'lucide-react';

const backupTrendData = [
  { time: '4:06:07 PM', backups: 110 },
  { time: '6:06:07 PM', backups: 65 },
  { time: '8:06:07 PM', backups: 98 },
  { time: '10:06:07 PM', backups: 75 },
  { time: '12:06:07 AM', backups: 55 },
  { time: '2:06:07 AM', backups: 95 },
  { time: '4:06:07 AM', backups: 45 },
  { time: '6:06:07 AM', backups: 105 },
  { time: '8:06:07 AM', backups: 55 },
  { time: '10:06:07 AM', backups: 115 },
  { time: '12:06:07 PM', backups: 48 },
  { time: '2:06:07 PM', backups: 95 }
];

const backupIssues = [
  { name: 'Incomplete Backups', count: 2400 },
  { name: 'Storage Space Low', count: 1800 },
  { name: 'Verification Failed', count: 1200 }
];

export const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        <Card className="metric-card">
          <div className="metric-icon bg-error-50">
            <AlertCircle className="w-6 h-6 text-error-500" />
          </div>
          <div>
            <div className="metric-label">Failed Backups</div>
            <div className="metric-value">89</div>
          </div>
        </Card>

        <Card className="metric-card">
          <div className="metric-icon bg-success-50">
            <CheckCircle2 className="w-6 h-6 text-success-500" />
          </div>
          <div>
            <div className="metric-label">Successful Backups</div>
            <div className="metric-value">1,247</div>
          </div>
        </Card>

        <Card className="metric-card">
          <div className="metric-icon bg-primary-50">
            <Clock className="w-6 h-6 text-primary-500" />
          </div>
          <div>
            <div className="metric-label">Pending Jobs</div>
            <div className="metric-value">47</div>
          </div>
        </Card>

        <Card className="metric-card">
          <div className="metric-icon bg-warning-50">
            <Database className="w-6 h-6 text-warning-500" />
          </div>
          <div>
            <div className="metric-label">Storage Used</div>
            <div className="metric-value">255.1 GB</div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Backup Job Trend (24h)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={backupTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 12 }}
                interval={2}
              />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="backups"
                stroke="#0ea5e9"
                strokeWidth={2}
                dot={false}
                fill="#e0f2fe"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h2 className="text-lg font-semibold mb-4">Top Backup Issues</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={backupIssues}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" />
              <YAxis 
                type="category" 
                dataKey="name" 
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#0ea5e9" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Recent Backup Jobs</h2>
        {/* Add your LogTable component here */}
      </Card>
    </div>
  );
}; 
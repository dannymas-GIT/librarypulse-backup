import React from 'react';
import { format } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';

interface Log {
  id: string;
  timestamp: Date;
  level: 'info' | 'warning' | 'error';
  message: string;
  source: string;
}

interface LogTableProps {
  logs: Log[];
}

const getLevelColor = (level: Log['level']) => {
  switch (level) {
    case 'info':
      return 'text-blue-600 bg-blue-50';
    case 'warning':
      return 'text-yellow-600 bg-yellow-50';
    case 'error':
      return 'text-red-600 bg-red-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

export const LogTable: React.FC<LogTableProps> = ({ logs }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Timestamp</TableHead>
          <TableHead>Level</TableHead>
          <TableHead>Source</TableHead>
          <TableHead>Message</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {logs.map((log) => (
          <TableRow key={log.id}>
            <TableCell>
              {format(log.timestamp, 'yyyy-MM-dd HH:mm:ss')}
            </TableCell>
            <TableCell>
              <span className={`px-2 py-1 rounded-full text-sm ${getLevelColor(log.level)}`}>
                {log.level}
              </span>
            </TableCell>
            <TableCell>{log.source}</TableCell>
            <TableCell>{log.message}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}; 
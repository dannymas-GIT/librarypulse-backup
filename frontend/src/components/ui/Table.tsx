import React from 'react';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export const Table: React.FC<TableProps> = ({ children, className = '', ...props }) => {
  return (
    <div className="overflow-x-auto">
      <table className={`min-w-full divide-y divide-gray-200 ${className}`} {...props}>
        {children}
      </table>
    </div>
  );
};

export const TableHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <thead className="bg-gray-50">{children}</thead>;
};

export const TableBody: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;
};

export const TableRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <tr>{children}</tr>;
};

export const TableHead: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
    >
      {children}
    </th>
  );
};

export const TableCell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{children}</td>;
}; 
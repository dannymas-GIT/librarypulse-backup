import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  LayoutDashboard, 
  Database, 
  HardDrive, 
  FileText,
  Bell, 
  Settings, 
  User 
} from 'lucide-react';
import { navigationConfig } from '@/config/navigation';

export const TopNav: React.FC = () => {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);

  const getIcon = (key: string) => {
    switch (key) {
      case 'dashboard':
        return <LayoutDashboard className="w-6 h-6" />;
      case 'backups':
        return <Database className="w-6 h-6" />;
      case 'storage':
        return <HardDrive className="w-6 h-6" />;
      case 'reports':
        return <FileText className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex justify-between h-[130px]">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/images/librarypulselogo.jpg"
                alt="Library Pulse"
                className="h-[125px] w-auto object-contain"
              />
            </Link>

            <div className="hidden md:flex ml-8 space-x-2">
              {Object.entries(navigationConfig).map(([key, menu]) => (
                <div
                  key={key}
                  className="relative group"
                >
                  <button
                    className={`flex items-center px-3 py-2 rounded-md text-base font-bold ${
                      activeMenu === key
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onMouseEnter={() => setActiveMenu(key)}
                    onClick={() => setActiveMenu(activeMenu === key ? null : key)}
                  >
                    {getIcon(key)}
                    <span className="ml-2">{menu.label}</span>
                    <ChevronDown className="ml-2 w-5 h-5" />
                  </button>

                  <div 
                    className={`absolute z-50 left-0 mt-1 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-opacity duration-150 ${
                      activeMenu === key ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onMouseEnter={() => setActiveMenu(key)}
                    onMouseLeave={() => setActiveMenu(null)}
                  >
                    <div className="py-1">
                      {menu.items.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-3 text-base font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          onClick={() => setActiveMenu(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50">
              <Bell className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50">
              <Settings className="w-6 h-6" />
            </button>
            <button className="p-2 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}; 
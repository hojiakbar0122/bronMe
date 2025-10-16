import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Menu, Bell, Search } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white px-4 py-3 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">A</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Aziza Aliyeva</h1>
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-3 h-3 mr-1" />
              <span>Toshkent shahar, tumani</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Menu className="w-5 h-5 text-gray-600" />
          <div className="relative">
            <button onClick={() => navigate('/notifications')}>
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">1</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/search')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Search className="w-5 h-5 text-blue-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
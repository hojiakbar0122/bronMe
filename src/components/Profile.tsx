import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Heart, 
  Bookmark, 
  Settings, 
  HelpCircle, 
  LogOut,
  Edit3,
  Camera,
  ChevronRight,
  Calendar,
  CreditCard
} from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const menuItems = [
    { id: 'bookings', label: 'Mening bandlovlarim', icon: Calendar, badge: '3' },
    { id: 'favorites', label: 'Yoqtirilganlar', icon: Heart, badge: null },
    { id: 'saved', label: 'Saqlangan joylar', icon: Bookmark, badge: null },
    { id: 'payments', label: 'To\'lov usullari', icon: CreditCard, badge: null },
    { id: 'settings', label: 'Sozlamalar', icon: Settings, badge: null },
    { id: 'help', label: 'Yordam', icon: HelpCircle, badge: null },
  ];

  const achievements = [
    { id: 1, title: 'Dastlabki bandlov', description: 'Birinchi bandlovingizni amalga oshirdingiz', earned: true },
    { id: 2, title: 'Faol foydalanuvchi', description: '10 ta bandlov amalga oshirdingiz', earned: true },
    { id: 3, title: 'Fikr bildiruvchi', description: '5 ta sharh yozdingiz', earned: false },
    { id: 4, title: 'Ishonchli mijoz', description: '50 ta bandlov amalga oshirdingiz', earned: false }
  ];

  return (
    <div className="py-6">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl p-6 mb-6 border border-gray-100">
        <div className="flex items-center space-x-4 mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <Camera className="w-4 h-4 text-white" />
            </button>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h2 className="text-xl font-bold text-gray-900">Aziza Aliyeva</h2>
              <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <Edit3 className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center text-sm text-gray-600 mb-2">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Toshkent shahar, tumani</span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                <span>+998 90 123 45 67</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                <span>aziza@example.com</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Menu Items */}
      <div className="bg-white rounded-2xl mb-6 border border-gray-100 overflow-hidden">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <span className="font-medium text-gray-900">{item.label}</span>
              </div>
              <div className="flex items-center space-x-2">
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Logout Button */}
      <button className="w-full bg-white rounded-2xl p-4 border border-gray-100 flex items-center justify-center space-x-2 text-red-600 hover:bg-red-50 transition-colors">
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Chiqish</span>
      </button>
    </div>
  );
};

export default Profile;
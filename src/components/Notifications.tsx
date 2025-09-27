import React, { useState } from 'react';
import { ArrowLeft, Bell, X, Trash2, CheckCircle,  XCircle } from 'lucide-react';

interface NotificationsProps {
  onBack: () => void;
}

interface Notification {
  id: number;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
  time: string;
  isRead: boolean;
}

const Notifications: React.FC<NotificationsProps> = ({ onBack }) => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'info',
      title: 'Yangilikni eshitdingizmi?',
      message: 'Sootiga 150 000 so\'mdan — qulay va zamonaviy hotel! 🏨',
      time: '12-sentyabr, 10:35',
      isRead: false
    },
    {
      id: 2,
      type: 'success',
      title: 'Muvaffaqiyatli',
      message: 'Buyurtmangiz muvaffaqiyatli qabul qilindi.',
      time: '12-sentyabr, 10:35',
      isRead: false
    },
    {
      id: 3,
      type: 'error',
      title: 'Xatolik yuz berdi',
      message: 'Texnik xatolik yuzaga keldi',
      time: '12-sentyabr, 10:35',
      isRead: false
    },
    {
      id: 4,
      type: 'info',
      title: 'Yangi takliflar',
      message: 'Sizning hududingizdagi yangi xizmatlar haqida bilib oling',
      time: '11-sentyabr, 15:20',
      isRead: true
    },
    {
      id: 5,
      type: 'success',
      title: 'Bandlov tasdiqlandi',
      message: 'Uchrashuv kafesidagi bandlovingiz tasdiqlandi',
      time: '11-sentyabr, 09:15',
      isRead: true
    }
  ]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'error':
        return <XCircle className="w-6 h-6 text-red-500" />;
      default:
        return <Bell className="w-6 h-6 text-blue-500" />;
    }
  };

  const getNotificationBg = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-100';
      case 'error':
        return 'bg-red-100';
      default:
        return 'bg-blue-100';
    }
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const todayNotifications = notifications.filter(n => n.time.includes('12-sentyabr'));
  const yesterdayNotifications = notifications.filter(n => n.time.includes('11-sentyabr'));

  if (notifications.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-md mx-auto bg-white min-h-screen">
          {/* Header */}
          <header className="bg-white px-4 py-3 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={onBack}
                  className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>
                <h1 className="text-lg font-semibold text-gray-900">Bildirishnomalar</h1>
              </div>
            </div>
          </header>

          {/* Empty State */}
          <div className="flex flex-col items-center justify-center px-6 py-20">
            <div className="relative mb-12">
              <div className="w-48 h-48 bg-blue-50 rounded-full flex items-center justify-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Bell className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-800 text-center text-lg mb-8 font-medium">
              Sizda yangi xabarlar mavjud emas
            </p>

            <button 
              onClick={onBack}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
            >
              Asosiy menu
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <header className="bg-white px-4 py-3 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBack}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>
              <h1 className="text-lg font-semibold text-gray-900">Bildirishnomalar</h1>
            </div>
            
            <button 
              onClick={clearAllNotifications}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Trash2 className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="pb-6">
          {/* Today's Notifications */}
          {todayNotifications.length > 0 && (
            <div className="mb-6">
              <div className="px-4 py-3 bg-gray-50">
                <h2 className="text-sm font-medium text-gray-600">Bugun</h2>
              </div>
              
              <div className="space-y-0">
                {todayNotifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`px-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      !notification.isRead ? 'bg-blue-50' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getNotificationBg(notification.type)}`}>
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {notification.title}
                          </h3>
                          <button 
                            onClick={() => removeNotification(notification.id)}
                            className="p-1 hover:bg-gray-200 rounded-full transition-colors ml-2"
                          >
                            <X className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{notification.time}</span>
                          
                          {!notification.isRead && (
                            <button 
                              onClick={() => markAsRead(notification.id)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-medium transition-colors"
                            >
                              Batafsil
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Yesterday's Notifications */}
          {yesterdayNotifications.length > 0 && (
            <div>
              <div className="px-4 py-3 bg-gray-50">
                <h2 className="text-sm font-medium text-gray-600">Kecha</h2>
              </div>
              
              <div className="space-y-0">
                {yesterdayNotifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`px-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      !notification.isRead ? 'bg-blue-50' : 'bg-white'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${getNotificationBg(notification.type)}`}>
                        {getNotificationIcon(notification.type)}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-sm font-medium text-gray-900 truncate">
                            {notification.title}
                          </h3>
                          <button 
                            onClick={() => removeNotification(notification.id)}
                            className="p-1 hover:bg-gray-200 rounded-full transition-colors ml-2"
                          >
                            <X className="w-4 h-4 text-gray-400" />
                          </button>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-2 leading-relaxed">
                          {notification.message}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{notification.time}</span>
                          
                          {!notification.isRead && (
                            <button 
                              onClick={() => markAsRead(notification.id)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full text-xs font-medium transition-colors"
                            >
                              Batafsil
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
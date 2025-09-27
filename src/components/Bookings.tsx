import { useState } from 'react';
import { Calendar, Clock, MapPin, Phone, Star, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const Bookings = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const bookings = [
    {
      id: 1,
      businessName: 'Uchrashuv Kafesi',
      businessImage: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-15',
      time: '14:30',
      status: 'confirmed',
      address: 'Chilonzor tumani, Bunyodkor ko\'chasi',
      phone: '+998 90 123 45 67',
      rating: 9.6,
      service: 'Stol bandi',
      guests: 4,
      price: 150000
    },
    {
      id: 2,
      businessName: 'Elite Sartaroshxona',
      businessImage: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-16',
      time: '10:00',
      status: 'pending',
      address: 'Yunusobod tumani, Amir Temur shoh ko\'chasi',
      phone: '+998 91 234 56 78',
      rating: 9.2,
      service: 'Soch kesish va styling',
      guests: 1,
      price: 80000
    },
    {
      id: 3,
      businessName: 'Fitness Club Premium',
      businessImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-12',
      time: '18:00',
      status: 'completed',
      address: 'Mirzo Ulug\'bek tumani, Universitetskaya ko\'chasi',
      phone: '+998 93 345 67 89',
      rating: 9.8,
      service: 'Shaxsiy murabbiy',
      guests: 1,
      price: 200000
    },
    {
      id: 4,
      businessName: 'Milliy Taomlar Restorani',
      businessImage: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: '2025-01-10',
      time: '19:30',
      status: 'cancelled',
      address: 'Shayxontohur tumani, Navoi ko\'chasi',
      phone: '+998 94 456 78 90',
      rating: 9.4,
      service: 'Kechki ovqat',
      guests: 6,
      price: 300000
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Tasdiqlangan';
      case 'pending':
        return 'Kutilmoqda';
      case 'completed':
        return 'Yakunlangan';
      case 'cancelled':
        return 'Bekor qilingan';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredBookings = bookings.filter(booking => {
    if (activeFilter === 'all') return true;
    return booking.status === activeFilter;
  });

  const filters = [
    { id: 'all', label: 'Barchasi', count: bookings.length },
    { id: 'confirmed', label: 'Tasdiqlangan', count: bookings.filter(b => b.status === 'confirmed').length },
    { id: 'pending', label: 'Kutilmoqda', count: bookings.filter(b => b.status === 'pending').length },
    { id: 'completed', label: 'Yakunlangan', count: bookings.filter(b => b.status === 'completed').length }
  ];

  return (
    <div className="py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Bandlovlarim</h2>
        
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredBookings.map((booking) => (
          <div key={booking.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
            <div className="p-4">
              <div className="flex items-start space-x-4">
                <img
                  src={booking.businessImage}
                  alt={booking.businessName}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{booking.businessName}</h3>
                      <p className="text-sm text-gray-600">{booking.service}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(booking.status)}
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                        {getStatusText(booking.status)}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(booking.date).toLocaleDateString('uz-UZ')}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{booking.time}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate">{booking.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-green-500 fill-current" />
                        <span className="text-sm font-medium text-gray-900">{booking.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">{booking.guests} kishi</span>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">
                        {booking.price.toLocaleString()} so'm
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {booking.status === 'confirmed' && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
                      Yo'nalishni ko'rsatish
                    </button>
                    <button className="flex items-center justify-center w-12 h-10 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
                      <Phone className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>
              )}

              {booking.status === 'pending' && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-red-100 text-red-700 py-2 px-4 rounded-xl text-sm font-medium hover:bg-red-200 transition-colors">
                      Bekor qilish
                    </button>
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-xl text-sm font-medium hover:bg-blue-700 transition-colors">
                      O'zgartirish
                    </button>
                  </div>
                </div>
              )}

              {booking.status === 'completed' && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                    Fikr bildirish
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredBookings.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Bandlovlar topilmadi</h3>
          <p className="text-gray-600 mb-6">Hozircha bu kategoriyada bandlovlar yo'q</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
            Yangi bandlov qilish
          </button>
        </div>
      )}
    </div>
  );
};

export default Bookings;
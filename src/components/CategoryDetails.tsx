import React, { useState } from 'react';
import { ArrowLeft, Bell, User, Search, Heart, MapPin, Star } from 'lucide-react';

interface CategoryDetailsProps {
  categoryName: string;
  onBack: () => void;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ categoryName, onBack }) => {
  const [likedBusinesses, setLikedBusinesses] = useState<number[]>([1, 4]);

  const businesses = [
    {
      id: 1,
      name: 'Erkaklar sartaroshi',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '1.5 km',
      location: 'Toshkent shahri',
      rating: 4.5,
      reviews: 86,
      price: '150 000 so\'m',
      isLiked: true
    },
    {
      id: 2,
      name: 'Erkaklar sartaroshi',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '1.5 km',
      location: 'Toshkent shahri',
      rating: 4.5,
      reviews: 86,
      price: '150 000 so\'m',
      isLiked: false
    },
    {
      id: 3,
      name: 'Erkaklar sartaroshi',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '1.5 km',
      location: 'Toshkent shahri',
      rating: 4.5,
      reviews: 86,
      price: '150 000 so\'m',
      isLiked: false
    },
    {
      id: 4,
      name: 'Erkaklar sartaroshi',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '1.5 km',
      location: 'Toshkent shahri',
      rating: 4.5,
      reviews: 86,
      price: '150 000 so\'m',
      isLiked: true
    }
  ];

  const toggleLike = (businessId: number) => {
    setLikedBusinesses(prev => 
      prev.includes(businessId) 
        ? prev.filter(id => id !== businessId)
        : [...prev, businessId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <header className="bg-white px-4 py-3 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button 
                onClick={onBack}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>
              <h1 className="text-lg font-semibold text-gray-900">{categoryName}</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Bell className="w-5 h-5 text-blue-600" />
                </button>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
              
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <div className="flex items-center space-x-1">
                  <User className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-bold text-lg">♂</span>
                </div>
              </button>
              
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Business List */}
        <div className="p-4 space-y-4">
          {businesses.map((business) => (
            <div key={business.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="flex p-4">
                <img
                  src={business.image}
                  alt={business.name}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                
                <div className="flex-1 ml-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-blue-600 text-lg">{business.name}</h3>
                    </div>
                    <button 
                      onClick={() => toggleLike(business.id)}
                      className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <Heart 
                        className={`w-6 h-6 ${
                          likedBusinesses.includes(business.id)
                            ? 'text-red-500 fill-current'
                            : 'text-gray-400'
                        }`} 
                      />
                    </button>
                  </div>

                  <div className="flex items-center space-x-1 text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{business.distance}</span>
                    <span>{business.location}</span>
                  </div>

                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{business.rating}</span>
                    <span className="text-sm text-gray-600">• {business.reviews} reviews</span>
                  </div>

                  <p className="text-blue-600 font-semibold">Narx:{business.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
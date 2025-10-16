import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Search, ChevronDown, MapPin, Grid3X3, Bookmark, Heart } from 'lucide-react';

const BusinessProfile: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  const stats = [
    { label: 'Posts', value: '1,234' },
    { label: 'Followers', value: '5,678' },
    { label: 'Following', value: '9,101' }
  ];

  const highlights = [
    { id: 1, name: 'Kafe', image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { id: 2, name: 'Kafe', image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { id: 3, name: 'Kafe', image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { id: 4, name: 'Kafe', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { id: 5, name: 'Kafe', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];

  const posts = [
    'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=300',
    'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=300'
  ];

  const followers = [
    { id: 1, username: 'username', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { id: 2, username: 'username', avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { id: 3, username: 'username', avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate(-1)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex items-center space-x-2">
            <h1 className="text-lg font-semibold text-gray-900">Uchrashuv kafesi</h1>
            <ChevronDown className="w-5 h-5 text-blue-600" />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search className="w-5 h-5 text-blue-600" />
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-4">
        <div className="flex items-start space-x-4 mb-4">
          <img
            src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Uchrashuv kafesi"
            className="w-20 h-20 rounded-full object-cover"
          />
          
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Uchrashuv kafesi</h2>
            
            <div className="flex justify-between text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-lg font-semibold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Followers Preview */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex -space-x-2">
            {followers.map((follower) => (
              <img
                key={follower.id}
                src={follower.avatar}
                alt={follower.username}
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Obuna bo'lganlar <span className="font-medium">username, username</span> va <span className="font-medium">100 boshqalar</span>
          </p>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <p className="text-gray-900 mb-1">Tadbirlar joyi</p>
          <p className="text-gray-900 mb-1">❤️ Uchrashuvlar va suhbatlar uchun kafe</p>
          <p className="text-gray-900 mb-1">☕ Toza ichimliklar, yengil taomlar</p>
          <div className="flex items-center text-gray-900 mb-1">
            <MapPin className="w-4 h-4 mr-1" />
            <span>Toshkent, Amir Temur ko'chasi 15-uy</span>
          </div>
          <p className="text-blue-600 font-medium">Link qo'yiladi</p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3 mb-6">
          <button 
            onClick={toggleFollow}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              isFollowing
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isFollowing ? 'Obuna bo\'lindi' : 'Obuna bo\'lish'}
          </button>
          <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            Band qilish
          </button>
        </div>

        {/* Highlights */}
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide mb-6">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="flex-shrink-0 text-center">
              <div className="w-16 h-16 rounded-full border-2 border-gray-300 p-0.5 mb-2">
                <img
                  src={highlight.image}
                  alt={highlight.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-700">{highlight.name}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-4">
          <button
            onClick={() => setActiveTab('posts')}
            className={`flex-1 py-3 flex items-center justify-center ${
              activeTab === 'posts'
                ? 'border-b-2 border-gray-900'
                : 'text-gray-500'
            }`}
          >
            <Grid3X3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`flex-1 py-3 flex items-center justify-center ${
              activeTab === 'saved'
                ? 'border-b-2 border-gray-900'
                : 'text-gray-500'
            }`}
          >
            <Bookmark className="w-5 h-5" />
          </button>
          <button
            onClick={() => setActiveTab('liked')}
            className={`flex-1 py-3 flex items-center justify-center ${
              activeTab === 'liked'
                ? 'border-b-2 border-gray-900'
                : 'text-gray-500'
            }`}
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Posts Grid */}
        {activeTab === 'posts' && (
          <div className="grid grid-cols-3 gap-1">
            {posts.map((post, index) => (
              <div key={index} className="aspect-square">
                <img
                  src={post}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'saved' && (
          <div className="text-center py-12">
            <Bookmark className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Saqlangan postlar yo'q</p>
          </div>
        )}

        {activeTab === 'liked' && (
          <div className="text-center py-12">
            <Heart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Yoqtirilgan postlar yo'q</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessProfile;
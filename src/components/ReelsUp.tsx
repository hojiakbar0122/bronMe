import { useState } from 'react';
import { ArrowLeft, Bell, Search, Heart, Send, Bookmark, MoreHorizontal } from 'lucide-react';

const ReelsUp = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const posts = [
    {
      id: 1,
      username: 'Uchrashuv kafesi',
      userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 100,
      caption: "Uchrashuv kafesi — do'stlar, hamkaslar ya yaqin insonlar bilan iliq suhbat qurish uchun eng yaxshi joy. Sizni mazali ichimliklar, shirinliklar va qulaylik kutmoqda...",
      hasMore: true,
      isFollowing: false
    },
    {
      id: 2,
      username: 'Uchrashuv kafesi',
      userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400',
      likes: 85,
      caption: "Yangi menyumizni sinab ko'ring! Har bir taom sevgi bilan tayyorlanadi.",
      hasMore: false,
      isFollowing: true
    }
  ];

  const toggleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const toggleFollow = (postId: number) => {
    // Handle follow/unfollow logic here
    console.log('Toggle follow for post:', postId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <div className="flex items-center space-x-4">
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
          </button>
          <h1 className="text-xl font-semibold text-gray-900">Reels up</h1>
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

      {/* Tabs */}
      <div className="flex border-b border-gray-100">
        <button
          onClick={() => setActiveTab('posts')}
          className={`flex-1 py-3 text-center font-medium transition-colors relative ${
            activeTab === 'posts'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Postlar
          {activeTab === 'posts' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('videos')}
          className={`flex-1 py-3 text-center font-medium transition-colors relative ${
            activeTab === 'videos'
              ? 'text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          Videolar
          {activeTab === 'videos' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
          )}
        </button>
      </div>

      {/* Content */}
      <div className="pb-20">
        {activeTab === 'posts' && (
          <div className="space-y-0">
            {posts.map((post) => (
              <div key={post.id} className="bg-white">
                {/* Post Header */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={post.userAvatar}
                      alt={post.username}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-medium text-gray-900">{post.username}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => toggleFollow(post.id)}
                      className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        post.isFollowing
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      {post.isFollowing ? 'Obuna bo\'lindi' : 'Obuna bo\'lish'}
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                      <MoreHorizontal className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Post Image */}
                <div className="relative">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full aspect-square object-cover"
                  />
                  
                  {/* User avatar overlay */}
                  <div className="absolute bottom-3 left-3">
                    <img
                      src={post.userAvatar}
                      alt={post.username}
                      className="w-8 h-8 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center space-x-1 group"
                    >
                      <Heart
                        className={`w-6 h-6 transition-all group-hover:scale-110 ${
                          likedPosts.includes(post.id)
                            ? 'text-red-500 fill-current'
                            : 'text-gray-700'
                        }`}
                      />
                    </button>
                    <button className="group">
                      <Send className="w-6 h-6 text-gray-700 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                  
                  <button className="group">
                    <Bookmark className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Post Info */}
                <div className="px-4 pb-4">
                  <p className="font-medium text-gray-900 mb-2">
                    {post.likes + (likedPosts.includes(post.id) ? 1 : 0)} Likes
                  </p>
                  
                  <div className="text-gray-800">
                    <span className="font-medium">{post.username}</span>
                    <span className="ml-2">{post.caption}</span>
                    {post.hasMore && (
                      <button className="text-gray-500 ml-1">more</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Videolar topilmadi</h3>
              <p className="text-gray-600">Hozircha video kontentlar mavjud emas</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReelsUp;
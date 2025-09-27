import { useState } from 'react';
import { Star, Heart, Bookmark } from 'lucide-react';

const FeaturedBusinesses = () => {
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const businesses = [
    {
      id: 1,
      title: "Har bir mehmon o'zini erkin va xotirjam his qiladigan zamonaviy...",
      rating: 9.6,
      category: "Kafe nomi",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      title: "Har bir mehmon o'zini erkin va xotirjam his qiladigan zamonaviy...",
      rating: 9.6,
      category: "Kafe nomi",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      title: "Har bir mehmon o'zini erkin va xotirjam his qiladigan zamonaviy...",
      rating: 9.6,
      category: "Kafe nomi",
      image: "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      title: "Har bir mehmon o'zini erkin va xotirjam his qiladigan zamonaviy...",
      rating: 9.6,
      category: "Kafe nomi",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    }
  ];

  const toggleLike = (itemId: number) => {
    setLikedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="mb-6">
      <div className="space-y-4">
        {businesses.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <button 
                onClick={() => toggleLike(item.id)}
                className="absolute top-3 right-3 w-8 h-8 bg-black bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-opacity-30 transition-all"
              >
                {likedItems.includes(item.id) ? (
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                ) : (
                  <Bookmark className="w-4 h-4 text-white" />
                )}
              </button>
            </div>
            
            <div className="p-4">
              <p className="text-gray-800 text-sm mb-3 leading-relaxed">
                {item.title}
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-green-500 fill-current mr-1" />
                  <span className="text-sm font-medium text-gray-900">{item.rating}</span>
                </div>
                <span className="text-sm text-gray-500">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBusinesses;
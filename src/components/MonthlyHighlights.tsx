import { useState } from 'react';
import { Star, Heart, Bookmark, ChevronRight } from 'lucide-react';

const MonthlyHighlights = () => {
  const [likedItems, setLikedItems] = useState<number[]>([1]);

  const highlights = [
    {
      id: 1,
      title: "Har bir mehmon o'zini erkin va xotirjam his qiladigan zamonaviy muhit.",
      rating: 9.6,
      category: "Kafe nomi",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400",
      liked: true
    },
    {
      id: 2,
      title: "Har bir mehmon o'zini erkin va xotirjam his qiladigan zamonaviy muhit.",
      rating: 9.6,
      category: "Kafe nomi",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400",
      liked: false
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
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Oyning yaxshilari</h2>
        <div className="flex items-center text-blue-600">
          <span className="text-sm font-medium">Hammasi</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {highlights.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="relative">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-32 object-cover"
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
            
            <div className="p-3">
              <p className="text-gray-800 text-xs mb-3 leading-relaxed line-clamp-2">
                {item.title}
              </p>
              
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  <Star className="w-3 h-3 text-green-500 fill-current mr-1" />
                  <span className="text-xs font-medium text-gray-900">{item.rating}</span>
                </div>
                <span className="text-xs text-gray-500">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyHighlights;
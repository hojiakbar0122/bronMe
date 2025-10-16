import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Story {
  id: number;
  username: string;
  userAvatar: string;
  isViewed: boolean;
}

const StoryCarousel: React.FC = () => {
  const navigate = useNavigate();
  const stories: Story[] = [
    {
      id: 1,
      username: 'Uchrashuv kafesi',
      userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      isViewed: false
    },
    {
      id: 2,
      username: 'Elite Sartaroshxona',
      userAvatar: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=100',
      isViewed: true
    },
    {
      id: 3,
      username: 'Milliy Taomlar',
      userAvatar: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=100',
      isViewed: false
    },
    {
      id: 4,
      username: 'Fitness Club',
      userAvatar: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=100',
      isViewed: true
    }
  ];

  return (
    <div className="py-4">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide px-1">
        {stories.map((story) => (
          <button
            key={story.id}
            onClick={() => navigate('/stories')}
            className="flex-shrink-0 text-center group"
          >
            <div className={`relative w-16 h-16 rounded-full p-0.5 ${
              story.isViewed 
                ? 'bg-gray-300' 
                : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500'
            }`}>
              <div className="w-full h-full bg-white rounded-full p-0.5">
                <img 
                  src={story.userAvatar} 
                  alt={story.username}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <p className="text-xs text-gray-700 mt-2 max-w-[64px] truncate group-hover:text-blue-600 transition-colors">
              {story.username}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoryCarousel;
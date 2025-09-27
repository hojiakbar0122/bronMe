import React, { useState, useEffect } from 'react';
import { X, Heart, Send, MoreHorizontal, User } from 'lucide-react';

interface Story {
  id: number;
  username: string;
  userAvatar: string;
  image: string;
  timestamp: string;
  isViewed: boolean;
}

interface StoriesProps {
  onClose?: () => void;
  onProfileClick?: () => void;
}

const Stories: React.FC<StoriesProps> = ({ onClose, onProfileClick }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const stories: Story[] = [
    {
      id: 1,
      username: 'Uchrashuv kafesi',
      userAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400',
      timestamp: '18 h',
      isViewed: false
    },
    {
      id: 2,
      username: 'Elite Sartaroshxona',
      userAvatar: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=100',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
      timestamp: '12 h',
      isViewed: true
    }
  ];

  const currentStory = stories[currentStoryIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          // Move to next story
          if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(prev => prev + 1);
            return 0;
          } else {
            // Close stories when finished
            onClose?.();
            return 100;
          }
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [currentStoryIndex, stories.length, onClose]);

  const handlePrevious = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
      setProgress(0);
    }
  };

  const handleNext = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
      setProgress(0);
    } else {
      onClose?.();
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="relative w-full max-w-md h-full bg-black">
        {/* Progress bars */}
        <div className="absolute top-4 left-4 right-4 z-20 flex space-x-1">
          {stories.map((_, index) => (
            <div key={index} className="flex-1 h-1 bg-white bg-opacity-30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-100 ease-linear"
                style={{ 
                  width: index < currentStoryIndex ? '100%' : 
                         index === currentStoryIndex ? `${progress}%` : '0%' 
                }}
              />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="absolute top-12 left-4 right-4 z-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src={currentStory.userAvatar}
              alt={currentStory.username}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div>
              <h3 className="text-white font-medium">{currentStory.username}</h3>
              <p className="text-white text-sm opacity-75">{currentStory.timestamp}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="text-white">
              <MoreHorizontal className="w-6 h-6" />
            </button>
            <button onClick={onClose} className="text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Story Image */}
        <div className="relative w-full h-full">
          <img
            src={currentStory.image}
            alt="Story content"
            className="w-full h-full object-cover"
          />
          
          {/* Navigation areas */}
          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-0 w-1/3 h-full z-10"
          />
          <button 
            onClick={handleNext}
            className="absolute right-0 top-0 w-1/3 h-full z-10"
          />
        </div>

        {/* Bottom Actions */}
        <div className="absolute bottom-8 left-4 right-4 z-20">
          <div className="flex items-center justify-between">
            <button 
              onClick={onProfileClick}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Profilni ko'rish</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleLike}
                className="p-2"
              >
                <Heart 
                  className={`w-8 h-8 ${
                    isLiked ? 'text-red-500 fill-current' : 'text-white'
                  }`} 
                />
              </button>
              <button className="p-2">
                <Send className="w-8 h-8 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
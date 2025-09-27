import React, { useState, useRef, useEffect } from 'react';
import { Scissors, Stethoscope, Coffee, Utensils, PartyPopper, Mic, Gamepad2, Heart, Bell, User } from 'lucide-react';

interface CategoriesProps {
  onCategorySelect: (categoryName: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategorySelect }) => {
  const [selectedGender, setSelectedGender] = useState('Erkak');
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const genderOptions = [
    { value: 'Erkak', label: 'Erkak', symbol: '♂' },
    { value: 'Ayol', label: 'Ayol', symbol: '♀' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowGenderDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const categories = [
    { id: 1, name: 'Go\'zallik', icon: Scissors, color: 'bg-blue-100', iconColor: 'text-blue-600' },
    { id: 2, name: 'Tibbiyot', icon: Stethoscope, color: 'bg-orange-100', iconColor: 'text-orange-600' },
    { id: 3, name: 'Kafe', icon: Coffee, color: 'bg-amber-100', iconColor: 'text-amber-700' },
    { id: 4, name: 'Restoran', icon: Utensils, color: 'bg-gray-100', iconColor: 'text-gray-600' },
    { id: 5, name: 'To\'yxona', icon: PartyPopper, color: 'bg-green-100', iconColor: 'text-green-600' },
    { id: 6, name: 'Karaoke', icon: Mic, color: 'bg-blue-100', iconColor: 'text-blue-600' },
    { id: 7, name: 'O\'yin maskani', icon: Gamepad2, color: 'bg-gray-100', iconColor: 'text-gray-700' },
    { id: 8, name: 'MarryMe&Studio', icon: Heart, color: 'bg-pink-100', iconColor: 'text-pink-600' },
  ];

  return (
    <div className="py-6">
      {/* Header with notification and gender icons */}
      <div className="flex items-center justify-between mb-8 px-1">
        <h1 className="text-2xl font-bold text-gray-900">Kategoriyalar</h1>
        
        <div className="flex items-center space-x-4">
          {/* Notification Bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Bell className="w-6 h-6 text-blue-600" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">1</span>
            </div>
          </button>
          
          {/* Gender Selection */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setShowGenderDropdown(!showGenderDropdown)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <div className="flex items-center space-x-1">
                <User className="w-6 h-6 text-blue-600" />
                <span className="text-blue-600 font-bold text-lg">
                  {selectedGender === 'Erkak' ? '♂' : '♀'}
                </span>
              </div>
            </button>

            {/* Gender Dropdown */}
            {showGenderDropdown && (
              <div className="absolute right-0 top-full mt-2 w-32 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                {genderOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSelectedGender(option.value);
                      setShowGenderDropdown(false);
                    }}
                    className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between ${
                      selectedGender === option.value ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{option.label}</span>
                    {selectedGender === option.value && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
            </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 gap-6 px-1">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => onCategorySelect(category.name)}
            >
              <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-8 h-8 ${category.iconColor}`} />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">{category.name}</h3>
            </div>
          );
        })}
      </div>

      {/* Additional spacing for bottom navigation */}
      <div className="h-8"></div>
    </div>
  );
};

export default Categories;
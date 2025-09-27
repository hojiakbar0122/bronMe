import React, { useState } from 'react';
import { ArrowLeft, RotateCcw, ChevronDown } from 'lucide-react';

interface FilterProps {
  onBack: () => void;
}

const Filter: React.FC<FilterProps> = ({ onBack }) => {
  const [selectedRegion, setSelectedRegion] = useState('Toshkent');
  const [selectedDistrict, setSelectedDistrict] = useState('Sergeli');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Kafe']);
  const [selectedExpertise, setSelectedExpertise] = useState('Hammasi');

  const regions = ['Toshkent', 'Samarqand', 'Buxoro', 'Andijon'];
  const districts = ['Sergeli', 'Chilonzor', 'Yunusobod', 'Mirzo Ulugbek'];
  const categories = ['Kafe', 'Restoran', 'Go\'zallik', 'Tibbiyot', 'To\'yxona', 'Karaoke'];
  const expertiseOptions = ['Erkaklarni qabul qiluvchi', 'Ayollarni qabul qiluvchi', 'Hammasi'];

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <header className="bg-white px-4 py-3 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Filtr</h1>
            <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <RotateCcw className="w-5 h-5 text-blue-600" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Region Selection */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Viloyatni tanlang</h3>
            <div className="relative">
              <select 
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* District Selection */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Tumanni tanlang</h3>
            <div className="relative">
              <select 
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-xl bg-white text-gray-900 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {districts.map(district => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Kategoriyalar</h3>
            <div className="grid grid-cols-2 gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`flex items-center justify-center space-x-2 p-3 rounded-xl border-2 transition-all duration-200 ${
                    selectedCategories.includes(category)
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="text-lg">☕</span>
                  <span className="font-medium">{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-base font-medium text-gray-900 mb-3">Mutaxassislik bo'yicha</h3>
            <div className="space-y-3">
              {expertiseOptions.map(option => (
                <label key={option} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="expertise"
                    value={option}
                    checked={selectedExpertise === option}
                    onChange={(e) => setSelectedExpertise(e.target.value)}
                    className="w-5 h-5 text-blue-600 border-2 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4">
          <div className="max-w-md mx-auto">
            <button 
              onClick={onBack}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Qidirish</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
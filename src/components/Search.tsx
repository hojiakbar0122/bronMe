import React, { useState} from 'react';
import { ArrowLeft, Search as SearchIcon, X, Clock, TrendingUp, MapPin, Star, Filter } from 'lucide-react';

interface SearchProps {
  onBack: () => void;
}

const Search: React.FC<SearchProps> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([
    'Toshkent shahri',
    'Toshkent shahri',
    'Toshkent shahri',
    'Toshkent shahri',
    'Toshkent shahri',
    'Toshkent shahri'
  ]);
  const [showResults, setShowResults] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const trendingSearches = [
    'Restoran',
    'Sartaroshxona',
    'Kafe',
    'Fitness klub',
    'Go\'zallik saloni',
    'Tibbiyot markazi'
  ];

  const searchResults = [
    {
      id: 1,
      name: 'Uchrashuv Kafesi',
      category: 'Kafe',
      rating: 9.6,
      address: 'Chilonzor tumani, Bunyodkor ko\'chasi',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '1.2 km',
      isOpen: true
    },
    {
      id: 2,
      name: 'Elite Sartaroshxona',
      category: 'Go\'zallik',
      rating: 9.2,
      address: 'Yunusobod tumani, Amir Temur shoh ko\'chasi',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '2.1 km',
      isOpen: true
    },
    {
      id: 3,
      name: 'Milliy Taomlar Restorani',
      category: 'Restoran',
      rating: 9.4,
      address: 'Shayxontohur tumani, Navoi ko\'chasi',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
      distance: '3.5 km',
      isOpen: false
    }
  ];

  const handleSearch = (query: string) => {
    if (query.trim()) {
      setShowResults(true);
      // Add to recent searches if not already present
      if (!recentSearches.includes(query)) {
        setRecentSearches(prev => [query, ...prev.slice(0, 5)]);
      }
    } else {
      setShowResults(false);
    }
  };

  const removeRecentSearch = (index: number) => {
    setRecentSearches(prev => prev.filter((_, i) => i !== index));
  };

  const clearAllRecent = () => {
    setRecentSearches([]);
  };

  const handleQuickSearch = (query: string) => {
    setSearchQuery(query);
    handleSearch(query);
  };

  const filters = [
    { id: 'all', label: 'Barchasi' },
    { id: 'restaurant', label: 'Restoran' },
    { id: 'cafe', label: 'Kafe' },
    { id: 'beauty', label: 'Go\'zallik' },
    { id: 'medical', label: 'Tibbiyot' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <header className="bg-white px-4 py-3 border-b border-gray-100">
          <div className="flex items-center space-x-3">
            <button 
              onClick={onBack}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <div className="flex-1 relative">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch(searchQuery)}
                  placeholder="Qidirish qiling..."
                  className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setShowResults(false);
                    }}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                )}
              </div>
            </div>
            
            <button 
              onClick={() => handleSearch(searchQuery)}
              className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Qidirish
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="p-4">
          {!showResults ? (
            <>
              {/* Recent Searches */}
              {recentSearches.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Oxirgi qidiruvlar</h3>
                    <button 
                      onClick={clearAllRecent}
                      className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
                    >
                      Tozalash
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <button 
                          onClick={() => handleQuickSearch(search)}
                          className="flex items-center space-x-3 flex-1"
                        >
                          <Clock className="w-5 h-5 text-gray-400" />
                          <span className="text-gray-700">{search}</span>
                        </button>
                        <button 
                          onClick={() => removeRecentSearch(index)}
                          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                        >
                          <X className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Trending Searches */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-semibold text-gray-900">Mashhur qidiruvlar</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {trendingSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickSearch(search)}
                      className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl text-left hover:from-blue-100 hover:to-blue-200 transition-all duration-200 border border-blue-200"
                    >
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <SearchIcon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-800">{search}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Search Results */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Natijalar "{searchQuery}" uchun
                  </h3>
                  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <Filter className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Filter Tabs */}
                <div className="flex space-x-2 overflow-x-auto scrollbar-hide mb-6">
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
                      {filter.label}
                    </button>
                  ))}
                </div>

                {/* Results List */}
                <div className="space-y-4">
                  {searchResults.map((result) => (
                    <div key={result.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
                      <div className="flex p-4">
                        <img
                          src={result.image}
                          alt={result.name}
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                        
                        <div className="flex-1 ml-4">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-gray-900">{result.name}</h4>
                              <p className="text-sm text-gray-600">{result.category}</p>
                            </div>
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                              result.isOpen 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-red-100 text-red-800'
                            }`}>
                              {result.isOpen ? 'Ochiq' : 'Yopiq'}
                            </div>
                          </div>

                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <div className="flex items-center space-x-1">
                              <Star className="w-4 h-4 text-green-500 fill-current" />
                              <span className="font-medium text-gray-900">{result.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{result.distance}</span>
                            </div>
                          </div>

                          <p className="text-sm text-gray-600 truncate">{result.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {searchResults.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SearchIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Natija topilmadi</h3>
                    <p className="text-gray-600">"{searchQuery}" uchun hech narsa topilmadi</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
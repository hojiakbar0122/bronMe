import { useEffect, useState } from 'react';
import Header from './components/Header';
// import UserCarousel from './components/UserCarousel';
import PromoCard from './components/PromoCard';
import MonthlyHighlights from './components/MonthlyHighlights';
import BottomNavigation from './components/BottomNavigation';
import Categories from './components/Categories';
import ReelsUp from './components/ReelsUp';
import Bookings from './components/Bookings';
import Profile from './components/Profile';
import Notifications from './components/Notifications';
import Filter from './components/Filter';
import Search from './components/Search';
import CategoryDetails from './components/CategoryDetails';
import Stories from './components/Stories';
import StoryCarousel from './components/StoryCarousel';
import BusinessProfile from './components/BusinessProfile';
import FeaturedBusinesses from './components/FeaturedBusinesses';
import SendOtpPage from './components/SendOtp';
import Otp from './components/Otp';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showStories, setShowStories] = useState(false);
  const [showBusinessProfile, setShowBusinessProfile] = useState(false);
  const [authPage, setAuthPage] = useState<"sendotp" | "register" | "login" | "otp" | null>(null);


   useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      // agar token yo‘q bo‘lsa yangi user → sendotp sahifa
      setAuthPage("sendotp");
    }
  }, []);

  const renderContent = () => {
    if (authPage) {
    if (authPage === "register") return <Register />;
    if (authPage === "sendotp") return <SendOtpPage />;
    if (authPage === "otp") return <Otp />;
    if (authPage === "login") return <Login onLogin={() => setAuthPage(null)} />;
  }

    if (showNotifications) {
      return <Notifications onBack={() => setShowNotifications(false)} />;
    }
    
    if (showFilter) {
      return <Filter onBack={() => setShowFilter(false)} />;
    }

    if (showSearch) {
      return <Search onBack={() => setShowSearch(false)} />;
    }

    if (selectedCategory) {
      return <CategoryDetails categoryName={selectedCategory} onBack={() => setSelectedCategory(null)} />;
    }

    if (showBusinessProfile) {
      return <BusinessProfile onBack={() => setShowBusinessProfile(false)} />;
    }
    switch (activeTab) {
      case 'categories':
        return <Categories onCategorySelect={setSelectedCategory} />;
      case 'reels':
        return <ReelsUp />;
      case 'orders':
        return <Bookings />;
      case 'profile':
        return <Profile />;
      default:
        return (
          <>
            <StoryCarousel onStoryClick={() => setShowStories(true)} />
            <PromoCard />
            <MonthlyHighlights />
            <FeaturedBusinesses />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen relative">
        {!showNotifications && !showFilter && !showSearch && !selectedCategory && !showStories && !showBusinessProfile && activeTab === 'home' && (
          <Header 
            onNotificationClick={() => setShowNotifications(true)}
            onSearchClick={() => setShowSearch(true)}
          />
        )}
        <main className="px-4">
          {renderContent()}
        </main>
        {!showNotifications && !showFilter && !showSearch && !selectedCategory && !showStories && !showBusinessProfile && (
          <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        
        {showStories && (
          <Stories onClose={() => setShowStories(false)} onProfileClick={() => {
            setShowStories(false);
            setShowBusinessProfile(true);
          }} />
        )}
      </div>
    </div>
  );
}

export default App;
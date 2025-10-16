import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import ReelsPage from './pages/ReelsPage';
import BookingsPage from './pages/BookingsPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import CategoryDetailsPage from './pages/CategoryDetailsPage';
import NotificationsPage from './pages/NotificationsPage';
import SearchPage from './pages/SearchPage';
import StoriesPage from './pages/StoriesPage';
import BusinessProfilePage from './pages/BusinessProfilePage';

function App() {
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && location.pathname !== '/auth') {
      window.location.href = '/auth';
    }
  }, [location]);

  const isAuthPage = location.pathname === '/auth';
  const isHomePage = location.pathname === '/';
  const isMainTab = ['/', '/categories', '/reels', '/orders', '/profile'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen relative">
        {isHomePage && !isAuthPage && (
          <Header />
        )}
        <main className="px-4">
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/reels" element={<ReelsPage />} />
            <Route path="/orders" element={<BookingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/category/:categoryName" element={<CategoryDetailsPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/business-profile" element={<BusinessProfilePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        {isMainTab && !isAuthPage && (
          <BottomNavigation />
        )}
      </div>
    </div>
  );
}

export default App;
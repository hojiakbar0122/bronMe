import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SendOtpPage from '../components/SendOtp';
import Otp from '../components/Otp';
import Login from '../components/Login';
import Register from '../components/Register';

function AuthPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate('/');
    }
  }, [navigate]);

  const renderAuthContent = () => {
    const authType = searchParams.get('type') || 'sendotp';

    switch (authType) {
      case "register":
        return <Register />;
      case "sendotp":
        return <SendOtpPage />;
      case "otp":
        return <Otp />;
      case "login":
        return <Login />;
      default:
        return <SendOtpPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white min-h-screen">
        {renderAuthContent()}
      </div>
    </div>
  );
}

export default AuthPage;
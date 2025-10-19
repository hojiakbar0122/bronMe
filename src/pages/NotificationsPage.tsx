import { useNavigate } from 'react-router-dom';
import Notifications from '../components/Notifications';

function NotificationsPage() {
  const navigate = useNavigate();
  return <Notifications onBack={() => navigate(-1)} />;
}

export default NotificationsPage;
import { useNavigate } from 'react-router-dom';
import Stories from '../components/Stories';

function StoriesPage() {
  const navigate = useNavigate();

  return (
    <Stories
      onClose={() => navigate(-1)}
      onProfileClick={() => navigate('/business-profile')}
    />
  );
}

export default StoriesPage;
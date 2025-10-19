import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';

function SearchPage() {
  const navigate = useNavigate();
  return <Search onBack={() => navigate(-1)} />;
}

export default SearchPage;
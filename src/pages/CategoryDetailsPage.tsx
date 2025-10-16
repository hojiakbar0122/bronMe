import { useParams } from 'react-router-dom';
import CategoryDetails from '../components/CategoryDetails';

function CategoryDetailsPage() {
  const { categoryName } = useParams<{ categoryName: string }>();

  if (!categoryName) {
    return <div>Category not found</div>;
  }

  return <CategoryDetails categoryName={categoryName} />;
}

export default CategoryDetailsPage;
import StoryCarousel from '../components/StoryCarousel';
import PromoCard from '../components/PromoCard';
import MonthlyHighlights from '../components/MonthlyHighlights';
import FeaturedBusinesses from '../components/FeaturedBusinesses';

function HomePage() {
  return (
    <>
      <StoryCarousel />
      <PromoCard />
      <MonthlyHighlights />
      <FeaturedBusinesses />
    </>
  );
}

export default HomePage;
import Hero from '../components/Hero';
import FeaturedGames from '../components/FeaturedGames';
import AboutStudio from '../components/AboutStudio';
import Characters from '../components/Characters';
import NewsSection from '../components/NewsSection';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <main>
      <Hero onNavigate={onNavigate} />
      <FeaturedGames onNavigate={onNavigate} />
      <AboutStudio />
      <Characters />
      <NewsSection />
    </main>
  );
}

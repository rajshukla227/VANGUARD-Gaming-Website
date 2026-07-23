import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Games from './pages/Games';
import GameDetail from './pages/GameDetail';
import Contact from './pages/Contact';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import SmoothScroll from './components/SmoothScroll';

function App() {
  const [activePage, setActivePage] = useState('home');

  const handleNavigate = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const renderPage = () => {
    if (activePage.startsWith('game/')) {
      const gameId = activePage.split('/')[1];
      return <GameDetail gameId={gameId} onNavigate={handleNavigate} />;
    }

    switch (activePage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'games':
        return <Games onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'about':
        // Reuse home page but scroll to about section, or just render home for now
        return <Home onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30 cursor-none">
      <Preloader />
      <CustomCursor />
      <Navbar activePage={activePage} setActivePage={handleNavigate} />
      
      <SmoothScroll>
        {/* Page Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>

        <Footer />
      </SmoothScroll>
    </div>
  );
}

export default App;

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GameCard from './GameCard';
import { FEATURED_GAMES } from '../data/games';

interface FeaturedGamesProps {
  onNavigate: (page: string) => void;
}

export default function FeaturedGames({ onNavigate }: FeaturedGamesProps) {
  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
      >
        <div>
          <div className="mb-3 font-inter text-[10px] uppercase tracking-[0.3em] text-cyan-400">
            Our Titles
          </div>
          <h2 className="font-podium text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our<br />
            <span className="hero-gradient-text">Games</span>
          </h2>
        </div>
        <button
          onClick={() => onNavigate('games')}
          className="group flex items-center gap-2 border border-white/20 px-5 py-2.5 font-inter text-xs uppercase tracking-widest text-white/70 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 self-start sm:self-auto"
        >
          View All
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_GAMES.map((game) => (
          <GameCard key={game.id} game={game} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  );
}

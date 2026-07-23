import { Monitor, Smartphone, Gamepad2, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import type { Game } from '../data/games';

interface GameCardProps {
  game: Game;
  onNavigate?: (page: string) => void;
}

const platformIcons = {
  PC: Monitor,
  Console: Gamepad2,
  Mobile: Smartphone,
};

const statusColors: Record<string, string> = {
  'Available Now': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'Coming Soon': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'In Development': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
};

export default function GameCard({ game, onNavigate }: GameCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-cyan-500/40 transition-all duration-500 hover:bg-white/8 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)] flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Status badge */}
        <div className={`absolute top-3 left-3 border px-2.5 py-1 font-inter text-[10px] uppercase tracking-widest backdrop-blur-sm ${statusColors[game.status]}`}>
          {game.status}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-1">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="font-inter text-xs text-white font-bold">{game.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Genre tag */}
        <div className="mb-2 font-inter text-[10px] uppercase tracking-widest text-cyan-400/80">
          {game.genre} {game.year ? `• ${game.year}` : ''}
        </div>

        {/* Title */}
        <h3 className="font-podium text-xl uppercase tracking-wide text-white group-hover:text-cyan-100 transition-colors duration-300 mb-2">
          {game.title}
        </h3>

        {/* Description */}
        <p className="font-inter text-sm leading-relaxed text-white/55 flex-1 mb-4">
          {game.description}
        </p>

        {/* Footer row */}
        <div className="flex items-center justify-between">
          {/* Platforms */}
          <div className="flex items-center gap-2">
            {game.platforms.map((platform) => {
              const Icon = platformIcons[platform];
              return (
                <Icon key={platform} className="h-4 w-4 text-white/40 hover:text-white/70 transition-colors" title={platform} />
              );
            })}
          </div>

          {/* CTA */}
          <button
            onClick={() => onNavigate?.('game/' + game.id)}
            className="group/btn flex items-center gap-1.5 font-inter text-[10px] uppercase tracking-widest text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            VIEW GAME
            <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Bottom glow line on hover */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import GameCard from '../components/GameCard';
import { ALL_GAMES } from '../data/games';

const GENRES = ['All', 'Action / Adventure', 'Cyberpunk Action', 'Fantasy RPG', 'RPG', 'Sci-Fi', 'Survival'];
const STATUSES = ['All', 'Available Now', 'Released', 'Early Access', 'Coming Soon', 'In Development'];

export default function Games({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');
  const [status, setStatus] = useState('All');

  const filtered = ALL_GAMES.filter((g) => {
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase()) || g.genre.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genre === 'All' || g.genre === genre;
    const matchStatus = status === 'All' || g.status === status;
    return matchSearch && matchGenre && matchStatus;
  });

  return (
    <main className="min-h-screen pt-24 pb-24 px-6 sm:px-10 lg:px-16">
      {/* Page hero */}
      <div className="mb-16 border-l-2 border-cyan-400 pl-6">
        <div className="mb-2 font-inter text-[10px] uppercase tracking-[0.3em] text-cyan-400">Portfolio</div>
        <h1 className="font-podium text-5xl uppercase text-white sm:text-6xl lg:text-7xl">
          Our <span className="hero-gradient-text">Games</span>
        </h1>
        <p className="mt-4 max-w-xl font-inter text-sm text-white/55 leading-relaxed">
          From cyberpunk megacities to mythical floating kingdoms — explore every world we've built.
        </p>
      </div>

      {/* Search and filters */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/5 border border-white/15 pl-9 pr-4 py-2.5 font-inter text-sm text-white placeholder-white/30 outline-none focus:border-cyan-500/60 transition-colors"
          />
        </div>

        {/* Genre filter */}
        <div className="flex items-center gap-2">
          <Filter className="h-3.5 w-3.5 text-white/30" />
          <div className="flex flex-wrap gap-2">
            {GENRES.map((g) => (
              <button
                key={g}
                onClick={() => setGenre(g)}
                className={`px-3 py-1.5 font-inter text-[10px] uppercase tracking-widest transition-all duration-200 border ${
                  genre === g
                    ? 'bg-cyan-400/20 border-cyan-500/40 text-cyan-400'
                    : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Status filter */}
        <div className="flex flex-wrap gap-2">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-3 py-1.5 font-inter text-[10px] uppercase tracking-widest transition-all duration-200 border ${
                status === s
                  ? 'bg-purple-400/20 border-purple-500/40 text-purple-400'
                  : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6 font-inter text-xs uppercase tracking-widest text-white/30">
        {filtered.length} {filtered.length === 1 ? 'Title' : 'Titles'} Found
      </div>

      {/* Games grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((game) => (
            <GameCard key={game.id} game={game} onNavigate={onNavigate} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="font-podium text-6xl text-white/10 uppercase">No Results</div>
          <p className="mt-4 font-inter text-sm text-white/30">Try adjusting your search or filters.</p>
          <button
            onClick={() => { setSearch(''); setGenre('All'); setStatus('All'); }}
            className="mt-6 border border-white/20 px-5 py-2.5 font-inter text-xs uppercase tracking-widest text-white/60 hover:border-white/40 hover:text-white transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </main>
  );
}

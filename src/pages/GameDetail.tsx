import { ArrowLeft, Play, Monitor, Gamepad2, Smartphone, Calendar, Star } from 'lucide-react';
import { ALL_GAMES } from '../data/games';
import character1Img from '../assets/character1.png';
import character2Img from '../assets/character2.png';

interface GameDetailProps {
  gameId: string;
  onNavigate: (page: string) => void;
}

const platformIcons = {
  PC: Monitor,
  Console: Gamepad2,
  Mobile: Smartphone,
};

export default function GameDetail({ gameId, onNavigate }: GameDetailProps) {
  const game = ALL_GAMES.find((g) => g.id === gameId);

  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 flex-col">
        <h1 className="font-podium text-4xl text-white">Game Not Found</h1>
        <button onClick={() => onNavigate('games')} className="mt-4 text-cyan-400 font-inter text-sm hover:underline">
          Return to Games
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* 1. Large Hero Banner */}
      <section className="relative h-[70vh] w-full bg-black flex items-end pb-20">
        <div className="absolute inset-0">
          <img src={game.image} alt={game.title} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col items-start gap-4">
          <button 
            onClick={() => onNavigate('games')}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors font-inter text-xs uppercase tracking-widest mb-4"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Games
          </button>
          
          <div className="flex items-center gap-3">
            <span className="font-inter text-[10px] uppercase tracking-widest text-cyan-400 border border-cyan-400/30 bg-cyan-400/10 px-3 py-1">
              {game.genre}
            </span>
            <span className="font-inter text-[10px] uppercase tracking-widest text-purple-400 border border-purple-400/30 bg-purple-400/10 px-3 py-1">
              {game.status}
            </span>
          </div>
          
          <h1 className="font-podium text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white mt-2">
            {game.title}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 flex flex-col lg:flex-row gap-16">
        
        {/* Left Column: Description, Trailer, Screenshots */}
        <div className="flex-1 space-y-20">
          
          {/* 2. Game Description */}
          <section>
            <h2 className="font-podium text-3xl text-white uppercase tracking-wide mb-6">About the Game</h2>
            <p className="font-inter text-lg text-white/70 leading-relaxed max-w-3xl">
              {game.description}
            </p>
          </section>

          {/* 3. Trailer */}
          <section>
            <h2 className="font-podium text-3xl text-white uppercase tracking-wide mb-6">Official Trailer</h2>
            <div className="relative aspect-video w-full bg-white/5 border border-white/10 group cursor-pointer overflow-hidden">
              <img src={game.image} alt="Trailer Thumbnail" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-cyan-500/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-cyan-400 transition-colors shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                  <Play className="h-8 w-8 text-black fill-current ml-1" />
                </div>
              </div>
            </div>
          </section>

          {/* 4. Screenshots */}
          <section>
            <h2 className="font-podium text-3xl text-white uppercase tracking-wide mb-6">Gallery</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-video bg-white/5 overflow-hidden border border-white/10">
                <img src={game.image} alt="Screenshot 1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="aspect-video bg-white/5 overflow-hidden border border-white/10">
                <img src={game.image} alt="Screenshot 2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 saturate-50" />
              </div>
            </div>
          </section>
          
        </div>

        {/* Right Column: Details Sidebar */}
        <aside className="w-full lg:w-96 space-y-12">
          
          {/* Release Info & Platforms */}
          <div className="bg-white/5 border border-white/10 p-8 space-y-8">
            {/* Platforms */}
            <div>
              <h3 className="font-inter text-xs uppercase tracking-widest text-white/40 mb-4">Platforms</h3>
              <div className="flex flex-wrap gap-4">
                {game.platforms.map(platform => {
                  const Icon = platformIcons[platform];
                  return (
                    <div key={platform} className="flex items-center gap-2 text-white">
                      <Icon className="h-5 w-5 text-cyan-400" />
                      <span className="font-inter text-sm font-semibold">{platform}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* Release Info */}
            <div>
              <h3 className="font-inter text-xs uppercase tracking-widest text-white/40 mb-4">Release Date</h3>
              <div className="flex items-center gap-3 text-white">
                <Calendar className="h-5 w-5 text-purple-400" />
                <span className="font-inter text-sm font-semibold">{game.year || 'TBA'}</span>
              </div>
            </div>

            <div className="h-px w-full bg-white/10" />

            {/* Rating */}
            <div>
              <h3 className="font-inter text-xs uppercase tracking-widest text-white/40 mb-4">Rating</h3>
              <div className="flex items-center gap-3 text-white">
                <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="font-inter text-sm font-bold">{game.rating > 0 ? game.rating : 'N/A'}</span>
              </div>
            </div>
            
            <button className="w-full py-4 bg-cyan-400 font-inter text-xs uppercase tracking-widest text-black font-bold hover:bg-cyan-300 transition-colors">
              Pre-Order Now
            </button>
          </div>

          {/* 5. Characters Section */}
          <section>
            <h3 className="font-podium text-2xl text-white uppercase tracking-wide mb-6">Key Characters</h3>
            <div className="space-y-4">
              <div className="group relative h-32 bg-white/5 border border-white/10 overflow-hidden flex items-center">
                <div className="absolute right-0 h-full w-32 bg-gradient-to-l from-black/80 to-transparent z-10" />
                <img src={character1Img} alt="Character 1" className="absolute right-0 h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="relative z-20 p-6">
                  <div className="font-inter text-[10px] uppercase tracking-widest text-cyan-400 mb-1">Protagonist</div>
                  <div className="font-podium text-xl text-white">Kaelen</div>
                </div>
              </div>
              <div className="group relative h-32 bg-white/5 border border-white/10 overflow-hidden flex items-center">
                <div className="absolute right-0 h-full w-32 bg-gradient-to-l from-black/80 to-transparent z-10" />
                <img src={character2Img} alt="Character 2" className="absolute right-0 h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="relative z-20 p-6">
                  <div className="font-inter text-[10px] uppercase tracking-widest text-purple-400 mb-1">Antagonist</div>
                  <div className="font-podium text-xl text-white">Vex</div>
                </div>
              </div>
            </div>
          </section>
          
        </aside>
      </div>
    </main>
  );
}

import { ArrowRight, Play, Trophy } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import characterImg from '../assets/character1.png';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '30%']);
  const imageY = useTransform(scrollY, [0, 1000], ['0%', '-15%']);

  const wordVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -45 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.15 + 0.3,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black flex items-center">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid overlay texture with Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          y: backgroundY
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Text and CTAs */}
        <div className="flex-1 w-full flex flex-col items-start pt-10 lg:pt-0">
          {/* Small Heading */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 flex items-center gap-2"
          >
            <Trophy className="h-4 w-4 text-cyan-400" />
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
              World-Class Game Studio
            </span>
          </motion.div>

          {/* Main Heading with Staggered Word Reveal */}
          <h1 className="font-podium uppercase leading-[0.95] tracking-tight text-white mb-8 [perspective:1000px]">
            <motion.span 
              custom={0} variants={wordVariants} initial="hidden" animate="visible"
              className="block text-[clamp(3.5rem,8vw,7.5rem)] text-white hover:text-cyan-400 transition-colors duration-500 origin-bottom"
            >
              Create.
            </motion.span>
            <motion.span 
              custom={1} variants={wordVariants} initial="hidden" animate="visible"
              className="block text-[clamp(3.5rem,8vw,7.5rem)] hero-gradient-text origin-bottom"
            >
              Play.
            </motion.span>
            <motion.span 
              custom={2} variants={wordVariants} initial="hidden" animate="visible"
              className="block text-[clamp(3.5rem,8vw,7.5rem)] text-white hover:text-cyan-400 transition-colors duration-500 origin-bottom"
            >
              Conquer.
            </motion.span>
          </h1>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-4 flex flex-wrap items-center gap-5 w-full sm:w-auto"
          >
            <button
              onClick={() => onNavigate('games')}
              className="group flex items-center justify-center gap-2.5 bg-cyan-400 px-8 py-4 font-inter text-xs uppercase tracking-widest text-black font-bold transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] w-full sm:w-auto"
            >
              Explore Our Games
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="group flex items-center justify-center gap-2.5 border border-white/30 bg-white/5 px-8 py-4 font-inter text-xs uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-white/10 w-full sm:w-auto">
              <Play className="h-4 w-4 fill-current" />
              Watch Trailer
            </button>
          </motion.div>
        </div>

        {/* Right Column: Game Character Image with Parallax */}
        <motion.div 
          style={{ y: imageY }}
          className="flex-1 w-full relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[500px] aspect-[4/5] group"
          >
            {/* Image backdrop glow */}
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[80px] group-hover:bg-cyan-400/30 transition-all duration-700" />
            
            {/* Character image */}
            <img
              src={characterImg}
              alt="Game Character"
              className="relative z-10 w-full h-full object-cover object-center rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500"
              style={{
                boxShadow: '0 20px 50px -20px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.1)'
              }}
            />

            {/* Decorative corner accents */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}

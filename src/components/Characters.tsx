import { motion } from 'framer-motion';
import character1Img from '../assets/character1.png';
import character2Img from '../assets/character2.png';
import character3Img from '../assets/hero.png';

const CHARACTERS = [
  {
    id: 'kael',
    name: 'KAEL',
    title: 'THE HUNTER',
    description: 'A relentless tracker from the wasteland. Armed with specialized traps and a deadly accurate sniper rifle.',
    image: character1Img,
  },
  {
    id: 'raven',
    name: 'RAVEN',
    title: 'THE ASSASSIN',
    description: 'A shadow moving through the neon city. Specializes in stealth, neural hacking, and close-quarters combat.',
    image: character2Img,
  },
  {
    id: 'zero',
    name: 'ZERO',
    title: 'THE REBEL',
    description: 'A rogue AI in a synthetic body. Uses high-tech weaponry and explosive ordnance to break the system.',
    image: character3Img,
  },
];

export default function Characters() {
  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden bg-black border-t border-white/5">
      {/* Background glow blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section header */}
      <div className="mb-14 text-center">
        <h2 className="font-podium text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
          Meet the<br />
          <span className="text-red-500">Characters</span>
        </h2>
      </div>

      {/* Character Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {CHARACTERS.map((char, index) => (
          <motion.div
            key={char.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group relative aspect-[3/4] overflow-hidden bg-white/5 border border-white/10 cursor-pointer transition-colors duration-500 hover:border-red-500/50"
          >
            {/* Image (Zooms on hover) */}
            <img
              src={char.image}
              alt={char.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-75 group-hover:brightness-100"
            />
            
            {/* Red Glow on hover */}
            <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/20 mix-blend-overlay transition-colors duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
              <span className="font-inter text-xs uppercase tracking-[0.2em] text-red-500 mb-2">
                {char.title}
              </span>
              <h3 className="font-podium text-4xl text-white uppercase tracking-wider mb-4">
                {char.name}
              </h3>
              <p className="font-inter text-sm text-white/80 leading-relaxed">
                {char.description}
              </p>
              
              <div className="mt-6 w-8 h-1 bg-red-500" />
            </div>
            
            {/* Default State Content (Hidden on hover) */}
            <div className="absolute bottom-8 left-8 right-8 transition-opacity duration-500 group-hover:opacity-0 flex items-center justify-between">
               <h3 className="font-podium text-3xl text-white uppercase tracking-wider">
                {char.name}
              </h3>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}

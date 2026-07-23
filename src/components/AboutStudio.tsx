import { Trophy, Users, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const STATS = [
  { icon: Trophy, value: '10+', label: 'Years', color: 'text-amber-400' },
  { icon: Users, value: '5M+', label: 'Players', color: 'text-cyan-400' },
  { icon: Cpu, value: '25+', label: 'Developers', color: 'text-purple-400' },
];

export default function AboutStudio() {
  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-white/5">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/20 via-transparent to-purple-950/20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-4 font-inter text-[10px] uppercase tracking-[0.3em] text-cyan-400">
              About Us
            </div>
            <h2 className="mb-6 font-podium text-4xl uppercase tracking-tight text-white sm:text-5xl">
              We Don't Just Make Games.<br />
              <span className="hero-gradient-text">We Build Worlds.</span>
            </h2>
            <div className="space-y-4 font-inter text-sm leading-relaxed text-white/60">
              <p>
                Vanguard is an independent game studio focused on creating immersive experiences, unforgettable characters, and worlds that players never want to leave.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group flex items-center gap-2 bg-cyan-400 px-6 py-3 font-inter text-xs uppercase tracking-widest text-black font-bold transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                Meet the Team
              </button>
              <button className="border border-white/20 px-6 py-3 font-inter text-xs uppercase tracking-widest text-white/70 transition-all duration-300 hover:border-white/40 hover:text-white">
                Our Studio
              </button>
            </div>
          </motion.div>

          {/* Right: stats grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {STATS.map(({ icon: Icon, value, label, color }) => (
              <div
                key={label}
                className="group relative overflow-hidden border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/8"
              >
                <Icon className={`mb-4 h-6 w-6 ${color} transition-transform duration-300 group-hover:scale-110`} />
                <div className={`font-podium text-4xl font-bold ${color} mb-1 sm:text-5xl`}>
                  {value}
                </div>
                <div className="font-inter text-xs uppercase tracking-widest text-white/50">
                  {label}
                </div>
                {/* Corner accent */}
                <div className={`absolute bottom-0 right-0 h-12 w-12 opacity-10 ${color}`}
                  style={{ background: 'radial-gradient(circle at bottom right, currentColor, transparent)' }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

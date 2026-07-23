import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const NEWS = [
  {
    id: 1,
    category: 'Announcement',
    tag: 'Studio',
    title: 'NEW GAME ANNOUNCEMENT',
    excerpt: 'Vanguard reveals its next-generation RPG.',
    date: 'Oct 12, 2026',
    readTime: '3 min read',
    accent: 'purple',
  },
  {
    id: 2,
    category: 'Dev Diary',
    tag: 'Shadow Protocol',
    title: 'BEHIND THE SCENES',
    excerpt: 'How we created the world of Shadow Protocol.',
    date: 'Oct 05, 2026',
    readTime: '5 min read',
    accent: 'amber',
  },
  {
    id: 3,
    category: 'Game Update',
    tag: 'Crimson Realm',
    title: 'UPDATE 2.0',
    excerpt: 'A new chapter is coming.',
    date: 'Sep 28, 2026',
    readTime: '2 min read',
    accent: 'cyan',
  },
];

const accentMap: Record<string, { text: string; border: string; bg: string }> = {
  cyan:   { text: 'text-cyan-400',   border: 'border-cyan-500/30',   bg: 'bg-cyan-500/10'   },
  amber:  { text: 'text-amber-400',  border: 'border-amber-500/30',  bg: 'bg-amber-500/10'  },
  purple: { text: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' },
};

export default function NewsSection() {
  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-16 border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
      >
        <div>
          <div className="mb-3 font-inter text-[10px] uppercase tracking-[0.3em] text-cyan-400">
            Studio News
          </div>
          <h2 className="font-podium text-4xl uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
            Latest from<br />
            <span className="hero-gradient-text">Vanguard</span>
          </h2>
        </div>
        <button className="group flex items-center gap-2 border border-white/20 px-5 py-2.5 font-inter text-xs uppercase tracking-widest text-white/70 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 self-start sm:self-auto">
          All News
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </motion.div>

      {/* News cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {NEWS.map((item, index) => {
          const accent = accentMap[item.accent];
          return (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              key={item.id}
              className="group flex flex-col border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/8 cursor-pointer"
            >
              {/* Top row */}
              <div className="mb-4 flex items-center justify-between">
                <span className={`border px-2.5 py-1 font-inter text-[10px] uppercase tracking-widest ${accent.border} ${accent.bg} ${accent.text}`}>
                  {item.category}
                </span>
                <div className="flex items-center gap-1.5 text-white/30">
                  <Tag className="h-3 w-3" />
                  <span className="font-inter text-[10px] uppercase tracking-widest">{item.tag}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className={`mb-3 font-podium text-xl uppercase tracking-wide text-white group-hover:${accent.text} transition-colors duration-300 flex-1`}>
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="mb-6 font-inter text-sm leading-relaxed text-white/50">
                {item.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-white/30">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="font-inter text-xs">{item.date}</span>
                  <span className="text-white/20">·</span>
                  <span className="font-inter text-xs">{item.readTime}</span>
                </div>
                <ArrowRight className={`h-4 w-4 ${accent.text} opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0`} />
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

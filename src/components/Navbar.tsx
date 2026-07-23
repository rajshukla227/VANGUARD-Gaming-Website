import { useState } from 'react';
import { X, Gamepad2, Zap } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const NAV_LINKS = [
  { label: 'Home', page: 'home' },
  { label: 'Games', page: 'games' },
  { label: 'Studio', page: 'about' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navigate = (page: string) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav 
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 sm:px-10 lg:px-16 navbar-glass"
      >
        {/* Logo */}
        <button
          onClick={() => navigate('home')}
          className="flex items-center gap-2 group"
        >
          <div className="relative">
            <Gamepad2 className="h-7 w-7 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
            <div className="absolute inset-0 bg-cyan-400/20 blur-md rounded-full group-hover:bg-cyan-300/30 transition-all duration-300" />
          </div>
          <span className="font-podium text-xl font-bold uppercase tracking-widest text-white group-hover:text-cyan-100 transition-colors duration-300">
            VANGUARD
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <button
              key={link.page}
              onClick={() => navigate(link.page)}
              className={`relative font-inter text-xs uppercase tracking-widest transition-all duration-300 group ${
                activePage === link.page
                  ? 'text-cyan-400'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-cyan-400 transition-all duration-300 ${
                  activePage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={() => navigate('games')}
          className="hidden md:flex items-center gap-2 relative overflow-hidden px-5 py-2.5 font-inter text-xs uppercase tracking-widest text-black font-bold transition-all duration-300 group"
        >
          <span className="absolute inset-0 bg-cyan-400 group-hover:bg-cyan-300 transition-colors duration-300" />
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-300 to-blue-400" />
          <Zap className="relative h-3.5 w-3.5" />
          <span className="relative">Play Now</span>
        </button>

        {/* Hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="flex flex-col items-end space-y-1.5 md:hidden"
        >
          <div className="h-0.5 w-6 bg-white transition-all" />
          <div className="h-0.5 w-6 bg-white transition-all" />
          <div className="h-0.5 w-4 bg-cyan-400 transition-all" />
        </button>
      </motion.nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col transition-all duration-500 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        style={{ background: 'rgba(4, 6, 14, 0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="flex items-center justify-between px-6 py-4 sm:px-10 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-6 w-6 text-cyan-400" />
            <span className="font-podium text-xl font-bold uppercase tracking-widest text-white">VANGUARD</span>
          </div>
          <button aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <X className="h-7 w-7 text-white hover:text-cyan-400 transition-colors" />
          </button>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-6">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.page}
              onClick={() => navigate(link.page)}
              className={`font-podium text-4xl uppercase transition-all duration-500 sm:text-5xl ${
                activePage === link.page ? 'text-cyan-400' : 'text-white hover:text-cyan-300'
              }`}
              style={{
                transitionDelay: `${i * 80 + 100}ms`,
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => navigate('contact')}
            className="mt-6 flex items-center gap-2 bg-cyan-400 px-8 py-3 font-inter text-xs uppercase tracking-widest text-black font-bold transition-all duration-300 hover:bg-cyan-300"
            style={{
              transitionDelay: `${NAV_LINKS.length * 80 + 100}ms`,
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <Zap className="h-3.5 w-3.5" />
            Play Now
          </button>
        </div>
      </div>
    </>
  );
}

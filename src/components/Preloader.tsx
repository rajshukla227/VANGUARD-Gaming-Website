import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-black"
        >
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
              className="font-podium text-5xl sm:text-7xl uppercase tracking-widest text-white mb-8"
            >
              Vanguard
            </motion.h1>
          </div>
          
          <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeInOut' }}
              className="w-full h-full bg-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

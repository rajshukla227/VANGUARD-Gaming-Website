import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  const { scrollY } = useScroll();
  
  // Apply a spring physics smoothing to the scroll value
  const smoothY = useSpring(scrollY, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Inverse the scroll value to move the content UP as user scrolls DOWN
  const y = useTransform(smoothY, (value) => -value);

  useEffect(() => {
    // Update the height of the ghost element to match the actual content height
    const updateHeight = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight);
      }
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    
    // Also observe DOM changes that might affect height (like images loading or accordions expanding)
    const resizeObserver = new ResizeObserver(() => updateHeight());
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener('resize', updateHeight);
      resizeObserver.disconnect();
    };
  }, [children]);

  return (
    <>
      {/* Ghost element that forces the browser to have a native scrollbar of the correct height */}
      <div style={{ height: contentHeight }} />

      {/* The actual content wrapper that translates smoothly based on the scroll position */}
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
}

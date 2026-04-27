import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroImageReveal() {
  const containerRef = useRef(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"] // Animation starts when section enters, ends when centered
  });

  // 1. Reveal effect: Scale the height from 0 to 1
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  // 2. Parallax effect: Move the image slightly as we scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  return (
    <section ref={containerRef} className="h-[120vh] w-full bg-black flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ 
          scaleY, 
          originY: 0.5, // Unfolds from the center vertically
        }}
        className="w-[90%] md:w-[70%] h-[80vh] border border-greyDark overflow-hidden relative"
      >
        <motion.img 
          style={{ y: imageY, scale: 1.1 }}
          src="/me.png" 
          className="w-full h-full object-cover grayscale" 
          alt="Dhanush Reveal" 
        />
        
        {/* Optional: Add a subtle overlay like Raina's */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </motion.div>
    </section>
  );
}

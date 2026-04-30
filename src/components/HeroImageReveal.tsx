import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroImageReveal() {
  const containerRef = useRef(null);
  
  // 1. Monitor scroll progress over a longer distance (the 300vh height)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 2. Map scroll progress to visual changes
  // Expand from 40% width/height to 100%
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(20% 30% 20% 30% round 20px)", "inset(0% 0% 0% 0% round 0px)"]
  );
  
  // Subtle zoom-in effect on the image
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  
  // Fade out the dark overlay as it expands
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const blur = useTransform(scrollYProgress, [0, 0.8, 1], ["blur(10px)", "blur(5px)", "blur(0px)"]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-black">
      {/* Sticky container stays in viewport during the 300vh scroll */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        <motion.div 
          style={{ clipPath }}
          className="relative w-full h-full overflow-hidden"
        >
          {/* Background Image */}
          <motion.img 
            style={{ 
              scale: imageScale, 
              filter: blur 
            }}
            src="/me.png" // Replace with your image path
            className="w-full h-full object-cover grayscale brightness-75" 
            alt="Dhanush Reveal" 
          />

          {/* Dark overlay that fades away */}
          <motion.div 
            style={{ opacity }}
            className="absolute inset-0 bg-black pointer-events-none"
          />

          {/* Optional: Floating text that appears as you scroll */}
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.7, 1], [0, 1]) }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h2 className="font-anton text-6xl md:text-8xl text-white uppercase tracking-tighter">
              The Vision
            </h2>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

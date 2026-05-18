import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const images = ["/me_1.png", "/me.png"];

type RevealImageProps = {
  src: string;
  index: number;
  scrollYProgress: MotionValue<number>;
};

function RevealImage({ src, index, scrollYProgress }: RevealImageProps) {
  // First image: 0.2 to 0.6
  // Second image: 0.6 to 1.0
  const start = index === 0 ? 0.2 : 0.6;
  const end = index === 0 ? 0.6 : 1.0;

  // Simple slide up from 100px below
  const y = useTransform(
    scrollYProgress,
    [start, start + 0.1],
    [100, 0]
  );

  // Fade in at start, hold, fade out at end
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.05, end - 0.05, end],
    [0, 1, 1, 0]
  );

  // Slight zoom in
  const scale = useTransform(
    scrollYProgress, 
    [start, end], 
    [0.9, 1]
  );

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-40 h-[70vh] w-[90vw] max-w-[600px] -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-xl"
      style={{
        opacity,
        y,
        scale,
      }}
    >
      <img
        src={src}
        alt={`Reveal ${index + 1}`}
        className="h-full w-full object-cover rounded-xl shadow-2xl"
      />
    </motion.div>
  );
}

export default function HeroImageReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative w-full h-[300vh]">
      <section className="sticky top-0 h-screen w-full bg-black overflow-hidden flex flex-col items-center">
        {/* HERO TEXT */}
        <motion.div
          style={{ opacity: textOpacity, scale: textScale }}
          className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 px-6 pt-20 pointer-events-none"
        >
          <motion.div
            initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full text-center relative z-10"
          >
            <h1 className="font-anton text-[13vw] text-white uppercase tracking-[-0.05em] transform scale-y-110 origin-center leading-[0.8]">
              DHANUSH GOPAVARAM
            </h1>
          </motion.div>
        </motion.div>

        {/* IMAGE REVEALS */}
        {images.map((src, index) => (
          <RevealImage
            key={src}
            src={src}
            index={index}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* BOTTOM MARQUEE */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="absolute bottom-0 w-full flex flex-col items-center z-20 pointer-events-none"
        >
          <div className="w-full overflow-hidden bg-[#5A4BEB] py-4 select-none">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex whitespace-nowrap items-center w-max gap-8"
            >
              {[...Array(20)].map((_, i) => (
                <div key={i} className="flex items-center gap-8">
                  <span className="text-white font-poppins font-bold text-2xl md:text-3xl uppercase">
                    Designer At Work
                  </span>

                  <span className="text-white font-poppins font-bold text-xl opacity-40">
                    &lt;/&gt;
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="py-6 px-6 text-center">
            <p className="text-white/40 font-sora text-[10px] md:text-[11px] font-semibold tracking-[0.4em] uppercase">
              AI-Focused Software Engineer | Breaking Limits through Code |
              Caffeine to Code
            </p>
          </div>
        </motion.div>

        {/* SCROLL PROGRESS BAR */}
        <div className="absolute right-4 lg:right-12 top-1/2 h-32 w-0.5 -translate-y-1/2 bg-[rgb(40,40,40)] z-50">
          <motion.div
            className="absolute left-0 top-0 z-10 w-full bg-white origin-top"
            style={{ scaleY: scrollYProgress }}
          />
        </div>
      </section>
    </div>
  );
}
import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface RevealWordProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
  scratch?: boolean;
}

const aboutWords = [
  { text: "I", type: "normal" },
  { text: "don’t", type: "normal" },
  { text: "build", type: "orange" },
  { text: "pages.", type: "normal" },

  { text: "I", type: "normal" },
  { text: "build", type: "normal" },
  { text: "first", type: "normal" },
  { text: "impressions.", type: "big" },

  { text: "The", type: "muted" },
  { text: "kind", type: "muted" },
  { text: "that", type: "muted" },
  { text: "make", type: "muted" },
  { text: "someone", type: "muted" },
  { text: "pause,", type: "muted" },

  { text: "feel", type: "scratch" },
  { text: "something,", type: "normal" },
  { text: "and", type: "muted" },
  { text: "then", type: "muted" },
  { text: "click", type: "orange" },
  { text: "deeper.", type: "normal" },

  { text: "My", type: "muted" },
  { text: "work", type: "normal" },
  { text: "lives", type: "muted" },
  { text: "between", type: "muted" },

  { text: "logic", type: "outline" },
  { text: "and", type: "muted" },
  { text: "taste,", type: "orange" },

  { text: "between", type: "muted" },
  { text: "clean", type: "normal" },
  { text: "code", type: "normal" },
  { text: "and", type: "muted" },
  { text: "tiny", type: "muted" },
  { text: "details", type: "scratch" },
  { text: "most", type: "muted" },
  { text: "people", type: "muted" },
  { text: "scroll", type: "muted" },
  { text: "past.", type: "muted" },

  { text: "I", type: "normal" },
  { text: "like", type: "normal" },
  { text: "making", type: "normal" },
  { text: "ordinary", type: "muted" },
  { text: "screens", type: "normal" },
  { text: "feel", type: "normal" },
  { text: "alive.", type: "bigOrange" },
];

export default function AboutRevealStatement() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.25, 1], [1, 0.97, 0.97]);
  const imageY = useTransform(scrollYProgress, [0, 0.25, 1], [0, -8, -8]);

  return (
    <section
      ref={containerRef}
      className="
        relative
        min-h-[330vh]
        w-full
        overflow-visible
        bg-[#050505]
        text-white
        font-['Space_Grotesk',_'Inter',_'Arial',_sans-serif]
      "
    >
      <div
        className="
          sticky
          top-0
          flex
          min-h-screen
          w-full
          items-center
          overflow-hidden
          px-5
          py-24
          md:px-10
          md:py-28
        "
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute left-[-180px] top-[25%] h-[360px] w-[360px] rounded-full bg-orange-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute right-[-180px] bottom-[15%] h-[360px] w-[360px] rounded-full bg-red-500/10 blur-[140px]" />

        {/* Subtle Grid Texture */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.06]
            [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)]
            [background-size:42px_42px]
          "
        />

        <div className="relative z-10 mx-auto w-full max-w-[1250px]">
          {/* Notebook-style Top Right Image */}
          <motion.div
            style={{
              scale: imageScale,
              y: imageY,
            }}
            className="
              relative
              mb-10
              ml-auto
              w-full
              max-w-[260px]
              rounded-[1.4rem]
              border
              border-white/10
              bg-white/5
              p-1
              shadow-2xl
              backdrop-blur-md
              md:absolute
              md:right-0
              md:top-0
              md:mb-0
              md:max-w-[320px]
            "
          >
            <img
              src="/profile-lake.png"
              alt="Profile visual"
              className="
                h-[330px]
                w-full
                rounded-[1.1rem]
                object-cover
                md:h-[430px]
              "
            />

            <div className="pointer-events-none absolute inset-1 rounded-[1.1rem] ring-1 ring-white/10" />
          </motion.div>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-3 md:pr-[380px]"
          >
            <span className="h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.9)]" />
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.38em]
                text-white/55
              "
            >
              About Me
            </span>
          </motion.div>

          {/* Main Statement */}
          <div
            className="
              text-left
              font-black
              uppercase
              leading-[1.04]
              tracking-[-0.055em]
              md:pr-[380px]
            "
          >
            {aboutWords.map((word, index) => {
              const total = aboutWords.length;

              /*
                Reveal completes earlier.
                Remaining scroll becomes a hold area.
              */
              const start = (index / total) * 0.68;
              const end = ((index + 1) / total) * 0.68 + 0.05;

              let className =
                "text-[9.3vw] md:text-[4.65vw] lg:text-[3.9vw] text-white";

              if (word.type === "muted") {
                className =
                  "text-[7.2vw] md:text-[3.45vw] lg:text-[2.9vw] text-white/62 tracking-[-0.03em]";
              }

              if (word.type === "orange") {
                className =
                  "text-[9.3vw] md:text-[4.65vw] lg:text-[3.9vw] text-orange-500 drop-shadow-[0_0_24px_rgba(249,115,22,0.18)]";
              }

              if (word.type === "big") {
                className =
                  "text-[10.7vw] md:text-[5.65vw] lg:text-[4.75vw] text-white tracking-[-0.07em]";
              }

              if (word.type === "bigOrange") {
                className =
                  "text-[11.2vw] md:text-[5.85vw] lg:text-[5vw] text-orange-500 tracking-[-0.07em] drop-shadow-[0_0_28px_rgba(249,115,22,0.22)]";
              }

              if (word.type === "outline") {
                className =
                  "text-[9.3vw] md:text-[4.65vw] lg:text-[3.9vw] text-transparent [-webkit-text-stroke:1.35px_rgba(255,255,255,0.88)]";
              }

              if (word.type === "scratch") {
                className =
                  "text-[9.3vw] md:text-[4.65vw] lg:text-[3.9vw] text-white";
              }

              return (
                <RevealWord
                  key={`${word.text}-${index}`}
                  progress={scrollYProgress}
                  range={[start, end]}
                  className={className}
                  scratch={word.type === "scratch"}
                >
                  {word.text}
                </RevealWord>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const RevealWord: React.FC<RevealWordProps> = ({
  children,
  progress,
  range,
  className = "",
  scratch = false,
}) => {
  /*
    This is the main fix.

    Before:
    opacity only had two points:
    [rangeStart, rangeEnd] -> [0.1, 1]

    Now:
    opacity has three points:
    [rangeStart, rangeEnd, 1] -> [0.12, 1, 1]

    So after the word is revealed, it stays visible until the end.
  */
  const opacity = useTransform(
    progress,
    [range[0], range[1], 1],
    [0.12, 1, 1]
  );

  const y = useTransform(
    progress,
    [range[0], range[1], 1],
    [42, 0, 0]
  );

  const blur = useTransform(
    progress,
    [range[0], range[1], 1],
    ["blur(9px)", "blur(0px)", "blur(0px)"]
  );

  const scratchScaleX = useTransform(
    progress,
    [range[0], range[1], 1],
    [1, 0, 0]
  );

  return (
    <span
      className="
        relative
        mr-[0.34em]
        mt-[0.12em]
        inline-block
        overflow-hidden
        align-baseline
      "
    >
      <motion.span
        style={{ opacity, y, filter: blur }}
        className={`relative inline-block ${className}`}
      >
        {children}

        {scratch && (
          <motion.span
            style={{ scaleX: scratchScaleX }}
            className="
              absolute
              left-0
              top-1/2
              h-[0.12em]
              w-full
              origin-right
              -translate-y-1/2
              rounded-full
              bg-orange-500
              shadow-[0_0_18px_rgba(249,115,22,0.75)]
            "
          />
        )}
      </motion.span>
    </span>
  );
};
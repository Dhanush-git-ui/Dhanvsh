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
  { text: "have", type: "muted" },
  { text: "always", type: "muted" },
  { text: "been", type: "muted" },
  { text: "more", type: "muted" },
  { text: "interested", type: "normal" },
  { text: "in", type: "muted" },
  { text: "building", type: "bigOrange" },

  { text: "than", type: "muted" },
  { text: "consuming.", type: "normal" },

  { text: "While", type: "muted" },
  { text: "most", type: "muted" },
  { text: "people", type: "muted" },
  { text: "use", type: "normal" },
  { text: "apps,", type: "normal" },

  { text: "I", type: "normal" },
  { text: "find", type: "muted" },
  { text: "myself", type: "muted" },
  { text: "driven", type: "italic" },

  { text: "by", type: "muted" },
  { text: "curiosity.", type: "outline" },

  { text: "That", type: "muted" },
  { text: "curiosity", type: "underline" },
  { text: "led", type: "muted" },
  { text: "me", type: "muted" },
  { text: "into", type: "muted" },
  { text: "software", type: "normal" },
  { text: "development,", type: "normal" },

  { text: "where", type: "muted" },
  { text: "I", type: "normal" },
  { text: "turn", type: "normal" },
  { text: "ideas", type: "normal" },
  { text: "into", type: "muted" },
  { text: "products.", type: "orange" },

  { text: "What", type: "muted" },
  { text: "excites", type: "muted" },
  { text: "me", type: "muted" },
  { text: "most", type: "muted" },

  { text: "is", type: "muted" },
  { text: "the", type: "muted" },
  { text: "challenge.", type: "outline" },

  { text: "The", type: "muted" },
  { text: "breakthrough.", type: "italic" },

  { text: "The", type: "muted" },
  { text: "moment", type: "normal" },
  { text: "everything", type: "muted" },
  { text: "clicks.", type: "underline" },

  { text: "For", type: "muted" },
  { text: "me,", type: "muted" },
  { text: "development", type: "normal" },
  { text: "is", type: "muted" },
  { text: "not", type: "muted" },
  { text: "just", type: "muted" },
  { text: "code.", type: "normal" },

  { text: "It", type: "normal" },
  { text: "is", type: "muted" },
  { text: "about", type: "muted" },
  { text: "creating", type: "normal" },
  { text: "experiences,", type: "normal" },

  { text: "solving", type: "normal" },
  { text: "problems,", type: "normal" },

  { text: "and", type: "muted" },
  { text: "never", type: "muted" },
  { text: "stopping", type: "normal" },
  { text: "learning.", type: "bigOrange" },
];

export default function AboutRevealStatement() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
        <div className="pointer-events-none absolute left-[-180px] top-[25%] h-[360px] w-[360px] rounded-full bg-white/[0.03] blur-[130px]" />
        <div className="pointer-events-none absolute right-[-180px] bottom-[15%] h-[360px] w-[360px] rounded-full bg-white/[0.03] blur-[140px]" />

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
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
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
                  "text-[9.3vw] md:text-[4.65vw] lg:text-[3.9vw] text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.22)] font-black";
              }

              if (word.type === "big") {
                className =
                  "text-[10.7vw] md:text-[5.65vw] lg:text-[4.75vw] text-white tracking-[-0.07em]";
              }

              if (word.type === "bigOrange") {
                className =
                  "text-[11.2vw] md:text-[5.85vw] lg:text-[5vw] text-white tracking-[-0.07em] drop-shadow-[0_0_28px_rgba(255,255,255,0.25)] font-black";
              }

              if (word.type === "outline") {
                className =
                  "text-[9.3vw] md:text-[4.65vw] lg:text-[3.9vw] text-transparent [-webkit-text-stroke:1.35px_rgba(255,255,255,0.88)]";
              }

              if (word.type === "scratch") {
                className =
                  "text-[9.3vw] md:text-[4.65vw] lg:text-[3.9vw] text-white";

              }

              if (word.type === "italic") {
                className =
                  "italic text-[9.3vw] md:text-[4.65vw] lg:text-[3.9vw] text-white";
              }

              if (word.type === "underline") {
                className =
                "underline underline-offset-[0.18em] decoration-white text-[9.3vw] md:text-[4.65vw] lg:text-[3.9vw] text-white";
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
              bg-white
              shadow-[0_0_18px_rgba(255,255,255,0.85)]
            "
          />
        )}
      </motion.span>
    </span>
  );
};
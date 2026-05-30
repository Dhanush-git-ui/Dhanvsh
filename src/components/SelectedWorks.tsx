import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

const MotionLink = motion(Link);

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Formula 1 Analytics",
    category: "ML",
    imageUrl: "/f1.png",
    link: "/projects?project=f1",
  },
  {
    id: "02",
    title: "College Regulations",
    category: "RAG & VECTOR DB",
    imageUrl: "/hitam.png",
    link: "/projects?project=hitam",
  },
  {
    id: "03",
    title: "LEARNIVERSE",
    category: "Fullstack - AI & ML & LLM , Dual Persona RAG , LLM ",
    imageUrl: "/learniverse.png",
    link: "/projects?project=learniverse",
  },
  {
    id: "04",
    title: "Startupsync",
    category: "Finance - Fullstack",
    imageUrl: "/startupsync.png",
    link: "/projects?project=startupsync",
  },
];

function ProjectCard({
  project,
  index,
  progress,
}: {
  project: Project;
  index: number;
  progress: MotionValue<number>;
}) {
  /**
   * Scroll timing:
   * Card 1 is visible from the start.
   * Card 2 enters between 0.12 and 0.34.
   * Card 3 enters between 0.34 and 0.56.
   * Card 4 enters between 0.56 and 0.78.
   */
  const ranges = [
    [0, 0.12],
    [0.12, 0.34],
    [0.34, 0.56],
    [0.56, 0.78],
  ];

  const [start, end] = ranges[index] || [0.75, 1];

  /**
   * Horizontal card stack
   *
   * Increase finalX if you want more of the previous card visible.
   * Decrease finalX if you want tighter overlap.
   */
  const finalX = index * 160; // Tighter horizontal overlap like a fanned deck
  const finalY = index * 0; // Perfectly aligned horizontally

  const x = useTransform(
    progress,
    [start, end],
    // Cards smoothly enter from just offscreen right
    index === 0 ? [0, 0] : [1000, finalX]
  );

  const y = useTransform(
    progress,
    [start, end],
    // Optional: a tiny upward float as they enter for elegance
    index === 0 ? [0, 0] : [50, finalY]
  );

  const scale = useTransform(
    progress,
    [start, end],
    index === 0 ? [1, 1] : [0.96, 1]
  );

  const opacity = useTransform(
    progress,
    [start, start + 0.03, end],
    index === 0 ? [1, 1, 1] : [0, 1, 1]
  );

  return (
    <MotionLink
      to={project.link}
      style={{
        x,
        y,
        scale,
        opacity,
        zIndex: index + 10,
      }}
      className="
        group absolute left-4 md:left-[10vw] top-1/2 block
        h-[62vh] w-[85vw]
        -translate-y-1/2
        overflow-hidden rounded-[8px] border border-white
        bg-black shadow-[0_30px_90px_rgba(0,0,0,0.75)]
        will-change-transform
        md:h-[470px] md:w-[660px]
      "
    >
      {/* Project title */}
      <div className="relative z-20 px-5 pt-5 md:px-7 md:pt-6">
        <h2 className="max-w-[92%] truncate text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
          {project.title}
        </h2>
      </div>

      {/* Image frame */}
      <div className="absolute bottom-5 left-5 right-5 top-[95px] overflow-hidden rounded-[6px] border border-white md:bottom-6 md:left-6 md:right-6 md:top-[115px]">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
      </div>

      {/* Category */}
      <div className="absolute bottom-7 left-7 z-20 rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70 backdrop-blur-md">
        {project.category}
      </div>

      {/* Number */}
      <div className="absolute right-6 top-6 z-20 text-sm text-white/40">
        {project.id}
      </div>
    </MotionLink>
  );
}

export default function SelectedWorks() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    mass: 0.45,
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[360vh] overflow-visible bg-black text-white"
    >
      {/* Colorful Marquee */}
      <div className="w-full overflow-hidden bg-[#D3FF52] py-4 relative z-20 shadow-[0_0_30px_rgba(211,255,82,0.15)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex whitespace-nowrap items-center w-max gap-8"
        >
          {[...Array(15)].map((_, i) => (
            <span key={i} className="text-black font-sans font-black text-2xl md:text-3xl uppercase tracking-widest">
              Selected Works ✦
            </span>
          ))}
        </motion.div>
      </div>

      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08),transparent_35%)]" />

        {/* Top label */}
        <div className="absolute left-6 top-8 z-50 md:left-12">
          <p className="text-xs uppercase tracking-[0.45em] text-white/40">
            Selected Projects
          </p>
        </div>

        {/* Big background text */}
        <div className="pointer-events-none absolute left-1/2 top-[12%] -translate-x-1/2 whitespace-nowrap text-[16vw] font-black uppercase tracking-[-0.08em] text-white/[0.035]">
          Works
        </div>

        {/* Cards Container - keeps the stack locked in place while they fan out */}
        <div className="relative h-full w-full">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              progress={smoothProgress}
            />
          ))}
        </div>

        {/* Scroll progress */}
        <div className="absolute bottom-0 left-0 z-50 h-px w-full bg-white/10">
          <motion.div
            style={{ scaleX: smoothProgress }}
            className="h-full origin-left bg-white"
          />
        </div>
      </div>
    </section>
  );
}
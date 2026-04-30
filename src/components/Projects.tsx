import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github, Starburst } from './icons';

const projects = [
  {
    title: "STARTUP SYNC",
    desc: "An AI-powered platform for idea validation and structured planning, integrating Gemini and Qwen APIs for generating business insights.",
    tech: ['React.js', 'TypeScript', 'Gemini 2.5', 'Tailwind'],
    github: "https://github.com/Dhanush-git-ui/StartUpSync2.0.git",
    live: "https://startup-sync-eight.vercel.app/"
  },
  {
    title: "HITAM AI CHATBOT",
    desc: "A RAG-based chatbot for natural language queries regarding academic regulations, utilizing LangChain and Ollama.",
    tech: ['Node.js', 'React.js', 'RAG', 'LangChain', 'Ollama'],
    github: "https://github.com/Dhanush-git-ui/Hitam-Regulations-CharBot.git",
    live: "https://hitam-regulations-char-bot-frontend.vercel.app/"
  },
  {
    title: "F1 KINETIC ANALYTICS",
    desc: "A real-time telemetry analysis and predictive strategy modeling platform for Formula 1 using the Fast-F1 API.",
    tech: ['FastAPI', 'React', 'Tailwind CSS', 'TypeScript', 'JavaScript', 'Fast-F1 API'],
    github: "https://github.com/Dhanush-git-ui/F1_GVV.git",
    live: "https://f1vd.vercel.app/"
  },
  {
    title: "LEARNIVERSE AI",
    desc: "An intelligent learning platform utilizing RAG, YouTube transcript processing, and Gemini to answer complex queries.",
    tech: ['React', 'RAG', 'YouTube API', 'Gemini API', 'VectorDB', 'OpenRouter', 'Tailwind CSS'],
    github: "https://github.com/Dhanush-git-ui/learniverse-ai.git",
    live: "https://learniverse-ai.vercel.app/"
  }
];

function ProjectCard({ project, idx }: { project: typeof projects[0], idx: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group border border-white/10 hover:border-[#6E61ED]/50 bg-[#070707] transition-colors duration-500 ${idx % 2 === 1 ? 'xl:mt-24' : ''}`}
    >
      {/* Card Header */}
      <div className="border-b border-white/10 group-hover:border-[#6E61ED]/30 p-4 flex justify-between items-center bg-[#0a0a0a] transition-colors" style={{ transform: "translateZ(20px)" }}>
        <span className="font-mono text-[#6E61ED] text-[10px] font-bold tracking-widest">[ 0{idx + 1} ]</span>
        <Starburst size={16} className="text-white/20 group-hover:text-[#6E61ED] transition-colors" />
      </div>

      {/* Card Body */}
      <div className="p-8 flex flex-col h-full" style={{ transform: "translateZ(40px)" }}>
        <h3 className="font-anton text-4xl text-white mb-4 group-hover:text-[#6E61ED] transition-colors uppercase leading-none">
          {project.title}
        </h3>
        <p className="text-white/50 mb-8 font-inter text-sm leading-relaxed">
          {project.desc}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map(tech => (
            <span key={tech} className="text-[9px] font-mono border border-white/5 bg-white/5 px-2 py-1 text-white/70 uppercase tracking-tighter">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-8 mt-auto pt-6 border-t border-white/5">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold tracking-widest font-inter hover:text-[#6E61ED] transition-colors text-white/40">
            <Github size={14} /> GITHUB
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold tracking-widest font-inter hover:text-[#6E61ED] transition-colors text-white/40">
            <ExternalLink size={14} /> LIVE VIEW
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-32 bg-black overflow-hidden">
      {/* Section Header */}
      <div className="px-6 md:px-12 mb-20 flex justify-between items-end">
        <div>
          <span className="text-[#6E61ED] font-mono text-xs font-bold tracking-[0.3em] uppercase block mb-4">Case Studies</span>
          <h2 className="font-anton text-6xl md:text-8xl text-white uppercase leading-[0.8]">Selected <br/> Works</h2>
        </div>
        <div className="hidden md:block text-right">
          <p className="text-white/30 font-inter text-sm max-w-[200px] leading-relaxed">
            A collection of projects exploring AI, Web Systems, and User Experience.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-12 perspective-[1000px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 md:gap-12">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

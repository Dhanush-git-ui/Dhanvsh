import { motion } from 'framer-motion';
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

export default function Projects() {
  return (
    <section className="py-24 border-t border-greyDark">
      {/* Marquee Header */}
      <div className="w-full bg-neon py-4 overflow-hidden flex items-center mb-16 border-y border-neon">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >
          {[...Array(2)].map((_, i) => (
            <span key={i} className="text-black font-anton text-4xl md:text-6xl uppercase px-4 flex items-center gap-4">
              SELECTED WORKS <Starburst size={32} className="text-black" />
              SELECTED WORKS <Starburst size={32} className="text-black" />
            </span>
          ))}
        </motion.div>
      </div>

      <div className="px-6 md:px-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 md:gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }} 
              className={`border border-greyDark hover:border-neon bg-[#0a0a0a] overflow-hidden group flex flex-col transition-colors ${idx % 2 === 1 ? 'xl:mt-24' : ''}`}
            >
              {/* Card Header (Brutalist) */}
              <div className="border-b border-greyDark group-hover:border-neon p-4 flex justify-between items-center bg-[#050505] transition-colors">
                <span className="font-mono text-neon text-sm font-bold">[ 0{idx + 1} ]</span>
                <Starburst size={20} className="text-greyDark group-hover:text-neon transition-colors" />
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-anton text-4xl text-pureWhite mb-4 group-hover:text-neon transition-colors uppercase">{project.title}</h3>
                <p className="text-greyLight mb-6 font-inter text-sm leading-relaxed flex-1">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(tech => (
                    <span key={tech} className="text-xs font-mono border border-greyDark px-2 py-1 text-greyLight group-hover:border-neon group-hover:text-neon transition-colors">{tech}</span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-6 mt-auto pt-4 border-t border-greyDark group-hover:border-neon transition-colors">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono hover:text-neon transition-colors text-pureWhite">
                    <Github size={18} /> GITHUB
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-mono hover:text-neon transition-colors text-pureWhite">
                    <ExternalLink size={18} /> LIVE
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

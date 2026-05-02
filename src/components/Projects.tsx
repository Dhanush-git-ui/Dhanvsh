
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Github } from './icons'; // Using your custom icons
import gsap from 'gsap';

const projects = [
  {
    title: "STARTUP SYNC",
    desc: "An AI-powered platform for idea validation and structured planning.",
    tech: ['React.js', 'Gemini 2.5', 'Tailwind'],
    github: "https://github.com/Dhanush-git-ui/StartUpSync2.0.git",
    live: "https://startup-sync-eight.vercel.app/",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600"
  },
  {
    title: "HITAM AI CHATBOT",
    desc: "A RAG-based chatbot for natural language queries regarding academic regulations.",
    tech: ['React.js', 'RAG', 'LangChain'],
    github: "https://github.com/Dhanush-git-ui/Hitam-Regulations-CharBot.git",
    live: "https://hitam-regulations-char-bot-frontend.vercel.app/",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=1600"
  },
  {
    title: "F1 KINETIC",
    desc: "A real-time telemetry analysis and predictive strategy modeling platform.",
    tech: ['FastAPI', 'React', 'Fast-F1 API'],
    github: "https://github.com/Dhanush-git-ui/F1_GVV.git",
    live: "https://f1vd.vercel.app/",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600"
  },
  {
    title: "LEARNIVERSE AI",
    desc: "An intelligent learning platform utilizing RAG and YouTube transcript processing.",
    tech: ['React', 'RAG', 'Gemini API'],
    github: "https://github.com/Dhanush-git-ui/learniverse-ai.git",
    live: "https://learniverse-ai.vercel.app/",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1600"
  }
];

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);





















  // GSAP Mouse Follow Effect for the hidden image
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="projects" className="w-full bg-black py-32 relative cursor-default">
      
      {/* 1. FLOATING CURSOR IMAGE */}
      <div 
        ref={imageRef} 
        className="fixed top-0 left-0 w-[350px] h-[450px] pointer-events-none z-50 overflow-hidden transform -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl"
        style={{ 
          opacity: hoveredIdx !== null ? 1 : 0, 
          visibility: hoveredIdx !== null ? 'visible' : 'hidden',
          transition: 'opacity 0.4s ease, visibility 0.4s' 
        }}
      >
        <AnimatePresence mode="wait">
          {hoveredIdx !== null && (
             <motion.img 
                key={hoveredIdx}
                src={projects[hoveredIdx].image} 
                initial={{ scale: 1.2, opacity: 0, filter: "blur(10px)", rotate: -2 }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)", rotate: 0 }}
                exit={{ scale: 1.1, opacity: 0, filter: "blur(5px)", rotate: 2 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full h-full object-cover absolute inset-0"
             />
          )}
        </AnimatePresence>
      </div>

      {/* 2. SECTION HEADER */}
      <div className="px-6 md:px-12 mb-20">
         <h2 className="font-anton text-6xl md:text-[8vw] text-white uppercase leading-[0.8]">
            Selected<br/>Works
         </h2>





















      </div>




      {/* 3. INTERACTIVE LIST */}
      <div className="w-full border-t border-white/20">
        {projects.map((proj, idx) => (
          <div 
            key={idx}
            className="group relative border-b border-white/20 px-6 md:px-12 py-12 transition-colors duration-500 hover:bg-[#EAEAEA]"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              
              {/* Left Side: Title */}
              <div className="flex items-center gap-6">
                <span className="font-mono text-white/40 group-hover:text-black/40 text-sm transition-colors duration-500">
                  0{idx + 1}
                </span>
                <h3 className="font-anton text-5xl md:text-7xl text-white group-hover:text-black transition-colors duration-500 uppercase tracking-tighter mix-blend-difference">
                   {proj.title}
                </h3>
              </div>
              
              {/* Right Side: Links that appear on hover */}
              <div className="flex items-center gap-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                 <a href={proj.github} target="_blank" rel="noreferrer" className="text-black font-mono text-xs uppercase tracking-widest flex items-center gap-2 border border-black/20 px-5 py-3 rounded-full hover:bg-black hover:text-white transition-all">
                   <Github size={14} /> Code
                 </a>
                 <a href={proj.live} target="_blank" rel="noreferrer" className="text-black font-mono text-xs uppercase tracking-widest flex items-center gap-2 border border-black/20 px-5 py-3 rounded-full hover:bg-black hover:text-white transition-all">
                   <ExternalLink size={14} /> Live
                 </a>
              </div>

            </div>
          </div>
        ))}



      </div>
    </section>
  );
}
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import { Github } from './icons';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "STARTUP SYNC",
    category: "AI Platform",
    desc: "An AI-powered platform for idea validation and structured planning.",
    tech: ['React.js', 'Gemini 2.5', 'Tailwind'],
    github: "https://github.com/Dhanush-git-ui/StartUpSync2.0.git",
    live: "https://startup-sync-eight.vercel.app/",
    image: "/startupsync.png"
  },
  {
    title: "HITAM CHATBOT",
    category: "RAG Agent",
    desc: "A RAG-based chatbot for natural language queries regarding academic regulations.",
    tech: ['React.js', 'RAG', 'LangChain'],
    github: "https://github.com/Dhanush-git-ui/Hitam-Regulations-CharBot.git",
    live: "https://hitam-regulations-char-bot-frontend.vercel.app/",
    image: "/hitam.png"
  },
  {
    title: "F1 KINETIC",
    category: "Analytics",
    desc: "A real-time telemetry analysis and predictive strategy modeling platform.",
    tech: ['FastAPI', 'React', 'Fast-F1'],
    github: "https://github.com/Dhanush-git-ui/F1_GVV.git",
    live: "https://f1vd.vercel.app/",
    image: "/f1.png"
  },
  {
    title: "LEARNIVERSE",
    category: "AI Learning",
    desc: "An intelligent learning platform utilizing RAG and YouTube transcript processing.",
    tech: ['React', 'RAG', 'Gemini API'],
    github: "https://github.com/Dhanush-git-ui/learniverse-ai.git",
    live: "https://learniverse-ai.vercel.app/",
    image: "/learniverse.png"
  }
];

const themes = [
  { color: '#e8734a', bg: 'rgba(232,115,74,0.14)', border: 'rgba(232,115,74,0.2)', shadow: 'inset 0 0 140px rgba(232,115,74,0.12)' },
  { color: '#4a8fe8', bg: 'rgba(74,143,232,0.14)', border: 'rgba(74,143,232,0.2)', shadow: 'inset 0 0 140px rgba(74,143,232,0.12)' },
  { color: '#7be8b0', bg: 'rgba(123,232,176,0.14)', border: 'rgba(123,232,176,0.2)', shadow: 'inset 0 0 140px rgba(123,232,176,0.12)' },
  { color: '#e84a8f', bg: 'rgba(232,74,143,0.14)', border: 'rgba(232,74,143,0.2)', shadow: 'inset 0 0 140px rgba(232,74,143,0.12)' }
];

export default function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [activeCard, setActiveCard] = useState(0);
  const [hudVisible, setHudVisible] = useState(false);

  const scrollToCard = (i: number) => {
    if (!wrapperRef.current) return;
    const N = projects.length;
    const SCROLL_PER_CARD = 1.3;
    const totalScrollPx = N * SCROLL_PER_CARD * window.innerHeight;
    
    const ENTER_FRAC = 0.55;
    const wEnd = (i / N) + ((1 / N) * ENTER_FRAC);
    const nextStart = (i + 1) / N;
    const stableEnd = i === N - 1 ? 1.0 : nextStart;
    const optimalP = (wEnd + stableEnd) / 2;
    
    // Get absolute top position relative to the document
    const rect = wrapperRef.current.getBoundingClientRect();
    const absoluteTop = rect.top + window.scrollY;
    
    const targetScroll = absoluteTop + (optimalP * totalScrollPx);
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const handleCardClick = (i: number) => {
    // If the user has selected text, don't trigger the scroll
    if (window.getSelection()?.toString().length) return;
    scrollToCard(i);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const pX = (x - centerX) / centerX;
    const pY = (y - centerY) / centerY;
    
    e.currentTarget.style.setProperty('--parallax-x', `${pX}`);
    e.currentTarget.style.setProperty('--parallax-y', `${pY}`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--mouse-x', `50%`);
    e.currentTarget.style.setProperty('--mouse-y', `50%`);
    e.currentTarget.style.setProperty('--parallax-x', `0`);
    e.currentTarget.style.setProperty('--parallax-y', `0`);
  };

  useEffect(() => {
    if (!wrapperRef.current || !spacerRef.current) return;
    
    let buildScrollFn: () => void;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      const N = projects.length;
      const PEEK = 80; 
      const SCROLL_PER_CARD = 1.3;
      const ENTER_FRAC = 0.55;

      buildScrollFn = () => {
        ScrollTrigger.getAll().forEach(t => t.kill());

        const isMobile = window.innerWidth <= 768;
        const actualCardWidth = isMobile ? window.innerWidth * 0.88 : Math.min(window.innerWidth * 0.85, 1100);

        const totalScrollPx = N * SCROLL_PER_CARD * window.innerHeight;
        if (spacerRef.current) {
          spacerRef.current.style.height = `${totalScrollPx}px`;
        }

        const restX = (i: number) => {
          const stackW = (N - 1) * PEEK + actualCardWidth;
          return (-stackW / 2) + (actualCardWidth / 2) + (i * PEEK);
        };

        cards.forEach((c, i) => {
          gsap.set(c, { x: window.innerWidth * 1.15, y: 0, rotate: 5, opacity: 0, zIndex: i + 1 });
        });

        ScrollTrigger.create({
          trigger: wrapperRef.current,
          start: 'top top',
          end: () => `+=${totalScrollPx}`,
          scrub: 1,
          onEnter: () => setHudVisible(true),
          onLeaveBack: () => setHudVisible(false),
          onUpdate(self) {
            const p = self.progress;
            const totalW = window.innerWidth;
            let currentActive = 0;

            cards.forEach((card, i) => {
              const wStart = i / N;
              const wEnd = wStart + (1 / N) * ENTER_FRAC;
              const lp = Math.max(0, Math.min(1, (p - wStart) / (wEnd - wStart)));

              const ep = 1 - Math.pow(1 - lp, 3);
              const startX = totalW * 1.15;
              const endX = restX(i);
              const x = lp === 0 ? startX : startX + (endX - startX) * ep;

              const y = (1 - ep) * 18;
              const rot = (1 - ep) * 5;
              const op = Math.min(1, lp * 4);

              gsap.set(card, { 
                x, y, rotate: rot, opacity: op, zIndex: i + 1,
                '--reveal': lp
              });

              if (lp >= 0.5) currentActive = i;
            });

            setActiveCard(currentActive);
          }
        });
      };

      buildScrollFn();
      window.addEventListener('resize', buildScrollFn);
    }, wrapperRef);

    return () => {
      if (buildScrollFn) window.removeEventListener('resize', buildScrollFn);
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" className="bg-[#020202] text-[#f0ede8] font-inter relative min-h-screen pt-24 md:pt-40">
      
      {/* HUD Counter */}
      <div 
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[7000] flex items-center gap-4 px-6 py-2.5 border border-white/10 rounded-full backdrop-blur-md bg-black/60 font-mono text-[12px] font-bold tracking-[0.12em] text-white/35 transition-opacity duration-600 ${hudVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <span className="text-white">0{activeCard + 1}</span>
        <span className="text-white/15">/</span>
        <span>0{projects.length}</span>
      </div>

      {/* Index Dots */}
      <div className={`hidden md:flex fixed right-[3.5vw] top-1/2 -translate-y-1/2 z-[7000] flex-col gap-[7px] transition-opacity duration-600 ${hudVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {projects.map((_, i) => (
          <button 
            key={i} 
            onClick={() => scrollToCard(i)}
            aria-label={`Scroll to project ${i + 1}`}
            className={`w-[3px] rounded-full transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer ${activeCard === i ? 'h-[34px] bg-white' : 'h-[18px] bg-white/15 hover:bg-white/40'}`}
          />
        ))}
      </div>

      {/* Editorial Header */}
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 mb-20 md:mb-32 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-end">
          
          {/* Left Side: Typography */}
          <div className="col-span-1 md:col-span-8">
            <div className="inline-flex items-center gap-4 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
               <div className="w-2 h-2 rounded-full bg-[#C1FF72] animate-pulse"></div>
               <span className="font-mono text-[10px] md:text-xs text-[#C1FF72] tracking-[0.3em] uppercase">Case Studies</span>
            </div>
            
            <h2 className="text-[5rem] md:text-[9rem] lg:text-[11rem] font-[900] tracking-[-0.05em] uppercase leading-[0.8] m-0 flex flex-col">
              <span className="text-white drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]">Selected</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white/40 to-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>Works</span>
            </h2>
          </div>
          
          {/* Right Side: Description */}
          <div className="col-span-1 md:col-span-4 flex justify-start md:justify-end pb-4 md:pb-6">
            <div className="relative">
              {/* Decorative framing */}
              <div className="absolute -top-4 -left-4 w-4 h-4 border-t border-l border-[#C1FF72]/50"></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 border-b border-r border-[#C1FF72]/50"></div>
              
              <p className="font-inter text-white/60 text-base md:text-lg leading-[1.8] max-w-[340px] bg-white/[0.02] p-6 rounded-2xl border border-white/[0.05] backdrop-blur-md shadow-[inset_0_1px_rgba(255,255,255,0.05)] relative z-10">
                Crafting immersive digital experiences where design meets <span className="text-white font-medium">engineering precision.</span> Every project is a study in motion, layout, and performance.
              </p>
            </div>
          </div>
          
        </div>
      </div>

      <div ref={wrapperRef} className="relative w-full">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {projects.map((proj, i) => (
              <div 
                key={i}
                ref={el => { cardsRef.current[i] = el; }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="absolute w-[88vw] md:w-[min(85vw,1100px)] h-[65vh] md:h-[70vh] rounded-[24px] md:rounded-[40px] border border-white/[0.06] bg-[#070707] overflow-hidden group shadow-[inset_0_1px_rgba(255,255,255,0.05),0_20px_80px_-20px_rgba(0,0,0,1)] will-change-transform flex items-center justify-center transition-shadow duration-500 hover:shadow-[inset_0_1px_rgba(255,255,255,0.05),0_30px_100px_-20px_rgba(0,0,0,1)]"
              >
                 {/* 10. Mouse Spotlight & 6. Noise Texture */}
                 <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100" style={{ background: 'radial-gradient(circle 800px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)' }} />
                 <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                 
                 {/* 2. Glass Reflection Overlay */}
                 <div className="absolute inset-0 pointer-events-none z-50 rounded-[inherit] overflow-hidden mix-blend-overlay opacity-50" style={{ background: 'linear-gradient(120deg, rgba(255,255,255,0.1), transparent 30%)' }} />

                 {/* Inner wrapper for layout and click interaction */}
                 <div className="w-full h-full flex flex-col md:flex-row relative cursor-pointer" onClick={() => handleCardClick(i)}>
                   
                   <div className="w-full md:w-[45%] h-1/2 md:h-full p-6 md:p-12 flex flex-col justify-between relative z-20 transition-transform duration-700 ease-out" style={{ transform: 'translate(calc(var(--parallax-x, 0) * -10px), calc(var(--parallax-y, 0) * -10px))' }}>
                      <div>
                         <div className="flex items-center gap-4 mb-4 md:mb-8" style={{ opacity: 'clamp(0, calc((var(--reveal) - 0.2) * 5), 1)', transform: 'translateY(calc((1 - var(--reveal)) * 20px))' }}>
                            <span className="font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase px-4 py-1.5 rounded-full backdrop-blur-[20px] bg-white/[0.04] border border-white/[0.08]" style={{ color: themes[i].color }}>
                              {proj.category}
                            </span>
                            <span className="font-mono text-xs md:text-sm text-white/30 tracking-widest">
                              0{i + 1}
                            </span>
                         </div>
                         
                         {/* 5. Typography Hierarchy */}
                         <h3 className="font-sans text-[clamp(3rem,6vw,6rem)] font-[900] tracking-[-0.04em] text-white mb-4 md:mb-6 leading-[0.9]" style={{ opacity: 'clamp(0, calc((var(--reveal) - 0.4) * 5), 1)', transform: 'translateY(calc((1 - var(--reveal)) * 20px))' }}>
                           {proj.title}
                         </h3>
                         
                         <p className="font-inter text-sm md:text-base text-white/70 leading-[1.7] max-w-[420px] hidden md:block" style={{ opacity: 'clamp(0, calc((var(--reveal) - 0.6) * 5), 1)', transform: 'translateY(calc((1 - var(--reveal)) * 20px))' }}>
                           {proj.desc}
                         </p>
                      </div>

                      <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6 md:mb-8 transition-transform duration-700 ease-out" style={{ opacity: 'clamp(0, calc((var(--reveal) - 0.7) * 5), 1)', transform: 'translate(calc(var(--parallax-x, 0) * -15px), calc(var(--parallax-y, 0) * -15px + (1 - var(--reveal)) * 20px))' }}>
                          {proj.tech.map((t, idx) => (
                             <span key={idx} className="font-mono text-[9px] md:text-[11px] tracking-wider uppercase text-white/80 px-3 py-1.5 border border-white/[0.08] rounded-full bg-white/[0.04] backdrop-blur-[20px]">
                               {t}
                             </span>
                          ))}
                        </div>

                        {/* 7. Improve Button Design */}
                        <div className="flex items-center gap-4 transition-transform duration-700 ease-out" style={{ opacity: 'clamp(0, calc((var(--reveal) - 0.8) * 5), 1)', transform: 'translate(calc(var(--parallax-x, 0) * -20px), calc(var(--parallax-y, 0) * -20px + (1 - var(--reveal)) * 20px))' }}>
                           <a href={proj.live} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="group/btn flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs hover:-translate-y-1 hover:scale-[1.03] shadow-[0_20px_40px_rgba(255,255,255,0.15)] transition-all duration-400 overflow-hidden relative z-50">
                             <span className="relative z-10 flex items-center gap-2">
                               View Live <ExternalLink size={14} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                             </span>
                           </a>
                           <a href={proj.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-[20px] text-white hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-[1.03] shadow-lg transition-all duration-400 z-50">
                             <Github size={18} />
                           </a>
                        </div>
                      </div>
                   </div>

                   {/* 11. Right side Image Container Overflow */}
                   <div className="absolute right-[-20%] md:right-[-10%] top-1/2 -translate-y-1/2 w-[70%] md:w-[65%] h-[120%] md:h-[110%] z-10 pointer-events-none hidden md:block">
                      {/* 1. Floating Glow */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[80px] z-0 opacity-50 group-hover:opacity-80 transition-opacity duration-700" style={{ background: `radial-gradient(circle, ${themes[i].color}60, transparent 70%)` }} />
                      
                      {/* Image Layer with 3. Image Drama & 4. Hover Parallax */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-700 ease-out" style={{ transform: 'translate(calc(var(--parallax-x, 0) * 30px), calc(var(--parallax-y, 0) * 30px)) scale(1.04) rotate(-1deg)' }}>
                         <div className="w-[80%] h-[70%] rounded-[24px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.05)] bg-[#0A0A0A] relative" style={{ opacity: 'clamp(0, calc((var(--reveal) - 0.2) * 5), 1)', transform: 'translateX(calc((1 - var(--reveal)) * 100px))' }}>
                           {/* 12. Layered Depth - background shadow/blur */}
                           <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
                           <img 
                             src={proj.image} 
                             alt={proj.title}
                             className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                           />
                           {/* Overlays */}
                           <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent z-20 pointer-events-none opacity-80" />
                           <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[24px] pointer-events-none z-30" />
                         </div>
                      </div>
                   </div>

                   {/* Mobile Image Container */}
                   <div className="w-full h-1/2 p-3 md:hidden z-10">
                      <div className="w-full h-full relative rounded-[18px] overflow-hidden bg-black shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.05)]">
                         <img 
                           src={proj.image} 
                           alt={proj.title}
                           className="w-full h-full object-cover"
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent z-10 pointer-events-none" />
                      </div>
                   </div>

                 </div>
              </div>
            ))}
          </div>
        </div>
        <div ref={spacerRef} className="pointer-events-none w-full" />
      </div>
    </section>
  );
}
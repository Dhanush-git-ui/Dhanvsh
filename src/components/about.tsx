import { motion } from 'framer-motion';
import { ScratchToReveal } from './ScratchToReveal';

const skillStack = [
  { name: 'React.js', icon: 'react' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'GSAP', icon: 'gsap' },
  { name: 'Framer', icon: 'framer' },
  { name: 'Three.js', icon: 'threejs' },
  { name: 'Python', icon: 'python' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'Flask', icon: 'flask' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'LLMs', icon: 'llm' },
  { name: 'RAG', icon: 'rag' },
  { name: 'Vector DB', icon: 'vectordb' },
  { name: 'LangChain', icon: 'langchain' },
  { name: 'MongoDB', icon: 'mongodb' },
];

const renderSkillIcon = (skill: { name: string; icon: string }) => {
  const iconClass = "w-12 h-12 mb-6 filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500";

  if (skill.icon === 'rag') {
    return (
      <svg viewBox="0 0 128 128" className={iconClass}>
        <rect width="128" height="128" rx="28" fill="#6366F1" />
        {/* Document in background */}
        <rect x="28" y="24" width="46" height="60" rx="6" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <line x1="38" y1="40" x2="62" y2="40" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <line x1="38" y1="54" x2="54" y2="54" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
        <line x1="38" y1="68" x2="48" y2="68" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />

        {/* Database in foreground */}
        <path d="M58 72 C58 66, 98 66, 98 72 V92 C98 98, 58 98, 58 92 Z" fill="#4F46E5" stroke="#FFFFFF" strokeWidth="6" strokeLinejoin="round" />
        <path d="M58 72 C58 78, 98 78, 98 72" fill="none" stroke="#FFFFFF" strokeWidth="6" />
        <path d="M58 82 C58 88, 98 88, 98 82" fill="none" stroke="#FFFFFF" strokeWidth="6" />

        {/* AI Sparkle */}
        <path d="M96 22 L99 30 L107 33 L99 36 L96 44 L93 36 L85 33 L93 30 Z" fill="#FBBF24" />
      </svg>
    );
  }

  if (skill.icon === 'vectordb') {
    return (
      <svg viewBox="0 0 128 128" className={iconClass}>
        <rect width="128" height="128" rx="28" fill="#0EA5E9" />
        {/* Database cylinder outline */}
        <ellipse cx="64" cy="30" rx="36" ry="12" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
        <path d="M28 30 V98 C28 110, 100 110, 100 98 V30" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
        <path d="M28 52 C28 64, 100 64, 100 52" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
        <path d="M28 75 C28 87, 100 87, 100 75" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />

        {/* 3D Vector Space Axes */}
        <g stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round">
          {/* Origin to Y (Up) */}
          <line x1="64" y1="72" x2="64" y2="40" />
          {/* Origin to X (Down-Right) */}
          <line x1="64" y1="72" x2="90" y2="85" />
          {/* Origin to Z (Down-Left) */}
          <line x1="64" y1="72" x2="38" y2="85" />
          
          {/* Vector Arrows */}
          <line x1="64" y1="72" x2="50" y2="48" stroke="#FDE047" strokeWidth="6" />
          <line x1="64" y1="72" x2="82" y2="56" stroke="#10B981" strokeWidth="6" />
        </g>
        
        {/* Vector Dots */}
        <circle cx="50" cy="48" r="5" fill="#FFFFFF" />
        <circle cx="82" cy="56" r="5" fill="#FFFFFF" />
      </svg>
    );
  }

  if (skill.icon === 'llm') {
    return (
      <svg viewBox="0 0 128 128" className={iconClass}>
        <rect width="128" height="128" rx="28" fill="#10B981" />
        {/* Connection lines */}
        <g stroke="rgba(255,255,255,0.4)" strokeWidth="3">
          {/* Left hemisphere connections */}
          <line x1="45" y1="64" x2="35" y2="48" />
          <line x1="45" y1="64" x2="55" y2="45" />
          <line x1="45" y1="64" x2="32" y2="78" />
          <line x1="45" y1="64" x2="52" y2="85" />
          <line x1="35" y1="48" x2="55" y2="45" />
          <line x1="32" y1="78" x2="52" y2="85" />
          
          {/* Right hemisphere connections */}
          <line x1="83" y1="64" x2="93" y2="48" />
          <line x1="83" y1="64" x2="73" y2="45" />
          <line x1="83" y1="64" x2="96" y2="78" />
          <line x1="83" y1="64" x2="76" y2="85" />
          <line x1="93" y1="48" x2="73" y2="45" />
          <line x1="96" y1="78" x2="76" y2="85" />
          
          {/* Cross-hemisphere bridging connections */}
          <line x1="55" y1="45" x2="73" y2="45" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="45" y1="64" x2="83" y2="64" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="52" y1="85" x2="76" y2="85" stroke="#FFFFFF" strokeWidth="4" />
        </g>
        
        {/* Nodes */}
        <g fill="#FFFFFF">
          <circle cx="45" cy="64" r="6" />
          <circle cx="35" cy="48" r="5" fill="#A7F3D0" />
          <circle cx="55" cy="45" r="5" fill="#A7F3D0" />
          <circle cx="32" cy="78" r="5" fill="#A7F3D0" />
          <circle cx="52" cy="85" r="5" fill="#A7F3D0" />
          
          <circle cx="83" cy="64" r="6" />
          <circle cx="93" cy="48" r="5" fill="#A7F3D0" />
          <circle cx="73" cy="45" r="5" fill="#A7F3D0" />
          <circle cx="96" cy="78" r="5" fill="#A7F3D0" />
          <circle cx="76" cy="85" r="5" fill="#A7F3D0" />
        </g>
        
        <circle cx="64" cy="54" r="3.5" fill="#FDE047" />
        <circle cx="64" cy="74" r="3.5" fill="#FDE047" />
      </svg>
    );
  }

  if (skill.icon === 'langchain') {
    return (
      <svg viewBox="0 0 128 128" className={iconClass}>
        <rect width="128" height="128" rx="28" fill="#1F2937" />
        {/* Parrot Body */}
        <path d="M48 35 C48 35 52 25 64 25 C76 25 80 35 80 35 C80 35 88 38 88 48 C88 58 80 62 80 62 L80 95 C80 98 76 102 72 102 C68 102 64 98 64 95 L64 78 L60 78 L60 95 C60 98 56 102 52 102 C48 102 44 98 44 95 L44 62 C44 62 36 58 36 48 C36 38 48 35 48 35 Z" fill="#10B981" />
        {/* Parrot Beak */}
        <path d="M74 38 C74 38 86 40 84 48 C82 52 74 50 74 50 Z" fill="#FBBF24" />
        {/* Parrot Eye */}
        <circle cx="60" cy="38" r="3" fill="#FFFFFF" />
        {/* Chain Link */}
        <rect x="52" y="65" width="24" height="12" rx="6" fill="none" stroke="#F3F4F6" strokeWidth="4" />
        <rect x="52" y="73" width="24" height="12" rx="6" fill="none" stroke="#F3F4F6" strokeWidth="4" />
      </svg>
    );
  }

  if (skill.icon === 'gsap') {
    return (
      <svg viewBox="0 0 128 128" className={iconClass}>
        <rect width="128" height="128" rx="28" fill="#111111" stroke="rgba(136, 206, 2, 0.3)" strokeWidth="2" />
        {/* Modern styled GSAP letters */}
        <text x="64" y="78" fontFamily="'Inter', sans-serif" fontWeight="900" fontSize="36" fill="#88CE02" textAnchor="middle" letterSpacing="-1.5">GSAP</text>
        {/* Animation wave */}
        <path d="M34 92 C 49 84, 79 100, 94 92" fill="none" stroke="#88CE02" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  if (skill.icon === 'framer') {
    return (
      <svg viewBox="0 0 128 128" className={iconClass}>
        <defs>
          <linearGradient id="framerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF00C4" />
            <stop offset="100%" stopColor="#7A00FF" />
          </linearGradient>
        </defs>
        <rect width="128" height="128" rx="28" fill="#0A0A0A" stroke="rgba(122, 0, 255, 0.2)" strokeWidth="2" />
        {/* Framer geometric logo */}
        <path d="M36 28 H92 L64 56 H36 Z M36 56 H64 L92 84 H36 Z M36 84 H64 L36 112 Z" fill="url(#framerGrad)" />
      </svg>
    );
  }

  return (
    <img 
      src={`https://skillicons.dev/icons?i=${skill.icon}`} 
      alt={skill.name}
      className={iconClass}
    />
  );
};

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] py-32 text-white flex items-center">
      {/* ----- Background Atmosphere ----- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-1/4 top-1/4 h-[600px] w-[600px] animate-blob rounded-full bg-[#D3FF52]/5 blur-[140px]" />
        <div className="absolute -right-1/4 bottom-1/4 h-[600px] w-[600px] animate-blob rounded-full bg-white/5 blur-[140px] [animation-delay:2s]" />
        <div 
          className="absolute inset-0 opacity-[0.03] brightness-75 mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* ----- Tech Ecosystem ----- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <div className="flex flex-col gap-16 lg:flex-row lg:items-start">
            <div className="lg:w-1/4">
              <h4 className="font-anton text-5xl tracking-tighter text-white uppercase leading-none">
                THE <br /> STACK
              </h4>
              <p className="mt-6 text-xs text-zinc-500 font-mono uppercase tracking-[0.25em] leading-relaxed">
                Proprietary <br /> Workflow & <br /> Tooling
              </p>
            </div>
            
            <div className="lg:w-3/4">
              <ScratchToReveal height={460} brushSize={70}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {skillStack.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      whileHover={{ y: -6, backgroundColor: 'rgba(211,255,82,0.05)', borderColor: 'rgba(211,255,82,0.2)' }}
                      className="flex flex-col items-center justify-center p-5 md:p-6 rounded-[1.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all group"
                    >
                      {renderSkillIcon(skill)}
                      <span className="text-[11px] md:text-[13px] font-bold font-mono uppercase tracking-[0.16em] text-zinc-500 group-hover:text-[#D3FF52] transition-colors text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </ScratchToReveal>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ----- Subtle Grid Overlay ----- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    </section>
  );
}

import { motion } from 'framer-motion';
import { ScratchToReveal } from './ScratchToReveal';

const skillStack = [
  { name: 'React.js', icon: 'react' },
  { name: 'Next.js', icon: 'nextjs' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'Tailwind CSS', icon: 'tailwind' },
  { name: 'GSAP', icon: 'gsap' },
  { name: 'Framer', icon: 'framer' },
  { name: 'Three.js', icon: 'threejs' },
  { name: 'Python', icon: 'python' },
  { name: 'Firebase', icon: 'firebase' },
  { name: 'Node.js', icon: 'nodejs' },
];

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
              <p className="mt-6 text-[10px] text-zinc-600 font-mono uppercase tracking-[0.3em] leading-loose">
                Proprietary <br /> Workflow & <br /> Tooling
              </p>
            </div>
            
            <div className="lg:w-3/4">
              <ScratchToReveal height={420} brushSize={70}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {skillStack.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      whileHover={{ y: -8, backgroundColor: 'rgba(211,255,82,0.05)', borderColor: 'rgba(211,255,82,0.2)' }}
                      className="flex flex-col items-center justify-center p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all group"
                    >
                      <img 
                        src={`https://skillicons.dev/icons?i=${skill.icon}`} 
                        alt={skill.name}
                        className="w-12 h-12 mb-6 filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      />
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-600 group-hover:text-[#D3FF52] transition-colors">
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

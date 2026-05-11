import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
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

const philosophy = [
  {
    title: "Digital Kineticism",
    description: "I believe interfaces should feel physical. Every interaction is an opportunity to create a moment of tactile satisfaction through code and motion."
  },
  {
    title: "The Frictionless Edge",
    description: "Performance isn't just about speed; it's about flow. I build systems that anticipate the user, removing the invisible walls between intent and action."
  },
  {
    title: "Aesthetic Precision",
    description: "Design is a technical discipline. I bridge the gap between pixel-perfect vision and high-performance execution with surgical accuracy."
  }
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const yTranslate = useTransform(smoothProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#050505] py-32 text-white">
      {/* ----- Background Atmosphere ----- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-1/4 top-1/4 h-[600px] w-[600px] animate-blob rounded-full bg-[#D3FF52]/5 blur-[140px]" />
        <div className="absolute -right-1/4 bottom-1/4 h-[600px] w-[600px] animate-blob rounded-full bg-white/5 blur-[140px] [animation-delay:2s]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-75" />
      </div>

      {/* ----- Large Floating Ghost Text ----- */}
      <motion.div 
        style={{ y: yTranslate, opacity: 0.02 }}
        className="pointer-events-none absolute left-0 top-0 z-0 whitespace-nowrap font-anton text-[25vw] leading-none text-white select-none"
      >
        AESTHETIC ENGINEER
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* ----- Header Section ----- */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="mb-4 inline-block font-mono text-[10px] uppercase tracking-[0.5em] text-[#D3FF52]">
              // 01 — THE IDENTITY
            </span>
            <h2 className="mb-8 font-anton text-7xl leading-[0.85] tracking-tighter md:text-9xl lg:text-[10rem]">
              CODE AS <br />
              <span className="text-[#D3FF52]">KINETIC</span> <br />
              <span className="font-serif italic text-white/40 tracking-normal">ART.</span>
            </h2>
            <p className="max-w-2xl font-inter text-xl leading-relaxed text-zinc-500 md:text-2xl">
              I am a digital architect specializing in the intersection of 
              <span className="text-white"> high-performance logic </span> 
              and immersive motion. I translate complex ideas into fluid, cinematic experiences that live on the edge of innovation.
            </p>
          </motion.div>
        </div>

        {/* ----- Philosophy Grid ----- */}
        <div className="mt-40 grid gap-4 md:grid-cols-3">
          {philosophy.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-white/5 bg-white/[0.01] p-10 transition-all hover:bg-white/[0.03] hover:border-white/10"
            >
              <div className="mb-8 h-px w-8 bg-[#D3FF52] group-hover:w-full transition-all duration-500" />
              <h3 className="mb-4 font-poppins text-lg font-bold text-white uppercase tracking-tight">{item.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* ----- Tech Ecosystem ----- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-40 border-t border-white/5 pt-20"
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
              <ScratchToReveal width={1000} height={420} brushSize={70}>
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

        {/* ----- Final Vision Callout ----- */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          viewport={{ once: true }}
          className="mt-48 flex flex-col items-center text-center"
        >
          <div className="mb-16 h-32 w-[1px] bg-gradient-to-b from-transparent via-[#D3FF52] to-transparent" />
          <p className="max-w-4xl font-serif text-4xl italic leading-[1.1] text-white/90 md:text-6xl lg:text-7xl">
            "We are not just building tools. We are defining the new visual language of the digital age."
          </p>
          <motion.button
            whileHover={{ scale: 1.05, letterSpacing: '0.3em' }}
            whileTap={{ scale: 0.95 }}
            className="mt-16 rounded-full border border-[#D3FF52]/20 bg-[#D3FF52]/5 px-12 py-5 font-poppins text-xs font-bold uppercase tracking-[0.2em] text-[#D3FF52] backdrop-blur-md hover:bg-[#D3FF52] hover:text-black transition-all duration-500"
          >
            Initiate Contact
          </motion.button>
        </motion.div>
      </div>

      {/* ----- Subtle Grid Overlay ----- */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    </section>
  );
}

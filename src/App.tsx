import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Projects from './components/Projects';
import HeroImageReveal from './components/HeroImageReveal';



export default function App() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Mouse Move for Custom Cursor
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col font-inter selection:bg-[#D3FF52] selection:text-black">
      
      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

      {/* Global Grain/Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-[9000] opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl px-8 py-4 flex justify-between items-center backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
  <div className="font-anton text-2xl text-white tracking-tighter">DG.</div>
  
  <div className="hidden md:flex gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-white/60">
    <a href="#projects" className="hover:text-white transition-colors">Works</a>
    <a href="#experience" className="hover:text-white transition-colors">Experience</a>
    <a href="#contact" className="hover:text-white transition-colors">Connect</a>
  </div>

  <a href="/resume.html" target="_blank" className="border border-white/20 px-5 py-2 rounded-xl text-[10px] font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
    Resume
  </a>
</nav>




      {/* ================= RIGHT MAIN CONTENT ================= */}
      <main className="flex-1">
        
        <section className="w-full h-screen bg-black flex flex-col items-center relative overflow-hidden">
          
          <div className="flex-1 flex flex-col justify-center items-center w-full px-6 pt-20">
            <motion.div 
              initial={{ filter: "blur(20px)", opacity: 0, y: 50 }} 
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }} 
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
              className="w-full text-center relative z-10"
            >
              <h1 className="font-anton text-[13vw] text-pureWhite uppercase tracking-[-0.05em] transform scale-y-110 origin-center leading-[0.8]">
                DHANUSH GOPAVARAM
              </h1>
            </motion.div>
          </div>

         {/* Bottom Content Group */}
        <div className="absolute bottom-0 w-full flex flex-col items-center">

  {/* Premium Marquee (TOP) */}
  <div className="w-full overflow-hidden bg-[#5A4BEB] py-4 select-none">
    <motion.div  
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="flex whitespace-nowrap items-center w-max gap-8"
    >
      {[...Array(20)].map((_, i) => (
        <div key={i} className="flex items-center gap-8">
          <span className="text-white font-epilogue font-semibold text-2xl md:text-3xl uppercase">
            Designer At Work
          </span>
          <span className="text-white font-epilogue font-semibold text-xl opacity-40">
            ✖
          </span>
        </div>
      ))}
    </motion.div>
  </div>

  {/* Bio line (NOW BELOW) */}
  <div className="py-6 px-6 text-center">
    <p className="text-white/40 font-sora text-[10px] md:text-[11px] font-semibold tracking-[0.4em] uppercase">
      AI-Focused Software Engineer | Breaking Limits through Code | Caffeine to Code
    </p>
  </div>

</div>
</section>


        <HeroImageReveal /> 

        {/* Experience Section */}
        <section className="px-6 md:px-12 py-24 bg-[#0a0a0a] border-b border-greyDark">
          <h2 className="font-anton text-5xl md:text-6xl text-pureWhite mb-12 uppercase">Experience</h2>
          <div className="flex flex-col gap-12 border-l border-greyDark ml-2 md:ml-4 pl-6 md:pl-8 relative">
            
            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
              <div className="absolute w-3 h-3 bg-yellow-500 rounded-full -left-[7px] mt-2"></div>
              <h3 className="font-anton text-2xl text-pureWhite">AI Intern — VISWAM.AI</h3>
              <p className="text-greyLight text-sm font-mono mb-4 text-yellow-500">Summer 2025 | Swecha Programme & IIIT Hyderabad</p>
              <ul className="text-greyLight font-inter text-sm list-disc ml-4 space-y-2">
                <li>Built an AI-powered Telugu diet generator using structured nutrition datasets.</li>
                <li>Implemented a RAG-based assistant to handle user queries.</li>
                <li>Designed calorie-aware meal planning logic with an interactive Streamlit interface.</li>
              </ul>
            </motion.div>

            <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] mt-2"></div>
              <h3 className="font-anton text-2xl text-pureWhite">Web Development Intern — Freshneer Foods</h3>
              <p className="text-greyLight text-sm font-mono mb-4 text-green-500">Jan 2025 – Feb 2025</p>
              <ul className="text-greyLight font-inter text-sm list-disc ml-4 space-y-2">
                <li>Built reusable UI components and integrated REST APIs.</li>
                <li>Improved performance through optimized rendering.</li>
                <li>Deployed application on Vercel ensuring reliability.</li>
              </ul>
            </motion.div>

          </div>
        </section>

        

        {/* Selected Works Section */}
        <Projects />

        {/* Education & Achievements Section */}
        <section className="px-6 md:px-12 py-24 border-t border-greyDark bg-[#0a0a0a]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            
            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
              <h2 className="font-anton text-4xl text-pureWhite mb-8 uppercase">Education</h2>
              <div className="border border-greyDark p-6 rounded-lg bg-[#111] hover:-translate-y-2 transition-transform duration-300">
                <h3 className="font-anton text-xl text-pureWhite mb-2">Hyderabad Institute of Technology and Management</h3>
                <p className="text-pureWhite text-sm font-bold mb-4">B.Tech in Computer Science Engineering</p>
                <div className="flex justify-between items-center text-greyLight text-sm font-mono pt-4 border-t border-greyDark">
                  <span>2024 – 2027</span>
                  <span className="bg-pureWhite text-black px-2 py-1 rounded font-bold">CGPA: 7.65</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 className="font-anton text-4xl text-pureWhite mb-8 uppercase">Achievements</h2>
              <div className="border border-greyDark p-6 rounded-lg bg-[#111] hover:-translate-y-2 transition-transform duration-300 h-full">
                <h3 className="font-anton text-xl text-pureWhite mb-2 text-blue-400">Campus Mantri — GeeksforGeeks</h3>
                <p className="text-greyLight text-sm font-inter leading-relaxed">
                  Led coding initiatives and organized technical events promoting a problem-solving culture among students.
                </p>
              </div>
            </motion.div>

          </div>
        </section>

      </main>
    </div>
  );
}

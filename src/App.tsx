import { motion } from 'framer-motion';
import { ExternalLink, Mail, MapPin } from 'lucide-react';
import { Github, Linkedin } from './components/icons';
import Projects from './components/Projects';
import HeroImageReveal from './components/HeroImageReveal';

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col font-inter">
      
      <nav className="w-full bg-pureWhite text-black px-6 py-4 flex justify-between items-center sticky top-0 z-50">
  <div className="font-anton text-4xl font-black tracking-tighter">DG.</div>
  <div className="hidden md:flex gap-8 text-sm font-bold font-inter">
    <a href="#about" className="hover:opacity-70 transition-opacity">About Me</a>
    <a href="#projects" className="hover:opacity-70 transition-opacity">My Projects</a>
    <a href="#experience" className="hover:opacity-70 transition-opacity">Experience</a>
    <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
  </div>
  <a href="#" className="border border-black px-6 py-2 rounded-full text-sm font-inter hover:bg-black hover:text-white transition-colors">
    Resume
  </a>
</nav>



      {/* ================= RIGHT MAIN CONTENT ================= */}
      <main className="flex-1">
        
        <section className="w-full min-h-[80vh] bg-black flex flex-col justify-center items-center relative overflow-hidden">
          <motion.div 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }}
          className="w-full text-center">
          <h1 className="font-anton text-[12vw]  text-pureWhite uppercase tracking-[-0.05em] transform scale-y-125 origin-center">
          DHANUSH GOPAVARAM</h1>
          </motion.div  >
          <div className="absolute bottom-12 text-center w-full px-6">
          <p className="text-white font-inter text-sm font-bold tracking-widest uppercase opacity-80">
          AI-Focused Software Engineer | Breaking Limits through Code | Caffiene to Code 
          </p>
          </div>
        </section>

        <HeroImageReveal /> 


        {/* Marquee Skills */}
        <div className="w-full bg-pureWhite py-4 overflow-hidden flex items-center border-y border-greyDark">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          >
            <span className="text-black font-anton text-2xl md:text-4xl uppercase px-4">
              REACT.JS • RAG & LLMs • PYTHON • NODE.JS • LANGCHAIN • STREAMLIT • NEXT.JS • 
            </span>
            <span className="text-black font-anton text-2xl md:text-4xl uppercase px-4">
              REACT.JS • RAG & LLMs • PYTHON • NODE.JS • LANGCHAIN • STREAMLIT • NEXT.JS • 
            </span>
          </motion.div>
        </div>

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

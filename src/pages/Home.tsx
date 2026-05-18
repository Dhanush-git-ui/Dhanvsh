import { motion } from 'framer-motion';
import Projects from '../components/Projects';
import HeroImageReveal from '../components/HeroImageReveal';
import About from '../components/about';

export default function Home() {
  return (
    <main className="flex-1">
      <HeroImageReveal /> 



      {/* Experience Section */}
      <section id="experience" className="px-6 md:px-12 py-24 bg-[#0a0a0a] border-b border-greyDark">
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

      <div id="projects">
        <Projects />
      </div>

      <div id="about">
        <About />
      </div>

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
  );
}

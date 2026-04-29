import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Experience() {
  return (
    <section className="px-6 md:px-12 py-24 bg-[#0a0a0a] border-b border-greyDark">
      <h2 className="font-anton text-5xl md:text-6xl text-pureWhite mb-12 uppercase">Experience</h2>
      <div className="flex flex-col gap-12 border-l border-greyDark ml-2 md:ml-4 pl-6 md:pl-8 relative">

       {/* === VISWAM.AI EXPERIENCE === */} 
        <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
          <div className="absolute w-3 h-3 bg-yellow-500 rounded-full -left-[7px] mt-2"></div>
          <h3 className="font-anton text-2xl text-pureWhite">AI Intern — VISWAM.AI</h3>
          <p className="text-greyLight text-sm font-mono mb-4 text-yellow-500">Summer 2025 | Swecha Programme & IIIT Hyderabad</p>
          <ul className="text-greyLight font-inter text-sm list-disc ml-4 space-y-2">
            <li>Built an AI-powered Telugu Ancient diet menu generator using structured nutrition datasets.</li>
            <li>Implemented a RAG-based assistant to handle user queries.</li>
            <li>Designed calorie-aware meal planning logic with an interactive Streamlit interface.</li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-6 ml-4">
            <a href="https://code.swecha.org/DhanushGopavaram/team-project.git" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 px-3 py-1 text-xs font-mono text-greyLight border border-greyDark rounded-full hover:text-pureWhite hover:border-pureWhite transition-colors">
              {/* GitLab SVG Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"/></svg>
              GitLab
            </a>
            <a href="https://drive.google.com/file/d/10uMJJNsCngFRqpswvtttZykjOWJi2a1O/view?usp=sharing" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-sm hover:text-pureWhite transition-colors text-greyLight border border-greyDark px-4 py-2 rounded hover:bg-greyDark">
              <ExternalLink size={16}/> Certificate
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
          <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[7px] mt-2"></div>
          <h3 className="font-anton text-2xl text-pureWhite">Web Development Intern — Freshneer Foods</h3>
          <p className="text-greyLight text-sm font-mono mb-4 text-green-500">Jan 2025 – Feb 2025</p>
          <ul className="text-greyLight font-inter text-sm list-disc ml-4 space-y-2">
            <li>Built Full stack website for freshneer.</li>
            <li>Improved performance through optimized rendering.</li>
            <li>Deployed application on Vercel ensuring reliability.</li>
          </ul>
          {/* Links for Freshneer Foods */}
          <div className="flex flex-wrap gap-4 mt-6 ml-4">
            <a href="https://drive.google.com/file/d/1ccHe7j0srbif0rFX6AO-XQ96tycP3kIV/view" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 text-sm hover:text-pureWhite transition-colors text-greyLight border border-greyDark px-4 py-2 rounded hover:bg-greyDark">
              <ExternalLink size={16}/> Certificate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { ExternalLink, Mail } from 'lucide-react';
import { Github, Linkedin } from './components/icons';

export default function ResumeApp() {
  return (
    <div className="min-h-screen bg-black text-white font-inter selection:bg-[#C1FF72] selection:text-black pb-20">
      
      {/* Print button container - hidden when printing */}
      <div className="fixed top-6 right-6 z-50 print:hidden flex flex-col items-end gap-2">
        <button 
          onClick={() => window.print()} 
          className="bg-[#C1FF72] text-black px-6 py-3 rounded-full font-anton text-xl uppercase hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(193,255,114,0.3)]"
        >
          Save as PDF
        </button>
        <span className="text-xs font-mono text-white/50 bg-black/80 px-2 py-1 rounded">
          * Enable "Background graphics" in print dialog
        </span>
      </div>

      <div className="max-w-[21cm] mx-auto min-h-[29.7cm] bg-black print:bg-black p-8 md:p-12 print:p-10 flex flex-col gap-12 print:gap-8 shadow-2xl print:shadow-none border border-white/10 mt-10 print:mt-0">
        
        {/* Header */}
        <header className="border-b-2 border-white/20 pb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h1 className="font-anton text-7xl md:text-[5.5rem] uppercase leading-[0.85] tracking-tighter mb-6">
              DHANUSH<br/><span className="text-[#C1FF72]">GOPAVARAM</span>
            </h1>
            <h2 className="font-sora text-xl md:text-2xl font-bold uppercase tracking-widest text-white/90">
              AI-Focused Software Engineer
            </h2>
          </div>
          <div className="flex flex-col gap-3 font-mono text-xs md:text-sm md:text-right text-white/60">
            <a href="mailto:dhanush@example.com" className="hover:text-[#C1FF72] flex items-center md:justify-end gap-2 transition-colors">
              <Mail size={16}/> dhanushgopavaram@example.com
            </a>
            <a href="#" className="hover:text-[#C1FF72] flex items-center md:justify-end gap-2 transition-colors">
              <Linkedin size={16}/> linkedin.com/in/dhanushgopavaram
            </a>
            <a href="https://github.com/Dhanush-git-ui" className="hover:text-[#C1FF72] flex items-center md:justify-end gap-2 transition-colors">
              <Github size={16}/> github.com/Dhanush-git-ui
            </a>
            <a href="https://dhanush-gopavaram.vercel.app/" className="hover:text-[#C1FF72] flex items-center md:justify-end gap-2 transition-colors">
              <ExternalLink size={16}/> dhanush-gopavaram.vercel.app
            </a>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 print:gap-10">
          
          {/* Left Column */}
          <div className="flex flex-col gap-12">
            
            {/* Education */}
            <section>
              <h3 className="font-anton text-3xl uppercase border-b border-white/20 pb-2 mb-6 text-[#C1FF72]">Education</h3>
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-lg leading-tight">Hyderabad Institute of Technology and Management</h4>
                <p className="font-mono text-xs text-white/60">2024 - 2027</p>
                <p className="text-sm font-semibold mt-1">B.Tech in Computer Science Engineering</p>
                <p className="font-mono text-xs text-[#C1FF72] bg-[#C1FF72]/10 inline-block px-2 py-1 rounded border border-[#C1FF72]/20 self-start mt-2 font-bold tracking-wider">
                  CGPA: 7.65
                </p>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h3 className="font-anton text-3xl uppercase border-b border-white/20 pb-2 mb-6 text-[#C1FF72]">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'RAG & LLMs', 'Python', 'Node.js', 'LangChain', 'Streamlit', 'Next.js', 'FastAPI', 'TailwindCSS'].map(skill => (
                  <span key={skill} className="border border-white/20 rounded-full px-3 py-1.5 font-mono text-xs uppercase tracking-wider hover:border-[#C1FF72] hover:bg-[#C1FF72]/5 hover:text-[#C1FF72] transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <h3 className="font-anton text-3xl uppercase border-b border-white/20 pb-2 mb-6 text-[#C1FF72]">Achievements</h3>
              <div className="flex flex-col gap-2">
                <h4 className="font-bold text-lg leading-tight uppercase tracking-wide">Campus Mantri</h4>
                <p className="font-mono text-xs text-[#C1FF72]">GeeksforGeeks</p>
                <p className="text-sm text-white/80 leading-relaxed mt-2">
                  Led coding initiatives and organized technical events promoting a problem-solving culture among students.
                </p>
              </div>
            </section>

          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-12">
            
            {/* Experience */}
            <section>
              <h3 className="font-anton text-3xl uppercase border-b border-white/20 pb-2 mb-8 text-[#C1FF72]">Experience</h3>
              <div className="flex flex-col gap-10">
                
                <div className="group relative">
                  <div className="absolute -left-4 top-2 w-1.5 h-1.5 rounded-full bg-[#C1FF72] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <h4 className="font-bold text-xl uppercase tracking-wider">AI Intern <span className="text-white/40 font-normal">| VISWAM.AI</span></h4>
                    <span className="font-mono text-xs text-[#C1FF72] border border-[#C1FF72]/20 bg-[#C1FF72]/10 px-2 py-1 rounded whitespace-nowrap">Summer 2025</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-white/80 space-y-2 text-sm leading-relaxed">
                    <li>Built an AI-powered Telugu diet generator using structured nutrition datasets.</li>
                    <li>Implemented a RAG-based assistant to handle user queries.</li>
                    <li>Designed calorie-aware meal planning logic with an interactive Streamlit interface.</li>
                  </ul>
                </div>

                <div className="group relative">
                  <div className="absolute -left-4 top-2 w-1.5 h-1.5 rounded-full bg-[#C1FF72] opacity-50 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                    <h4 className="font-bold text-xl uppercase tracking-wider">Web Dev Intern <span className="text-white/40 font-normal">| Freshneer Foods</span></h4>
                    <span className="font-mono text-xs text-[#C1FF72] border border-[#C1FF72]/20 bg-[#C1FF72]/10 px-2 py-1 rounded whitespace-nowrap">Jan - Feb 2025</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-white/80 space-y-2 text-sm leading-relaxed">
                    <li>Built reusable UI components and integrated REST APIs.</li>
                    <li>Improved performance through optimized rendering.</li>
                    <li>Deployed application on Vercel ensuring reliability and scalability.</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="font-anton text-3xl uppercase border-b border-white/20 pb-2 mb-8 text-[#C1FF72]">Selected Works</h3>
              <div className="grid grid-cols-1 gap-6">
                
                {[
                  { title: "Startup Sync", tech: "React, Gemini 2.5, Tailwind", desc: "An AI-powered platform for idea validation and structured planning." },
                  { title: "Hitam AI Chatbot", tech: "React.js, RAG, LangChain", desc: "A RAG-based chatbot for natural language queries regarding academic regulations." },
                  { title: "F1 Kinetic", tech: "FastAPI, React, Fast-F1", desc: "A real-time telemetry analysis and predictive strategy modeling platform." },
                  { title: "Learniverse AI", tech: "React, RAG, Gemini API", desc: "An intelligent learning platform utilizing RAG and YouTube transcript processing." }
                ].map(proj => (
                  <div key={proj.title} className="border border-white/20 p-5 rounded-2xl hover:border-[#C1FF72] hover:bg-white/5 transition-all group">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                      <h4 className="font-bold text-lg uppercase tracking-wider group-hover:text-[#C1FF72] transition-colors">{proj.title}</h4>
                      <span className="font-mono text-[10px] text-black bg-white px-2 py-1 rounded uppercase font-bold tracking-widest">{proj.tech}</span>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">{proj.desc}</p>
                  </div>
                ))}

              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}

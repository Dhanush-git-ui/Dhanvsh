import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl px-8 py-4 flex justify-between items-center backdrop-blur-2xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl">
      <Link to="/" className="font-anton text-2xl text-white tracking-tighter">DG.</Link>
      
      <div className="hidden md:flex gap-10 text-[11px] font-mono uppercase tracking-[0.2em] text-white/60">
        <Link to="/" className="hover:text-white transition-colors">Works</Link>
        <Link to="/about" className="hover:text-white transition-colors">About</Link>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#contact" className="hover:text-white transition-colors">Connect</a>
      </div>

      <a href="/resume.html" target="_blank" className="border border-white/20 px-5 py-2 rounded-xl text-[10px] font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all">
        Resume
      </a>
    </nav>
  );
}

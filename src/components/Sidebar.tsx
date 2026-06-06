import { Mail, MapPin } from 'lucide-react';
import { Github, Linkedin } from './icons';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-[350px] lg:w-[400px] border-r border-greyDark md:fixed md:h-screen md:overflow-y-auto p-6 md:p-10 flex flex-col gap-6 bg-bgDark z-10">
      <div className="w-24 h-24 rounded-full bg-[#111] border border-greyDark flex items-center justify-center text-4xl font-anton text-pureWhite overflow-hidden">
        DG.
      </div>
      
      <div className="flex flex-col gap-1">
        <h1 className="font-anton text-4xl text-pureWhite tracking-wide">Dhanush <br/> Gopavaram</h1>
        <div className="flex items-center gap-2 text-sm text-greyLight font-mono mt-1">
          <span>@Dhanush-git-ui</span>
          <span className="w-1 h-1 rounded-full bg-greyDark"></span>
          <span className="flex items-center gap-1"><MapPin size={14} /> India</span>
        </div>
      </div>

      <h2 className="text-xs font-bold font-inter text-pureWhite border border-greyDark px-4 py-2 rounded-full inline-block w-max bg-[#111]">
        AI Engineer | Full Stack Developer  
      </h2>

      <p className="text-sm text-greyLight font-inter leading-relaxed border-l-2 border-greyDark pl-4 italic mt-2">
        "I talk to computers more than people, and they still get confused. 
        Future AI engineer powered by caffeine and consistency."
      </p>

      <div className="flex flex-col gap-3 mt-4 pt-8 border-t border-greyDark">
        <div className="flex items-center gap-3">
          <a href="mailto:dhanushgopavaram23@gmail.com" className="flex-1 bg-pureWhite text-black font-inter font-bold text-sm text-center py-3 rounded-full hover:bg-greyLight transition-colors flex items-center justify-center gap-2">
            <Mail size={16} /> Message
          </a>
          <a href="https://github.com/Dhanush-git-ui" target="_blank" className="p-3 border border-greyDark rounded-full hover:bg-pureWhite hover:text-black transition-colors text-pureWhite">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/dhanush-gopavaram-b77914320/" target="_blank" className="p-3 border border-greyDark rounded-full hover:bg-pureWhite hover:text-black transition-colors text-pureWhite">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </aside>
  );
}

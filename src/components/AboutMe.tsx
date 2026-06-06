import React from 'react';
import { motion } from 'framer-motion';

interface AboutMeProps {
  greeting?: string;
  mainBio?: string;
  secondaryBio?: string;
  workspaceImgUrl?: string;
  portraitImgUrl?: string;
}

const Starburst = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={`text-white z-10 ${className}`} xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <line x1="50" y1="5" x2="50" y2="95" />
      <line x1="5" y1="50" x2="95" y2="50" />
      <line x1="18" y1="18" x2="82" y2="82" />
      <line x1="18" y1="82" x2="82" y2="18" />
      <line x1="33" y1="10" x2="67" y2="90" />
      <line x1="67" y1="10" x2="33" y2="90" />
      <line x1="10" y1="33" x2="90" y2="67" />
      <line x1="10" y1="67" x2="90" y2="33" />
    </g>
    <circle cx="50" cy="50" r="5" fill="currentColor" />
  </svg>
);

const AboutMe: React.FC<AboutMeProps> = ({
  mainBio = "I'm a student and aspiring AI engineer passionate about building intelligent, user-focused digital products. I enjoy working across full-stack development, AI applications, and problem-solving, turning ideas into clean, functional, and meaningful experiences.",
  secondaryBio = "I'm constantly learning, experimenting, and building with one goal in mind - to become a strong engineer who creates real impact through technology.",
  workspaceImgUrl = "/about_laptop.jpeg",
  portraitImgUrl = "/me.png"
}) => {
  return (
    <section className="bg-black text-white overflow-hidden py-32 relative border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[90%] h-[400px] pointer-events-none z-0">
          <svg viewBox="0 0 500 200" className="w-full h-full text-[#9cff66] opacity-90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M -50,80 C 100,200 350,-50 250,100 C 150,250 400,200 550,80"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-32 gap-x-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center max-w-sm pt-12"
          >
            <p className="text-[1.05rem] md:text-lg font-sans tracking-tight leading-relaxed text-white">
              {mainBio}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-end"
          >
            <Starburst className="absolute -top-16 -left-6 md:-left-12 w-32 h-32 md:w-40 md:h-40 animate-[spin_20s_linear_infinite]" />
            <div className="w-[90%] md:w-[75%] aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img src={portraitImgUrl} alt="Portrait" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative flex justify-start"
          >
            <div className="w-[95%] md:w-[85%] aspect-[4/3] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img src={workspaceImgUrl} alt="Workspace" className="w-full h-full object-cover" />
            </div>
            <Starburst className="absolute -bottom-12 -right-4 md:-right-8 w-28 h-28 md:w-36 md:h-36 animate-[spin_25s_linear_infinite_reverse]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center max-w-sm ml-auto pb-12"
          >
            <p className="text-[1.05rem] md:text-lg font-sans tracking-tight leading-relaxed text-white text-left">
              {secondaryBio}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

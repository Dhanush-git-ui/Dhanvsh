import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiArrowUpRight, FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface SocialLink {
  platform: string;
  label: string;
  url: string;
  type: "email" | "external";
  icon: React.ReactNode;
}

const ContactFooter: React.FC = () => {
  const socialLinks: SocialLink[] = [
    {
      platform: "Email",
      label: "Dhanush Gopavaram's - Email Me!",
      url: "mailto:dhanushgopavaram23@gmail.com",
      type: "email",
      icon: <FiMail />,
    },
    {
      platform: "GitHub",
      label: "Dhanush Gopavaram's -GitHub",
      url: "https://github.com/Dhanush-git-ui",
      type: "external",
      icon: <FaGithub />,
    },
    {
      platform: "LinkedIn",
      label: "Dhanush Gopavaram's - LinkedIn",
      url: "https://www.linkedin.com/in/dhanush-gopavarm-b77914320/",
      type: "external",
      icon: <FaLinkedinIn />,
    },
  ];

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const marqueeItems = [
    "Contact",
    "Collaborate",
    "Create",
    "Design",
    "Build",
    "Connect",
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-[#050505] text-white font-sans">
      {/* Background Glow Effects */}
      <div className="pointer-events-none absolute left-[-150px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#5c54ed]/25 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-160px] bottom-[120px] h-[360px] w-[360px] rounded-full bg-[#b2f08a]/20 blur-[130px]" />

      {/* Top Marquee */}
      <div className="relative w-full overflow-hidden border-y border-white/10 py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center whitespace-nowrap"
        >
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center">
              {[...Array(12)].map((_, index) => (
                <span
                  key={`${groupIndex}-${index}`}
                  className="mx-5 text-[1.1rem] font-semibold uppercase tracking-[0.25em] text-white/80 md:text-[1.35rem]"
                >
                  {marqueeItems[index % marqueeItems.length]}{" "}
                  <span className="text-[#b2f08a]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Main Contact Section */}
      <div className="relative mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
        <div className="mb-16 max-w-[850px]">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-[#b2f08a]"
          >
            Available for opportunities
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-[3rem] font-black leading-[0.95] tracking-[-0.06em] text-white md:text-[5.5rem]"
          >
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-[#5c54ed] via-[#8f88ff] to-[#b2f08a] bg-clip-text text-transparent">
              meaningful.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-7 max-w-[650px] text-base leading-7 text-white/60 md:text-lg"
          >
            Have a project, collaboration, or opportunity in mind? Reach out
            and let&apos;s turn the idea into something clean, creative, and
            impactful.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="grid gap-5">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.platform}
              href={link.url}
              target={link.type === "external" ? "_blank" : undefined}
              rel={link.type === "external" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group flex items-center justify-between gap-5 rounded-3xl border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-md transition-all duration-300 hover:border-[#b2f08a]/70 hover:bg-[#b2f08a]/10 md:px-7 md:py-6"
            >
              <div className="flex min-w-0 items-center gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-xl text-[#b2f08a] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#b2f08a] group-hover:text-black">
                  {link.icon}
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                    {link.platform}
                  </p>

                  <p className="truncate text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[#b2f08a] md:text-2xl">
                    {link.label}
                  </p>
                </div>
              </div>

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 group-hover:rotate-45 group-hover:border-[#b2f08a] group-hover:bg-[#b2f08a] group-hover:text-black">
                <FiArrowUpRight />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Green Marquee */}
      <div className="relative w-full overflow-hidden bg-[#b2f08a] py-5">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center whitespace-nowrap"
        >
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex items-center">
              {[...Array(10)].map((_, index) => (
                <span
                  key={`${groupIndex}-${index}`}
                  className="mx-5 text-[1.4rem] font-black uppercase tracking-[-0.04em] text-black md:text-[2.2rem]"
                >
                  More Projects Incoming ✺
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-12 px-6 py-16 md:flex-row md:px-10 md:py-20">
        <div className="text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Portfolio
          </p>
          <p className="mt-3 text-sm text-white/50">
            Designed and developed with care.
          </p>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.96 }}
          className="group flex items-center gap-3 rounded-full border border-[#b2f08a]/60 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white transition-all duration-300 hover:bg-[#b2f08a] hover:text-black"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#b2f08a] text-black transition-all duration-300 group-hover:bg-black group-hover:text-[#b2f08a]">
            <FiArrowUp />
          </span>
          Back to top
        </motion.button>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.95, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="select-none text-[4.5rem] font-black leading-none tracking-[-0.12em] text-white md:text-[7rem]"
        >
          DG.
        </motion.div>
      </div>
    </footer>
  );
};

export default ContactFooter;
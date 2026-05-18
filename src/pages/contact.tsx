import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.6 5 5 0 0 0-.12-3.5s-1.13-.36-3.7 1.36a12.8 12.8 0 0 0-6.8 0C6.13 3.6 5 4 5 4a5 5 0 0 0-.12 3.5A5.2 5.2 0 0 0 3.5 11.1c0 5.21 3 6.4 6 6.75a4.8 4.8 0 0 0-1 3.24v4"/>
    <path d="M11 21c-3.1 1-5-1-5-1"/>
  </svg>
);

const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const contactLinks = [
  {
    title: "Email",
    value: "dhanushgopavaram23@gmail.com",
    href: "mailto:dhanushgopavaram23@gmail.com",
    icon: Mail,
    label: "01",
    note: "Projects & collabs",
  },
  {
    title: "LinkedIn",
    value: "/in/dhanush-gopavaram",
    href: "https://www.linkedin.com/in/dhanush-gopavarm-b77914320/",
    icon: Linkedin,
    label: "02",
    note: "Professional network",
  },
  {
    title: "GitHub",
    value: "Dhanush-git-ui",
    href: "https://github.com/Dhanush-git-ui",
    icon: Github,
    label: "03",
    note: "Code & experiments",
  },
  {
    title: "Instagram",
    value: "@dhanush_gopavaram",
    href: "https://www.instagram.com/dhanush_gopavaram/",
    icon: Instagram,
    label: "04",
    note: "Behind the scenes",
  },
];

function Ticker() {
  const items = ["Open to freelance", "Available for internships", "Remote-friendly", "India-based", "Web · AI · Design"];
  const repeated = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-t border-b border-[#222] py-3">
      <motion.div
        animate={{ x: ["0%", "-33.33%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex gap-0 whitespace-nowrap"
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-6 px-8 text-xs font-medium uppercase tracking-[0.3em] text-[#555]">
            {item}
            <span className="h-1 w-1 rounded-full bg-[#444] flex-shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function ConnectPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata" }) + " IST");
    };
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <main
      style={{ fontFamily: "'DM Mono', 'Courier New', monospace" }}
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-[#f0f0f0]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Bebas+Neue&display=swap');
        
        .bebas { font-family: 'Bebas Neue', sans-serif; }

        .contact-row {
          border-bottom: 1px solid #222;
          transition: background 0.22s ease, border-color 0.22s ease;
        }
        .contact-row:hover {
          background: #181818;
        }
        .contact-row:hover .row-title {
          color: #ffffff !important;
        }
        .contact-row:hover .row-label {
          color: #888 !important;
        }
        .contact-row:hover .row-value {
          color: #aaa !important;
        }
        .contact-row:hover .row-note {
          color: #666 !important;
        }
        .contact-row:hover .row-icon {
          color: #fff !important;
        }
        .contact-row:hover .row-arrow {
          transform: translate(3px, -3px);
          color: #fff !important;
        }
        .contact-row:hover .row-border {
          border-color: #333 !important;
        }
        .row-arrow {
          transition: transform 0.2s ease, color 0.2s ease;
        }
        .say-hello-btn {
          background: #f0f0f0;
          color: #0a0a0a;
          transition: background 0.2s ease, color 0.2s ease;
          letter-spacing: 0.18em;
        }
        .say-hello-btn:hover {
          background: #ffffff;
          color: #000000;
        }
        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.04;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
      `}</style>

      {/* Noise overlay */}
      <div className="noise" />

      {/* Header Bar */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 flex items-center justify-between border-b border-[#222] px-6 py-4 md:px-12"
      >
        <span className="bebas text-xl tracking-widest text-[#f0f0f0]">Dhanush.G</span>
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.3em] text-[#888]">
          <span className="hidden sm:block">Portfolio · 2025</span>
          {time && (
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f0f0f0] animate-pulse" />
              {time}
            </span>
          )}
        </div>
      </motion.header>

      <div className="relative z-10">
        {/* Hero */}
        <section className="px-6 pt-16 pb-10 md:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-[10px] uppercase tracking-[0.45em] text-[#888]"
          >
            — Contact & Connect
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bebas text-[22vw] leading-[0.85] tracking-tight text-[#f0f0f0] md:text-[15vw] lg:text-[12vw]"
          >
            Let's Talk
          </motion.h1>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="max-w-[520px] text-sm leading-[1.85] text-[#888]"
            >
              Got a project, idea, or just want to talk shop? I work on web
              products, AI-powered tools, and frontend systems that actually feel
              like something. If it's interesting, I'm in.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#888]"
            >
              <MapPin className="h-3 w-3 text-[#888]" />
              <span>India · Remote</span>
            </motion.div>
          </div>
        </section>

        {/* CTA row */}
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-3 border-t border-[#222] px-6 py-6 md:px-12"
        >
          <a
            href="mailto:dhanushgopavaram23@gmail.com"
            className="say-hello-btn inline-flex items-center gap-3 px-8 py-3.5 text-[11px] font-medium uppercase rounded-none"
          >
            Say Hello
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.section>

        {/* Ticker */}
        <Ticker />

        {/* Contact Rows */}
        <section className="border-t border-[#222]">
          {contactLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.6 + i * 0.08, ease: "easeOut" }}
                className="contact-row flex items-center gap-4 px-6 py-6 md:px-12 md:py-7 cursor-pointer"
              >
                {/* Label */}
                <span className="row-label bebas w-10 text-2xl text-[#444] flex-shrink-0">
                  {item.label}
                </span>

                {/* Divider */}
                <span className="row-border h-8 w-px border-l border-[#333] flex-shrink-0" />

                {/* Icon */}
                <span className="row-icon flex-shrink-0 text-[#666]">
                  <Icon size={18} />
                </span>

                {/* Title */}
                <span className="row-title bebas text-2xl md:text-3xl flex-shrink-0 text-[#f0f0f0]">
                  {item.title}
                </span>

                {/* Value */}
                <span className="row-value ml-4 hidden text-xs tracking-wide text-[#555] sm:block truncate">
                  {item.value}
                </span>

                {/* Spacer */}
                <span className="flex-1" />

                {/* Note */}
                <span className="row-note hidden text-[10px] uppercase tracking-[0.3em] text-[#444] md:block">
                  {item.note}
                </span>

                {/* Arrow */}
                <ArrowUpRight className="row-arrow h-5 w-5 flex-shrink-0 text-[#444] ml-4" />
              </motion.a>
            );
          })}
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col gap-3 border-t border-[#222] px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-12"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#aaa]">
            © 2025 Dhanush Gopavaram
          </p>
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#aaa]">
            Designed & built by me. No templates.
          </p>
        </motion.footer>
      </div>
    </main>
  );
}
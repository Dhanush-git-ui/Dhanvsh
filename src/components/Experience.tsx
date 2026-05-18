import { motion } from "framer-motion";
import {
  ExternalLink,
  Globe,
  Sparkles,
  Brain,
  Code2,
  Rocket,
  AlertTriangle,
  CheckCircle2,
  Link as LinkIcon,
} from "lucide-react";

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.6 5 5 0 0 0-.12-3.5s-1.13-.36-3.7 1.36a12.8 12.8 0 0 0-6.8 0C6.13 3.6 5 4 5 4a5 5 0 0 0-.12 3.5A5.2 5.2 0 0 0 3.5 11.1c0 5.21 3 6.4 6 6.75a4.8 4.8 0 0 0-1 3.24v4"/>
    <path d="M11 21c-3.1 1-5-1-5-1"/>
  </svg>
);

const experiences = [
  {
    role: "AI Intern",
    company: "VISWAM.AI",
    period: "Summer 2025",
    program: "Swecha Programme & IIIT Hyderabad",
    color: "yellow",
    icon: Brain,

    description:
      "Worked on an AI-powered Telugu diet assistant focused on making nutrition guidance more accessible in a regional language. The project combined structured nutrition data, retrieval-based responses, and a simple interface to help users explore calorie-aware meal suggestions.",

    points: [
      "Built a Telugu diet generator using structured nutrition and meal-planning datasets.",
      "Implemented a RAG-based assistant to retrieve relevant diet information for user queries.",
      "Designed calorie-aware meal planning logic for more personalized food suggestions.",
      "Created an interactive Streamlit interface to make the assistant easier to test and use.",
    ],

    challenges: [
      "Handling Telugu language inputs was challenging because regional-language data is less structured compared to English datasets.",
      "Designing useful diet responses required organizing nutrition data properly instead of directly depending on random AI output.",
      "Making the RAG assistant return relevant answers took multiple iterations in data formatting, retrieval flow, and response structure.",
      "Balancing simple UI design with AI functionality was difficult because the project needed to be understandable for normal users, not only developers.",
    ],

    tags: [
      "AI",
      "RAG",
      "LLM",
      "Telugu NLP",
      "Streamlit",
      "Python",
      "Nutrition Data",
    ],

    links: [
      {
        label: "GitHub",
        href: "https://github.com/Dhanushgopavaram-git-ui/telugu-llm",
        icon: Github,
      },
      {
        label: "GitLab",
        href: "https://code.swecha.org/DhanushGopavaram/team-project",
        icon: Code2,
      },
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/10uMJJNsCngFRqpswvtttZykjOWJi2a1O/view",
        icon: ExternalLink,
      },
    ],
  },

  {
    role: "Web Development Intern",
    company: "Freshneer Foods",
    period: "Jan 2025 – Feb 2025",
    program: "Frontend Development & Deployment",
    color: "green",
    icon: Rocket,

    description:
      "Contributed to a web application by building reusable frontend components, connecting API-driven data, and improving the overall user experience. The work focused on creating a clean, responsive, and deployable product interface.",

    points: [
      "Developed reusable UI components to keep the frontend consistent and maintainable.",
      "Integrated REST APIs to connect the interface with dynamic application data.",
      "Improved rendering and layout structure for smoother user interaction.",
      "Deployed the application on Vercel and tested it for reliability across devices.",
    ],

    challenges: [
      "Maintaining consistent UI spacing and layout across different screen sizes was one of the main frontend challenges.",
      "API integration required understanding how frontend components should handle dynamic data, loading states, and possible errors.",
      "Optimizing rendering was important because small layout issues can affect the user experience on real devices.",
      "Deployment taught me how production builds can behave differently from local development, especially with routing and environment setup.",
    ],

    tags: [
      "React",
      "REST API",
      "Vercel",
      "Frontend",
      "Responsive UI",
      "Deployment",
    ],

    links: [
      {
        label: "Live Project",
        href: "https://freshflow-hub.vercel.app/",
        icon: Globe,
      },
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/1ccHe7j0srbif0rFX6AO-XQ96tycP3kIV/view",
        icon: ExternalLink,
      },
    ],
  },
];

const colorClasses = {
  yellow: {
    dot: "bg-yellow-400",
    text: "text-yellow-400",
    border: "hover:border-yellow-400/60",
    glow: "group-hover:shadow-yellow-500/10",
    bg: "bg-yellow-400/10",
    softBorder: "border-yellow-400/20",
  },
  green: {
    dot: "bg-green-400",
    text: "text-green-400",
    border: "hover:border-green-400/60",
    glow: "group-hover:shadow-green-500/10",
    bg: "bg-green-400/10",
    softBorder: "border-green-400/20",
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 md:px-12 py-24 bg-[#0a0a0a] border-b border-greyDark"
    >
      {/* Background glow */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Heading */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-14"
      >
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-yellow-400" size={22} />
          <p className="font-mono text-sm text-greyLight uppercase tracking-[0.35em]">
            Real work. Real learning.
          </p>
        </div>

        <h2 className="font-anton text-5xl md:text-7xl text-pureWhite uppercase leading-none">
          Experience
        </h2>

        <p className="max-w-3xl mt-5 text-greyLight font-inter text-sm md:text-base leading-relaxed">
          Internships where I worked on practical AI and web development projects —
          from building a Telugu AI diet assistant to developing responsive frontend
          interfaces and deploying real applications.
        </p>

        <p className="max-w-3xl mt-3 text-greyLight/80 font-inter text-xs md:text-sm leading-relaxed">
          Each experience includes the work I contributed, the challenges I faced,
          and project links for better understanding of the implementation.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative z-10 flex flex-col gap-10 border-l border-greyDark ml-2 md:ml-4 pl-6 md:pl-10">
        {experiences.map((exp, index) => {
          const Icon = exp.icon;
          const colors = colorClasses[exp.color as keyof typeof colorClasses];

          return (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative rounded-2xl border border-greyDark bg-[#111111]/80 backdrop-blur-sm p-6 md:p-8 transition-all duration-300 ${colors.border} hover:-translate-y-1 hover:shadow-2xl ${colors.glow}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute w-4 h-4 ${colors.dot} rounded-full -left-[35px] md:-left-[49px] top-8 shadow-[0_0_20px_currentColor]`}
              />

              {/* Top content */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-6">
                <div>
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.text} font-mono text-xs mb-4`}
                  >
                    <Icon size={14} />
                    {exp.period}
                  </div>

                  <h3 className="font-anton text-3xl md:text-4xl text-pureWhite uppercase leading-tight">
                    {exp.role}
                  </h3>

                  <p className={`font-mono text-sm md:text-base mt-2 ${colors.text}`}>
                    {exp.company}
                  </p>

                  <p className="text-greyLight text-xs md:text-sm font-mono mt-1">
                    {exp.program}
                  </p>
                </div>

                <div className="hidden lg:flex w-14 h-14 rounded-2xl border border-greyDark items-center justify-center bg-[#0a0a0a] group-hover:scale-105 transition-transform">
                  <Icon className={colors.text} size={26} />
                </div>
              </div>

              {/* Description */}
              <p className="text-greyLight font-inter text-sm md:text-base leading-relaxed max-w-4xl mb-7">
                {exp.description}
              </p>

              {/* Contributions */}
              <div className="mb-7">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 size={16} className={colors.text} />
                  <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-pureWhite">
                    Key Contributions
                  </h4>
                </div>

                <ul className="grid md:grid-cols-2 gap-3">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-greyLight font-inter text-sm leading-relaxed"
                    >
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div
                className={`mb-7 rounded-2xl border ${colors.softBorder} bg-[#0a0a0a]/60 p-5`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle size={16} className={colors.text} />
                  <h4 className="font-mono text-xs uppercase tracking-[0.25em] text-pureWhite">
                    Challenges I Faced
                  </h4>
                </div>

                <ul className="space-y-3">
                  {exp.challenges.map((challenge, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-greyLight font-inter text-sm leading-relaxed"
                    >
                      <span className={`${colors.text} font-mono shrink-0`}>
                        0{i + 1}
                      </span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {exp.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full border border-greyDark bg-[#0a0a0a] text-greyLight text-xs font-mono hover:text-pureWhite transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link note */}
              <div className="flex items-start gap-3 mb-5 rounded-xl border border-greyDark bg-[#0a0a0a]/70 px-4 py-3">
                <LinkIcon size={16} className={`${colors.text} mt-0.5 shrink-0`} />
                <p className="text-greyLight/90 text-xs md:text-sm font-inter leading-relaxed">
                  For a better understanding of the implementation, project structure,
                  and proof of work, you can explore the links below.
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {exp.links.map((link, i) => {
                  const LinkIcon = link.icon;

                  return (
                    <a
                      key={i}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-greyLight border border-greyDark px-4 py-2.5 rounded-xl hover:bg-pureWhite hover:text-[#0a0a0a] hover:border-pureWhite transition-all duration-300 font-mono"
                    >
                      <LinkIcon size={16} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
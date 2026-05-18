import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Brain,
  AlertTriangle,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.39-3.6 5 5 0 0 0-.12-3.5s-1.13-.36-3.7 1.36a12.8 12.8 0 0 0-6.8 0C6.13 3.6 5 4 5 4a5 5 0 0 0-.12 3.5A5.2 5.2 0 0 0 3.5 11.1c0 5.21 3 6.4 6 6.75a4.8 4.8 0 0 0-1 3.24v4"/>
    <path d="M11 21c-3.1 1-5-1-5-1"/>
  </svg>
);

interface Project {
  name: string;
  subtitle: string;
  image: string;
  live?: string;
  github: string;
  category: string;
  description: string;
  about: string;
  tech: string[];
  highlights: string[];
  challenges: string[];
  accent?: string;
  futureScope?: {
    title: string;
    items: string[];
  }[];
}

const projects: Project[] = [
    {
    name: "Startupsync",
    subtitle: "AI-Powered Startup Workspace",
    image: "/startupsync.png",
    live: "https://startup-sync-eight.vercel.app/",
    github: "https://github.com/Dhanush-git-ui/StartUpSync2.0.git",
    category: "Startup Tool / AI Productivity",

    description:
      "StartupSync is an AI-powered startup companion web application built to help founders plan, organize, and make better decisions during their startup journey. It works like a digital AI co-founder, allowing users to generate startup-focused guidance, explore business ideas, create structured outputs, and stay updated with relevant Indian business news.",

    about:
      "The platform includes a landing page, dashboard, AI Agent, Chat Assistant, Google OAuth authentication, startup domain selection, and AI-generated outputs such as pitch decks, market analysis, go-to-market strategies, product roadmaps, task plans, and financial models.",

    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "Radix UI",
      "Google Gemini 1.5 Flash",
      "Google OAuth",
      "TanStack React Query",
      "NewsAPI",
      "Vercel",
    ],

    highlights: [
      "Built an AI-powered startup workspace with landing page and dashboard experience.",
      "Implemented an AI Agent for generating structured startup outputs based on selected domains.",
      "Added a Chat Assistant for conversational startup guidance using Gemini 1.5 Flash.",
      "Integrated Indian business news with category filtering, refresh support, caching, and fallback data.",
      "Added Google OAuth authentication with local storage based session persistence.",
    ],

    challenges: [
      "Converting a broad startup-support idea into a clear and usable product experience was challenging.",
      "Making AI responses startup-specific required domain selection, output format validation, and structured prompts.",
      "Handling external APIs such as Gemini, NewsAPI, and Google OAuth required error handling and fallback logic.",
      "Designing a polished responsive interface was important because the project needed to feel like a real SaaS product.",
      "Managing authentication state on the client side required local storage session persistence and logout handling.",
    ],

    futureScope: [
      {
        title: "Deeper AI Startup Advisory",
        items: [
          "More advanced startup suggestions based on domain, stage, and business goal.",
          "Better structured outputs for pitch decks, market analysis, roadmaps, and financial planning.",
          "Richer decision workflows where AI compares options, identifies risks, and suggests next steps.",
        ],
      },
      {
        title: "Execution & Roadmap Layer",
        items: [
          "Roadmap and task execution layer to convert AI-generated plans into trackable startup tasks.",
          "Milestones, deadlines, progress updates, and execution boards.",
          "Saved AI outputs that can become actionable founder workflows.",
        ],
      },
      {
        title: "Founder Intelligence Dashboard",
        items: [
          "Live intelligence feeds with expanded news, trends, category coverage, and relevance scoring.",
          "Founder productivity dashboard with metrics, charts, growth tracking, and saved insights.",
          "Insight history to review previous AI recommendations and startup planning decisions.",
        ],
      },
    ],
  },
    {
    name: "Learniverse",
    subtitle: "AI Learning Platform for DSA and Mathematics",
    image: "/learniverse.png",
    live: "https://learniverse-ai.vercel.app/",
    github: "https://github.com/Dhanush-git-ui/learniverse-ai.git",
    category: "AI Learning / EdTech",

    description:
      "LearnIverse AI is an interactive educational web application built to help students learn Mathematics, Data Structures, and Algorithms through structured practice and AI-style conversational guidance. The platform combines topic-based learning, step-by-step explanations, smart hints, progress tracking, and dual-perspective AI support.",

    about:
      "The project uses a teacher-and-peer learning concept, where the teacher-style AI provides accurate and structured explanations, while the peer-style AI explains the same concept in simpler and more relatable language. Users can browse topics, solve questions, use hints, submit answers, receive feedback, track progress, and interact with a conversation panel.",

    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "shadcn/ui",
      "Radix UI",
      "Lucide React",
      "TanStack React Query",
      "React Hook Form",
      "Zod",
      "ESLint",
    ],

    highlights: [
      "Built an interactive learning platform for Mathematics, Data Structures, and Algorithms.",
      "Created a topic-based learning flow with questions, hints, solutions, difficulty levels, and progress tracking.",
      "Designed a dual-perspective AI learning concept with teacher-style and peer-style explanations.",
      "Implemented a conversation panel that simulates AI responses using keyword-based logic and stored solutions.",
      "Built responsive pages for Home, Topics, Topic Detail, About, and Not Found routes.",
    ],

    challenges: [
      "Designing two explanation styles was challenging because the teacher response needed to be accurate while the peer response needed to be simpler and relatable.",
      "Simulating AI behavior without a real backend required keyword matching, stored solutions, answer similarity, and frontend-generated responses.",
      "Evaluating user answers was difficult because correct answers can be written in many different ways.",
      "Managing structured educational content required organizing topics, questions, hints, solutions, categories, slugs, and difficulty levels clearly.",
      "Balancing technical accuracy with beginner-friendly explanations was important for topics like algorithms, calculus, graph theory, and linear algebra.",
    ],

    futureScope: [
      {
        title: "AI Study Buddy",
        items: [
          "Personalized study buddy that gives learning support based on progress, weak areas, and topic history.",
          "AI-generated revision plans and next-topic recommendations.",
          "Mistake explanation system that helps students understand why an answer is wrong.",
        ],
      },
      {
        title: "One-Stop Resource Hub",
        items: [
          "Curated YouTube videos for each topic.",
          "Research papers, blogs, documentation links, and topic references.",
          "Organized learning paths so students do not need to search across many platforms.",
        ],
      },
      {
        title: "Revision & Practice Tools",
        items: [
          "Short quizzes after each topic for quick concept checks and timed revision.",
          "Quick notes and flashcards for formulas, algorithm steps, definitions, and complexity notes.",
          "Learning analytics dashboard with revision tracking, progress history, and topic mastery.",
        ],
      },
    ],
  },
  {
    name: "College Regulations",
    subtitle: "HITAM Regulations RAG Chatbot",
    image: "/hitam.png",
    live: "https://hitam-regulations-char-bot-frontend.vercel.app/",
    github: "https://github.com/Dhanush-git-ui/Hitam-Regulations-CharBot.git",
    category: "RAG Chatbot / AI Assistant",

    description:
      "HITAM Regulations Chatbot is a full-stack Retrieval-Augmented Generation chatbot built to help HITAM students and faculty query official college regulations, policies, attendance rules, credit requirements, and academic progression guidelines using natural-language questions.",

    about:
      "The project solves the problem of manually searching through long academic regulation documents by allowing users to ask questions and receive answers based on uploaded official documents. The chatbot retrieves relevant document chunks using semantic search and generates grounded answers from the retrieved context.",

    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "REST API",
      "RAG",
      "Ollama",
      "nomic-embed-text",
      "OpenRouter",
      "PDF Extraction",
      "DOCX Extraction",
      "Mammoth",
      "Python Helper Script",
      "Vector Store",
      "Cosine Similarity",
      "Keyword Search",
    ],

    highlights: [
      "Built a full-stack RAG chatbot for querying HITAM academic regulation documents.",
      "Implemented document ingestion for PDF, DOCX, and TXT files.",
      "Generated embeddings using Ollama and stored document chunks in a JSON-based vector store.",
      "Implemented semantic search using cosine similarity to retrieve relevant regulation content.",
      "Added keyword fallback search to keep the chatbot usable even when embeddings are unavailable.",
      "Used a strict context-based prompt to reduce hallucination and keep answers grounded in official documents.",
    ],

    challenges: [
      "Preventing hallucination was challenging because the chatbot needed to answer only from official regulation documents.",
      "Handling embedding service failures required adding keyword-based fallback search.",
      "Extracting clean text from PDF, DOCX, and TXT files was difficult because academic documents can have inconsistent formatting.",
      "Chunking documents properly was important because small chunks lose context while large chunks make retrieval noisy.",
      "Keeping the frontend responsive during backend or model delays required typing states, error handling, health checks, and toast notifications.",
    ],

    futureScope: [
      {
        title: "Trust & Source Accuracy",
        items: [
          "Answer citations showing the exact document and section used for each response.",
          "Document preview with highlighted source paragraphs used in the answer.",
          "Better confidence scoring so users can understand how reliable each answer is.",
        ],
      },
      {
        title: "Admin & Document Management",
        items: [
          "Admin dashboard for uploading, replacing, and managing regulation documents.",
          "Version control for regulation documents to track policy updates.",
          "Role-based access for students, faculty, and administrators.",
        ],
      },
      {
        title: "Scalability & Analytics",
        items: [
          "Production vector database support for faster and more scalable retrieval.",
          "Multilingual query support for students who prefer Telugu or Hindi.",
          "Analytics dashboard for common questions, frequently searched policies, and unanswered queries.",
        ],
      },
    ],
  },
  {
    name: "Formula 1 Analytics",
    subtitle: "VORTEX AI — 2026 Formula 1 Predictive Analytics Platform",
    image: "/f1.png",
    live: "https://f1vd.vercel.app/",
    github: "https://github.com/Dhanush-git-ui/F1.git",
    category: "AI / ML + Data Analytics",

    description:
      "VORTEX AI is a Formula 1-focused analytics and visualization platform built around the 2026 F1 technical era. It presents an interactive motorsport dashboard with driver standings, constructor profiles, race calendar data, technical regulations, circuit insights, telemetry-style performance indicators, and AI/ML-driven strategy concepts.",

    about:
      "The project is designed to showcase how motorsport data, frontend visualization, and machine learning concepts can come together in a futuristic race intelligence dashboard. It focuses on presenting F1 performance data, 2026 regulation changes, telemetry-style metrics, and predictive strategy ideas in a modern web interface.",

    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Three.js",
      "GSAP",
      "Lucide React",
      "Python",
      "FastAPI",
      "Uvicorn",
      "Fast-F1",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest Concept",
      "Telemetry Processing",
    ],

    highlights: [
      "Built a futuristic Formula 1 analytics dashboard for the 2026 technical regulation era.",
      "Created sections for constructor profiles, driver cards, leaderboard, race calendar, circuit details, regulations, and telemetry HUD.",
      "Integrated frontend data fetching from FastAPI endpoints for driver standings, calendar data, and regulation information.",
      "Designed a premium F1-inspired interface using Tailwind CSS, glassmorphism panels, glow effects, and a Three.js particle background.",
      "Explored AI/ML concepts such as race strategy prediction, tire degradation analysis, overtake probability, and driver consistency scoring.",
    ],

    challenges: [
      "Combining static frontend datasets with dynamic backend API data required fallback handling and careful state management.",
      "Coordinating React frontend components with FastAPI endpoints was challenging because dynamic sections depend on backend availability.",
      "Working with mock telemetry showed the difficulty of moving from sample data to real Fast-F1 telemetry streams.",
      "Turning AI/ML concepts into production-ready models would require trained datasets, inference endpoints, validation metrics, and model tracking.",
      "Maintaining UI performance with Three.js particles, animations, blur effects, glassmorphism, and responsive layouts required careful design decisions.",
    ],

    futureScope: [
      {
        title: "True Predictive Engine",
        items: [
          "Trainable pit window prediction model.",
          "Tire degradation and stint-length estimator.",
          "Overtake probability model by track segment and tire delta.",
          "Model registry, versioning, and experiment tracking using MLflow or Weights & Biases.",
        ],
      },
      {
        title: "Interactive Circuit Intelligence",
        items: [
          "Corner-by-corner breakdown with entry speed, apex speed, and exit gain/loss.",
          "Overtake hot zones and braking risk map.",
          "Dynamic weather and tire recommendation per circuit segment.",
          "Track-evolution simulation across practice, qualifying, and race sessions.",
        ],
      },
      {
        title: "Competitive Analysis Layer",
        items: [
          "Constructor development trend charts showing pace gain per race.",
          "Driver consistency index, qualifying delta, and racecraft score.",
          "Team strategy aggressiveness index based on undercut and overcut success rates.",
          "Reliability tracker covering DNF causes and power-unit component lifecycle.",
        ],
      },
    ],
  },
];

const getAccentClasses = () => ({
  border: "hover:border-red-500/60",
  text: "text-red-500",
  bg: "bg-red-500/10",
  dot: "bg-red-500",
  shadow: "hover:shadow-[0_0_45px_rgba(239,68,68,0.16)]",
});

export default function ProjectsPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const activeProject =
    hoveredIndex !== null ? projects[hoveredIndex] : projects[selectedIndex];

  const colors = getAccentClasses();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] px-4 py-28 text-white select-none md:px-10 md:py-36">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.12),transparent_34%)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),#050505_78%)]" />
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ y: 35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="mb-4 flex items-center gap-3">
            <Sparkles size={20} className="text-red-500" />
            <p className="font-mono text-xs uppercase tracking-[0.45em] text-white/55 md:text-sm">
              Selected Builds
            </p>
          </div>

          <h1
            className="text-6xl font-black uppercase leading-[0.85] tracking-[-0.04em] text-white md:text-8xl lg:text-9xl"
            style={{
              fontFamily:
                "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
            }}
          >
            Projects
          </h1>

          <p className="mt-6 max-w-3xl font-inter text-sm leading-relaxed text-white/60 md:text-base">
            A collection of AI, data, and web projects where I focused on
            solving practical problems, building clean interfaces, and learning
            how real products are structured beyond just writing code.
          </p>
        </motion.div>

        {/* Project Thumbnails */}
        <div className="mb-12 flex flex-wrap items-start justify-center gap-5 md:gap-8">
          {projects.map((project, index) => {
            const isActive =
              hoveredIndex === index ||
              (hoveredIndex === null && selectedIndex === index);

            return (
              <motion.button
                key={project.name}
                type="button"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedIndex(index)}
                className="group flex flex-col items-center outline-none"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 22,
                }}
              >
                <div
                  className={`relative h-[74px] w-[132px] overflow-hidden rounded-xl border transition-all duration-300 md:h-[92px] md:w-[168px] ${
                    isActive
                      ? "border-red-500 shadow-[0_0_35px_rgba(239,68,68,0.35)]"
                      : "border-white/10"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className={`h-full w-full object-cover transition-all duration-500 ${
                      isActive
                        ? "scale-105 grayscale-0"
                        : "grayscale contrast-125 brightness-75"
                    }`}
                  />

                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="mt-4 flex flex-col items-center">
                  <span
                    className={`text-[13px] tracking-[0.35em] transition-colors duration-300 ${
                      isActive ? "text-red-500" : "text-white/45"
                    }`}
                    style={{
                      fontFamily: "'Courier New', Courier, monospace",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`mt-3 h-1.5 w-1.5 rounded-full bg-red-500 transition-all duration-300 ${
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Project Title */}
        <div className="mb-12 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.name}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-red-500 md:text-sm">
                {activeProject.category}
              </p>

              <h2
                className="text-5xl font-black uppercase leading-[0.85] tracking-[-0.04em] text-white md:text-7xl lg:text-8xl"
                style={{
                  fontFamily:
                    "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",
                }}
              >
                {activeProject.name}
              </h2>

              <p className="mx-auto mt-5 max-w-3xl font-mono text-sm text-white/55 md:text-base">
                {activeProject.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Details Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.name + "-details"}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -35 }}
            transition={{ duration: 0.45 }}
            className={`rounded-3xl border border-white/10 bg-[#101010]/85 p-5 backdrop-blur-md transition-all duration-300 md:p-8 ${colors.border} ${colors.shadow}`}
          >
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              {/* Left */}
              <div>
                <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-black">
                  <img
                    src={activeProject.image}
                    alt={activeProject.name}
                    className="h-[230px] w-full object-cover grayscale-[20%] transition-all duration-500 hover:scale-[1.02] hover:grayscale-0 md:h-[360px]"
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-red-500/40 bg-red-500 px-4 py-2.5 font-mono text-sm text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 font-mono text-sm text-white/70 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Right */}
              <div>
                <div className="mb-7">
                  <div className="mb-3 flex items-center gap-2">
                    <Brain size={17} className="text-red-500" />
                    <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-white">
                      What is this project?
                    </h3>
                  </div>

                  <p className="font-inter text-sm leading-relaxed text-white/65 md:text-base">
                    {activeProject.description}
                  </p>
                </div>

                <div className="mb-7">
                  <div className="mb-3 flex items-center gap-2">
                    <Layers size={17} className="text-red-500" />
                    <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-white">
                      Project Purpose
                    </h3>
                  </div>

                  <p className="font-inter text-sm leading-relaxed text-white/65 md:text-base">
                    {activeProject.about}
                  </p>
                </div>

                <div className="mb-7">
                  <div className="mb-3 flex items-center gap-2">
                    <Code2 size={17} className="text-red-500" />
                    <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-white">
                      Tech Skills Used
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 font-mono text-xs text-white/60 transition-colors hover:border-red-500/50 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Sections */}
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {/* Highlights */}
              <div className="rounded-2xl border border-white/10 bg-black/35 p-5">
                <div className="mb-4 flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-red-500" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-white">
                    Key Work Done
                  </h3>
                </div>

                <ul className="space-y-3">
                  {activeProject.highlights.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 font-inter text-sm leading-relaxed text-white/62"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.04] p-5">
                <div className="mb-4 flex items-center gap-2">
                  <AlertTriangle size={17} className="text-red-500" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.28em] text-white">
                    Challenges Faced
                  </h3>
                </div>

                <ul className="space-y-3">
                  {activeProject.challenges.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 font-inter text-sm leading-relaxed text-white/62"
                    >
                      <span className="shrink-0 font-mono text-red-500">
                        0{index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Link Note */}
            <div className="mt-7 rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="font-inter text-xs leading-relaxed text-white/50 md:text-sm">
                For better understanding, explore the live demo and GitHub
                repository. The links show the actual implementation, structure,
                and deployment proof behind this project.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Hint */}
        <div className="relative z-20 mt-10 text-center">
          <p
            className="text-[11px] uppercase tracking-[0.55em] text-white/45 md:text-sm"
            style={{
              fontFamily: "'Courier New', Courier, monospace",
            }}
          >
            Hover or click any project{" "}
            <span className="text-red-500">to explore</span>
          </p>
        </div>
      </div>
    </section>
  );
}
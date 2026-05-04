import { motion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (custom = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.12,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const technologies = [
  'React.js',
  'JavaScript',
  'Tailwind CSS',
  'GSAP',
  'Framer Motion',
  'Python',
  'Flask',
  'Firebase',
  'LLMs',
  'RAG',
]

const focusAreas = [
  'AI Systems',
  'Creative Development',
  'Frontend Motion',
  'Immersive UI/UX',
]

export default function PremiumAboutSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,140,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_30%)]" />

      <div className="absolute top-20 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[160px]" />
      <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-purple-500/10 blur-[180px]" />

      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <section className="relative z-10 mx-auto max-w-7xl px-6 py-32 md:px-12">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="mb-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-md"
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            About Me
          </p>
        </motion.div>

        {/* Hero */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="max-w-6xl space-y-8"
        >
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-[7rem]">
            I don’t just build
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              websites.
            </span>

            <br />

            I engineer

            <span className="font-serif italic text-zinc-300">
              {' '}digital experiences
            </span>

            <br />

            people remember.
          </h1>

          <p className="max-w-4xl text-xl leading-[1.9] text-zinc-400 md:text-2xl">
            Developer. Designer. Builder.

            <span className="text-white">
              {' '}
              Obsessed with motion, immersive interactions,
              futuristic interfaces, and premium digital storytelling.
            </span>
          </p>
        </motion.div>

        {/* Long Intro */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="mt-24 max-w-5xl"
        >
          <p className="text-2xl font-light leading-[1.8] tracking-wide text-zinc-300 md:text-3xl">
            I’m the kind of developer who notices the details most
            people ignore — the smoothness of a transition,
            the emotional feeling of scrolling, the rhythm of typography,
            the depth of a hover animation, and the atmosphere a product
            creates before a user even interacts with it.

            <span className="font-medium text-white">
              {' '}
              For me, development is not just writing code.
            </span>

            {' '}
            It’s about creating experiences that feel cinematic,
            alive, and unforgettable.
          </p>

          <p className="mt-10 max-w-4xl text-lg leading-[2] text-zinc-500 md:text-xl">
            My journey started with curiosity — rebuilding interfaces,
            experimenting with animations, studying award-winning
            portfolio websites, and understanding why some products
            instantly feel world-class.

            Over time, that curiosity evolved into a deep obsession
            with building immersive interfaces, AI-powered applications,
            futuristic interactions, and experiences that combine both
            engineering precision and creative storytelling.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="mt-24 grid items-start gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={4}
            className="space-y-8"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:bg-white/[0.05] hover:-translate-y-2">
              <p className="text-lg leading-relaxed text-zinc-300">
                I’m

                <span className="font-semibold text-white">
                  {' '}Dhanush Gopavaram
                </span>

                {' '}— a developer focused on creating

                <span className="text-cyan-400"> immersive</span>,
                <span className="text-purple-400"> cinematic</span>,
                and
                <span className="text-blue-400"> high-performance</span>

                {' '}digital experiences.
              </p>

              <p className="mt-6 text-lg leading-[1.9] text-zinc-400">
                I love combining clean engineering with bold visual design.
                Every project I build is designed to feel smooth,
                interactive, modern, and emotionally engaging.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {focusAreas.map((item) => (
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  key={item}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:bg-white/[0.06]"
                >
                  <div className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Focus
                  </div>

                  <h3 className="text-2xl font-bold transition-colors duration-500 group-hover:text-cyan-400">
                    {item}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            className="space-y-8"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8">
              <div className="absolute -right-20 -top-20 h-60 w-60 bg-cyan-500/20 blur-[120px]" />

              <h2 className="mb-8 text-3xl font-black leading-tight md:text-5xl">
                Building the future of

                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI-powered products.
                </span>
              </h2>

              <p className="text-lg leading-[1.9] text-zinc-400">
                I study modern product experiences, interaction design,
                AI systems, animations, and scalable frontend architecture
                to create products that blend technology with emotion.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <div
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
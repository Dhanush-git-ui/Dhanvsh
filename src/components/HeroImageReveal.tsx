import { motion } from "framer-motion";

export default function HeroImageReveal() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center">
      {/* HERO TEXT */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 px-6 pt-20 pointer-events-none"
      >
        <motion.div
          initial={{ filter: "blur(20px)", opacity: 0, y: 50 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full text-center relative z-10"
        >
          <h1 className="font-anton text-[13vw] text-white uppercase tracking-[-0.05em] transform scale-y-110 origin-center leading-[0.8]">
            DHANUSH GOPAVARAM
          </h1>
        </motion.div>
      </motion.div>

      {/* BOTTOM MARQUEE */}
      <motion.div
        className="absolute bottom-0 w-full flex flex-col items-center z-20 pointer-events-none"
      >
        <div className="w-full overflow-hidden bg-[#5A4BEB] py-4 select-none">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap items-center w-max gap-8"
          >
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex items-center gap-8">
                <span className="text-white font-poppins font-bold text-2xl md:text-3xl uppercase">
                  Engineer At Work
                </span>

                <span className="text-white font-poppins font-bold text-xl opacity-40">
                  &lt;/&gt;
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="py-6 px-6 text-center">
          <p className="text-white/40 font-sora text-[10px] md:text-[11px] font-semibold tracking-[0.4em] uppercase">
            AI-Focused Software Engineer | Breaking Limits through Code |
            Caffeine to Code
          </p>
        </div>
      </motion.div>
    </section>
  );
}

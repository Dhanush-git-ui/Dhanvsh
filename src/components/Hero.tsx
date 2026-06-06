import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="px-6 md:px-12 pt-24 pb-16 min-h-[40vh] flex flex-col justify-center">
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1 className="font-anton text-[10vw] md:text-[8vw] leading-[0.8] uppercase text-pureWhite tracking-tight mb-8">
          Writing Code,<br/>Caffeine to Code
        </h1>
      </motion.div>
    </section>
  );
}

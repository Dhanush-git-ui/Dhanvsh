import { motion } from 'framer-motion';

export default function Marquee() {
  return (
    <div className="w-full bg-pureWhite py-4 overflow-hidden flex items-center border-y border-greyDark">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 2, repeat: Infinity }}
      >
        <span className="text-black font-anton text-2xl md:text-4xl uppercase px-4">
          REACT.JS • PYTHON • RAG & LLMS • LANGCHAIN • FLASK • TYPESCRIPT • JAVASCRIPT •TAILWIND
        </span>
        <span className="text-black font-anton text-2xl md:text-4xl uppercase px-4">
          REACT.JS • PYTHON • RAG & LLMS • LANGCHAIN • FLASK • TYPESCRIPT • JAVASCRIPT •TAILWIND
        </span>
      </motion.div>
    </div>
  );
}

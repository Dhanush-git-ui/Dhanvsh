import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = ["Hello", "Bonjour", "Ciao", "Hola"];

export default function Loader() {
  const [step, setStep] = useState(0);
  const [showBrand, setShowBrand] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (step < greetings.length - 1) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, step === 0 ? 1200 : 1050);

      return () => clearTimeout(timer);
    }

    /*
      This controls how long the final greeting "Hola" stays
      before DG appears.
    */
    const brandTimer = setTimeout(() => {
      setShowBrand(true);
    }, 1500);

    return () => clearTimeout(brandTimer);
  }, [step]);

  useEffect(() => {
    if (!showBrand) return;

    const exitTimer = setTimeout(() => {
      setVisible(false);
    }, 2600);

    return () => clearTimeout(exitTimer);
  }, [showBrand]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "0%" }}
          exit={{
            y: "-100%",
          }}
          transition={{
            duration: 0.95,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="
            fixed 
            inset-0 
            z-[9999] 
            flex 
            items-center 
            justify-center 
            overflow-hidden 
            bg-black 
            text-white
            font-['Anton',_sans-serif]
          "
        >
          {/* Top small label */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              absolute 
              left-6 
              top-6 
              font-sans
              text-[10px] 
              uppercase 
              tracking-[0.45em] 
              text-white/35 
              md:left-10 
              md:top-10
            "
          >
            Portfolio
          </motion.div>

          {/* Bottom loading number */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              absolute 
              bottom-6 
              right-6 
              font-sans
              text-xs 
              font-medium
              tracking-[0.25em]
              text-white/35 
              md:bottom-10 
              md:right-10
            "
          >
            {showBrand ? "100%" : `${Math.min((step + 1) * 25, 90)}%`}
          </motion.div>

          {/* Main content */}
          <div className="relative flex h-72 w-full flex-col items-center justify-center px-6">
            <AnimatePresence>
              {!showBrand ? (
                <motion.div
                  key={greetings[step]}
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(6px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    filter: "blur(6px)",
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <h1
                    className="
                      text-[4.8rem] 
                      font-normal
                      uppercase
                      leading-none
                      tracking-[-0.045em] 
                      text-white 
                      md:text-[8rem]
                      lg:text-[9rem]
                    "
                  >
                    {greetings[step]}
                  </h1>
                </motion.div>
              ) : (
                <motion.div
                  key="brand"
                  initial={{
                    opacity: 0,
                    y: 20,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex items-end"
                >
                  <motion.span
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      text-[7rem] 
                      font-normal 
                      uppercase
                      leading-none 
                      tracking-[-0.065em] 
                      md:text-[13rem]
                    "
                  >
                    D
                  </motion.span>

                  <motion.span
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      text-[7rem] 
                      font-normal 
                      uppercase
                      leading-none 
                      tracking-[-0.065em] 
                      md:text-[13rem]
                    "
                  >
                    G
                  </motion.span>

                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      ml-3 
                      text-[7rem] 
                      font-normal 
                      leading-none 
                      tracking-[-0.065em] 
                      text-[#5A4BEB] 
                      md:text-[13rem]
                    "
                  >
                    .
                  </motion.span>

                  {/* Logo underline */}
                  <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.3,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      absolute 
                      -bottom-5 
                      left-1/2 
                      h-px 
                      w-52 
                      -translate-x-1/2 
                      origin-center 
                      bg-white/30 
                      md:w-80
                    "
                  />

                  {/* Tiny caption */}
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      delay: 0.6,
                      ease: "easeOut",
                    }}
                    className="
                      absolute 
                      -bottom-12 
                      left-1/2 
                      w-max 
                      -translate-x-1/2 
                      font-sans 
                      text-[10px] 
                      font-semibold 
                      uppercase 
                      tracking-[0.45em] 
                      text-white/35
                    "
                  >
                    Digital Portfolio
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom progress line */}
          <div className="absolute bottom-0 left-0 h-px w-full bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: showBrand ? "100%" : `${(step + 1) * 22}%` }}
              transition={{
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="h-full bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
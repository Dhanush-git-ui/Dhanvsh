import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScratchToRevealProps {
  children: React.ReactNode;
  height?: number;
  brushSize?: number;
  onComplete?: () => void;
}

const motivationQuotes = [
  "Compiling skills...",
  "Debugging limits...",
  "Building the future...",
  "Stack loading...",
  "Consistency creates mastery.",
  "Almost unlocked...",
  "Your tech ecosystem is ready.",
];

const marqueeItems = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "RAG",
  "Vector DB",
  "LLMs",
  "Flask",
  "SQL-lite",
  "Tailwind CSS",
  "Framer Motion",
  "AI / ML",
  "APIs",
  "chroma db",
  "ollama",
];

export const ScratchToReveal: React.FC<ScratchToRevealProps> = ({
  children,
  height = 460,
  brushSize = 58,
  onComplete,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);
  const isCompleteRef = useRef(false);

  const [isScratched, setIsScratched] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showQuote, setShowQuote] = useState(false);
  const [scratchProgress, setScratchProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const card = cardRef.current;

    if (!canvas || !card) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let drawing = false;
    let frameId: number | null = null;

    const drawScratchLayer = () => {
      const rect = card.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const width = rect.width;
      const canvasHeight = rect.height;

      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, width, canvasHeight);

      /**
       * Dark premium scratch foil
       */
      const gradient = ctx.createLinearGradient(0, 0, width, canvasHeight);
      gradient.addColorStop(0, "#050505");
      gradient.addColorStop(0.35, "#171717");
      gradient.addColorStop(0.7, "#0b0b0b");
      gradient.addColorStop(1, "#242424");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, canvasHeight);

      /**
       * Subtle grid texture
       */
      ctx.strokeStyle = "rgba(255,255,255,0.035)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += 32) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasHeight);
        ctx.stroke();
      }

      for (let y = 0; y < canvasHeight; y += 32) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      /**
       * Noise grain
       */
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * width;
        const y = Math.random() * canvasHeight;
        const opacity = Math.random() * 0.12;

        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
        ctx.fillRect(x, y, 1, 1);
      }

      /**
       * Shine strip
       */
      const shine = ctx.createLinearGradient(0, 0, width, 0);
      shine.addColorStop(0, "rgba(255,255,255,0)");
      shine.addColorStop(0.45, "rgba(255,255,255,0.08)");
      shine.addColorStop(0.55, "rgba(255,255,255,0.12)");
      shine.addColorStop(1, "rgba(255,255,255,0)");

      ctx.save();
      ctx.translate(width / 2, canvasHeight / 2);
      ctx.rotate(-0.35);
      ctx.fillStyle = shine;
      ctx.fillRect(-width, -60, width * 2, 120);
      ctx.restore();

      /**
       * Text on scratch layer
       */
      ctx.textAlign = "center";

      ctx.font = "700 14px Inter, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.42)";
      ctx.fillText("SCRATCH TO UNLOCK", width / 2, canvasHeight / 2 - 22);

      ctx.font = "900 44px Anton, Impact, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.1)";
      ctx.fillText("TECH STACK", width / 2, canvasHeight / 2 + 36);

      ctx.font = "500 13px Inter, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.fillText(
        "Reveal at least 75% to unlock",
        width / 2,
        canvasHeight / 2 + 70
      );
    };

    drawScratchLayer();

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();

      const clientX = "touches" in e ? e.touches[0]?.clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0]?.clientY : e.clientY;

      return {
        x: (clientX || 0) - rect.left,
        y: (clientY || 0) - rect.top,
      };
    };

    const scratchCircle = (x: number, y: number) => {
      ctx.globalCompositeOperation = "destination-out";

      ctx.beginPath();
      ctx.arc(x, y, brushSize, 0, Math.PI * 2);
      ctx.fill();
    };

    const scratchLine = (
      from: { x: number; y: number },
      to: { x: number; y: number }
    ) => {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = brushSize * 2;

      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.stroke();

      scratchCircle(to.x, to.y);
    };

    const checkScratched = () => {
      if (isCompleteRef.current) return;

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;

      let clearPixels = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] < 128) {
          clearPixels++;
        }
      }

      const percentage = Math.round(
        (clearPixels / (pixels.length / 4)) * 100
      );

      setScratchProgress(Math.min(percentage, 100));

      /**
       * Unlock only after 75% scratch.
       * Change to 80 if you want it stricter.
       */
      if (percentage >= 75) {
        isCompleteRef.current = true;
        setIsScratched(true);
        setScratchProgress(100);
        onComplete?.();
      }
    };

    const maybeShowQuote = () => {
      if (Math.random() > 0.965) {
        setQuoteIndex(Math.floor(Math.random() * motivationQuotes.length));
        setShowQuote(true);

        window.setTimeout(() => {
          setShowQuote(false);
        }, 1500);
      }
    };

    const scratch = (x: number, y: number) => {
      const lastPoint = lastPointRef.current;

      if (lastPoint) {
        scratchLine(lastPoint, { x, y });
      } else {
        scratchCircle(x, y);
      }

      lastPointRef.current = { x, y };
      maybeShowQuote();

      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(checkScratched);
    };

    let touchStartPos = { x: 0, y: 0 };
    let isVerticalSwipe = false;

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      if (isCompleteRef.current) return;

      if (!("touches" in e)) {
        e.preventDefault();
      } else {
        const touch = e.touches[0];
        touchStartPos = { x: touch?.clientX || 0, y: touch?.clientY || 0 };
        isVerticalSwipe = false;
      }

      drawing = true;

      const { x, y } = getPos(e);
      lastPointRef.current = { x, y };
      scratch(x, y);
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!drawing || isCompleteRef.current) return;

      if ("touches" in e) {
        const touch = e.touches[0];
        const diffX = (touch?.clientX || 0) - touchStartPos.x;
        const diffY = (touch?.clientY || 0) - touchStartPos.y;

        if (!isVerticalSwipe && Math.abs(diffY) > 6 && Math.abs(diffY) > Math.abs(diffX)) {
          isVerticalSwipe = true;
          drawing = false;
          lastPointRef.current = null;
          return;
        }

        if (isVerticalSwipe) {
          return;
        }

        if (e.cancelable) {
          e.preventDefault();
        }
      } else {
        e.preventDefault();
      }

      const { x, y } = getPos(e);
      scratch(x, y);
    };

    const onPointerUp = () => {
      drawing = false;
      lastPointRef.current = null;
    };

    const onResize = () => {
      if (!isCompleteRef.current) {
        drawScratchLayer();
      }
    };

    canvas.addEventListener("mousedown", onPointerDown);
    canvas.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    canvas.addEventListener("touchstart", onPointerDown, { passive: false });
    canvas.addEventListener("touchmove", onPointerMove, { passive: false });
    window.addEventListener("touchend", onPointerUp);

    window.addEventListener("resize", onResize);

    return () => {
      if (frameId) cancelAnimationFrame(frameId);

      canvas.removeEventListener("mousedown", onPointerDown);
      canvas.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);

      canvas.removeEventListener("touchstart", onPointerDown);
      canvas.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);

      window.removeEventListener("resize", onResize);
    };
  }, [brushSize, onComplete]);

  return (
    <div className="w-full">
      {/* Marquee Tag */}
      <div className="mb-6 overflow-hidden rounded-full border border-white/10 bg-white/[0.03] py-3 backdrop-blur-md">
        <motion.div
          className="flex w-max gap-8 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45"
            >
              {item}
              <span className="mx-8 text-purple-400/60">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scratch Card */}
      <div
        ref={cardRef}
        className="
          relative w-full overflow-hidden rounded-[28px]
          border border-white/10 bg-black
          shadow-[0_30px_120px_rgba(0,0,0,0.75)]
        "
        style={{ height }}
      >
        {/* Glow background */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.16),transparent_45%)]" />

        {/* Motivation Quote */}
        <AnimatePresence>
          {showQuote && !isScratched && (
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.96 }}
              className="
                pointer-events-none absolute left-1/2 top-5 z-40
                -translate-x-1/2 rounded-full border border-purple-400/20
                bg-black/50 px-4 py-2 text-xs font-semibold uppercase
                tracking-[0.28em] text-purple-300 backdrop-blur-md
              "
            >
              {motivationQuotes[quoteIndex]}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Completion Badge */}
        <AnimatePresence>
          {isScratched && (
            <motion.div
              initial={{ opacity: 0, y: -18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="
                pointer-events-none absolute left-1/2 top-5 z-40
                -translate-x-1/2 rounded-full border border-emerald-400/30
                bg-emerald-400/10 px-5 py-2 text-xs font-black uppercase
                tracking-[0.32em] text-emerald-300 backdrop-blur-md
              "
            >
              Tech Stack Unlocked
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress */}
        {!isScratched && (
          <div className="pointer-events-none absolute bottom-5 left-1/2 z-40 w-[min(420px,80%)] -translate-x-1/2">
            <div className="mb-2 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-white/35">
              <span>Reveal Progress</span>
              <span>{scratchProgress}%</span>
            </div>

            <div className="h-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-white"
                initial={false}
                animate={{ width: `${scratchProgress}%` }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
            </div>
          </div>
        )}

        {/* Skills Content - always behind canvas */}
        <div className="absolute inset-0 z-10 overflow-y-auto custom-scrollbar p-6 md:p-8 flex flex-col items-center justify-start">
          <div className="w-full">
            {children}
          </div>
        </div>

        {/* Scratch Canvas */}
        <motion.canvas
          ref={canvasRef}
          className="absolute inset-0 z-30 cursor-crosshair touch-none"
          animate={{
            opacity: isScratched ? 0 : 1,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            pointerEvents: isScratched ? "none" : "auto",
          }}
        />

        {/* Border shine */}
        <div className="pointer-events-none absolute inset-0 z-50 rounded-[28px] ring-1 ring-white/10" />
      </div>
    </div>
  );
};
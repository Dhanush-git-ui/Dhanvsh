import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScratchToRevealProps {
  children: React.ReactNode;
  width?: number;
  height?: number;
  brushSize?: number;
  onComplete?: () => void;
}

const motivationQuotes = [
  "Uncovering potential...",
  "Persistence pays off.",
  "The secret is consistency.",
  "Keep digging deeper.",
  "Skill is a craft.",
  "Almost there...",
  "Reveal your future."
];

export const ScratchToReveal: React.FC<ScratchToRevealProps> = ({ 
  children, 
  width = 800, 
  height = 400, 
  brushSize = 40,
  onComplete 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScratched, setIsScratched] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill with a dark "foil" color
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add some "grain" to the foil
    for (let i = 0; i < 5000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const opacity = Math.random() * 0.1;
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.fillRect(x, y, 1, 1);
    }

    // Add some text instruction on the foil
    ctx.font = '20px Anton, sans-serif';
    ctx.fillStyle = '#333';
    ctx.textAlign = 'center';
    ctx.fillText('SCRATCH TO REVEAL ECOSYSTEM', canvas.width / 2, canvas.height / 2);

    let drawing = false;

    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, brushSize, 0, Math.PI * 2);
      ctx.fill();

      // Simple logic to show a quote periodically
      if (Math.random() > 0.98) {
        setQuoteIndex(Math.floor(Math.random() * motivationQuotes.length));
        setShowQuote(true);
        setTimeout(() => setShowQuote(false), 2000);
      }

      checkScratched();
    };

    const checkScratched = () => {
      if (isScratched) return;
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      let clearPixels = 0;
      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) clearPixels++;
      }
      const percentage = (clearPixels / (pixels.length / 4)) * 100;
      if (percentage > 40) {
        setIsScratched(true);
        if (onComplete) onComplete();
      }
    };

    const onMouseDown = (e: MouseEvent | TouchEvent) => {
      drawing = true;
      const { x, y } = getPos(e);
      scratch(x, y);
    };

    const onMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!drawing) return;
      const { x, y } = getPos(e);
      scratch(x, y);
    };

    const onMouseUp = () => {
      drawing = false;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('touchstart', onMouseDown);
    canvas.addEventListener('touchmove', onMouseMove);
    canvas.addEventListener('touchend', onMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onMouseDown);
      canvas.removeEventListener('touchmove', onMouseMove);
      canvas.removeEventListener('touchend', onMouseUp);
    };
  }, [brushSize, isScratched, onComplete]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden" style={{ height }}>
      {/* Motivation Text */}
      <AnimatePresence>
        {showQuote && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-30 font-poppins text-purple-400 text-sm uppercase tracking-widest pointer-events-none"
          >
            {motivationQuotes[quoteIndex]}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isScratched && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-30 font-anton text-white text-xl uppercase tracking-widest pointer-events-none"
          >
            MASTERY UNLOCKED
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Skills */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-8">
        {children}
      </div>

      {/* Scratch Canvas */}
      <motion.canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="absolute inset-0 z-20 cursor-crosshair"
        animate={{ opacity: isScratched ? 0 : 1 }}
        transition={{ duration: 1 }}
        style={{ pointerEvents: isScratched ? 'none' : 'auto', width: '100%', height: '100%' }}
      />
    </div>
  );
};

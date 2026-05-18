"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  name: string;
  image: string;
}

interface HoverMemberProps {
  teamMembers?: TeamMember[];
  defaultText?: string;
}

export default function HoverMember({
  teamMembers = [
    { name: "F1 2026", image: "/f1.png" },
    { name: "HITAM", image: "/hitam.png" },
    { name: "LEARNIVERSE", image: "/learniverse.png" },
    { name: "STARTUP SYNC", image: "/startupsync.png" },
  ],
  defaultText = "PROJECTS"
}: HoverMemberProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Determine what text to show based on the hover state
  const activeText =
    hoveredIndex !== null ? teamMembers[hoveredIndex].name : defaultText;

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] w-full bg-[#111] text-white overflow-hidden py-20 font-sans">
      
      {/* Avatars Row */}
      <div className="flex items-center justify-center gap-3 mb-16 h-24">
        {teamMembers.map((member, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <motion.div
              key={index}
              className="relative w-16 h-16 rounded-xl overflow-hidden cursor-pointer shadow-lg bg-zinc-800"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                y: isHovered ? 24 : 0, // Drops the image down on hover
                scale: isHovered ? 1.15 : 1,
                zIndex: isHovered ? 10 : 1,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25 
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Large Animated Text below */}
      <div className="relative h-32 md:h-48 flex items-center justify-center overflow-hidden px-4 w-full">
        <AnimatePresence mode="popLayout">
          <motion.h1
            key={activeText}
            initial={{ y: 60, opacity: 0, rotateX: -45 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -60, opacity: 0, rotateX: 45 }}
            transition={{ 
              duration: 0.4, 
              ease: [0.22, 1, 0.36, 1] // Smooth custom easing
            }}
            className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase text-white origin-center"
            style={{ lineHeight: 0.8 }}
          >
            {activeText}
          </motion.h1>
        </AnimatePresence>
      </div>
      
    </div>
  );
}
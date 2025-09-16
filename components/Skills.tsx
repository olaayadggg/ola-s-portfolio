"use client";
import { motion } from "framer-motion";
import { profile } from "../lib/data";

const orbitVariants = (radius: number, duration: number) => ({
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration,
      ease: "linear",
    },
  },
});

export default function SkillGalaxy() {
  return (
    <div className="relative flex items-center justify-center w-[400px] h-[400px] mx-auto">
      {/* Center core */}
      <div
        className="absolute w-24 h-24 rounded-full flex items-center justify-center text-white font-bold shadow-xl"
        style={{ backgroundImage: "var(--brand-gradient)" }}
      >
        Ola
      </div>

      {profile.skills.slice(0, 8).map((skill, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 rounded-full flex items-center justify-center text-xs text-white shadow-md cursor-pointer"
          style={{
            backgroundImage: "var(--brand-gradient)",
            transformOrigin: "200px 200px",
          }}
          variants={orbitVariants(150, 20 + i * 2)}
          animate="animate"
          whileHover={{ scale: 1.3, rotate: 0 }}
        >
          {skill}
        </motion.div>
      ))}
    </div>
  );
}

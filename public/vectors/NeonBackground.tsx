// "use client";
// import { motion } from "framer-motion";

// const paths = [
//   "M 0 200 C 150 100, 300 300, 500 200",   // smooth wave
//   "M 0 400 C 200 300, 400 500, 600 400",   // another wave
//   "M 200 0 C 300 200, 100 400, 300 600",   // vertical curl
// ];

// export default function NeonBackground() {
//   return (
//     <div className="fixed inset-0 -z-10 bg-black">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-full h-full"
//         viewBox="0 0 800 600"
//         preserveAspectRatio="xMidYMid slice"
//       >
//         {paths.map((d, i) => (
//           <motion.path
//             key={i}
//             d={d}
//             stroke="url(#neonGradient)"
//             strokeWidth="3"
//             fill="none"
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
//             transition={{
//               duration: 6,
//               delay: i * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}

//         <defs>
//           <linearGradient id="neonGradient" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#ec4899" />
//             <stop offset="100%" stopColor="#a855f7" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// }
"use client";
import { motion } from "framer-motion";

const paths = [
  "M 0 200 C 150 100, 300 300, 500 200", // smooth wave
  "M 0 400 C 200 300, 400 500, 600 400", // another wave
];

export default function NeonBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-[9999]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="url(#neonGradient)"
            strokeWidth="4"
            fill="none"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
            transition={{
              duration: 5 + i * 2, // varied timing for organic feel
              delay: i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <defs>
          {/* Neon Gradient */}
          <linearGradient id="neonGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff00ff" />
            <stop offset="50%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#00ffff" />
          </linearGradient>

          {/* Neon Glow Filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur1" />
            <feGaussianBlur stdDeviation="12" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

// "use client";
// import { motion } from "framer-motion";

// const paths = [
//   // Flowing downward lines that "guide" through the page
//   "M 100 0 C 150 150, 50 300, 120 600",   // left-side guide
//   "M 400 0 C 450 200, 350 400, 420 600",  // center wave
//   "M 700 0 C 650 200, 750 400, 680 600",  // right-side wave
// ];

// export default function NeonBackground() {
//   return (
//     <div className="fixed inset-0 -z-10 bg-black">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-full h-full"
//         viewBox="0 0 800 600"
//         preserveAspectRatio="xMidYMid slice"
//       >
//         {paths.map((d, i) => (
//           <motion.path
//             key={i}
//             d={d}
//             stroke="url(#neonGradient)"
//             strokeWidth="2" // lighter stroke
//             fill="none"
//             filter="url(#glow)"
//             opacity={0.4} // softer look
//             initial={{ pathLength: 0, opacity: 0 }}
//             animate={{ pathLength: [0, 1], opacity: [0, 0.4, 0] }}
//             transition={{
//               duration: 8 + i * 3, // slower & staggered
//               delay: i * 2,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}

//         <defs>
//           {/* Softer Neon Gradient */}
//           <linearGradient id="neonGradient" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#ff4ec7" />
//             <stop offset="50%" stopColor="#ec4899" />
//             <stop offset="100%" stopColor="#7dd3fc" />
//           </linearGradient>

//           {/* Soft Neon Glow Filter */}
//           <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
//             <feGaussianBlur stdDeviation="4" result="blur1" />
//             <feGaussianBlur stdDeviation="8" result="blur2" />
//             <feMerge>
//               <feMergeNode in="blur1" />
//               <feMergeNode in="blur2" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>
//       </svg>
//     </div>
//   );
// }

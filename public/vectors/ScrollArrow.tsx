// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";

// export default function ScrollArrow() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "center start"], 
//     // starts drawing when About enters, finishes before Projects fully appear
//   });

//   // Finish drawing earlier (60% of scroll instead of 100%)
//   const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

//   return (
//     <div ref={ref} className="relative w-full flex justify-center mt-20 mb-20">
//       <svg
//         width="100"
//         height="260"
//         viewBox="0 0 100 260"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="overflow-visible"
//       >
//         {/* Curved arrow path */}
//         <motion.path
//           d="M50 0 C50 90, 20 160, 50 220 L50 240"
//           stroke="url(#arrowGradient)"
//           strokeWidth="5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           style={{ pathLength }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         />
//         {/* Arrowhead */}
//         <motion.path
//           d="M40 230 L50 250 L60 230"
//           stroke="url(#arrowGradient)"
//           strokeWidth="5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           style={{ pathLength }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         />

//         <defs>
//           <linearGradient id="arrowGradient" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="0%" stopColor="#ec4899" />
//             <stop offset="100%" stopColor="#a855f7" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// }

"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollArrow() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"], 
  });

  // Animate drawing of the path
  const pathLength = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <div ref={ref} className="relative w-full flex justify-center mt-20 mb-20">
      <svg
        width="200"
        height="320"
        viewBox="0 0 200 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Curly path with a circular loop */}
        <motion.path
          d="M100 10
             C160 40, 160 120, 100 140
             C40 160, 40 240, 100 260
             C160 280, 160 200, 100 180
             C60 170, 60 230, 100 260
             L100 290"
          stroke="url(#arrowGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          filter="url(#shadow)"
        />

        {/* Chunky Arrowhead */}
        <motion.path
          d="M80 270 L100 310 L120 270"
          stroke="url(#arrowGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ pathLength }}
          filter="url(#shadow)"
        />

        <defs>
          {/* Gradient for arrow */}
          <linearGradient id="arrowGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>

          {/* Soft shadow for 3D effect */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000" floodOpacity="0.25" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

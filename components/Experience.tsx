// "use client";
// import { profile } from "../lib/data";
// import { motion } from "framer-motion";

// export default function Experience() {
//   return (
//     <div className="relative">
//       <h2
//         className="text-3xl font-bold mb-8"
//         style={{
//           backgroundImage: "var(--brand-gradient)",
//           WebkitBackgroundClip: "text",
//           color: "transparent",
//         }}
//       >
//         My Journey
//       </h2>

//       <div className="relative border-l-4 border-pink-400/50 dark:border-pink-300/50 ml-6 space-y-10">
//         {profile.experience.map((e, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.1 * i }}
//             className="ml-6 relative"
//           >
//             {/* Timeline dot */}
//             <div className="w-4 h-4 bg-gradient-to-tr from-pink-400 via-fuchsia-400 to-purple-500 rounded-full absolute -left-[34px] top-2 border-4 border-white dark:border-gray-900 shadow-lg"></div>

//             <div className="card">
//               <h3 className="font-bold text-lg">{e.role}</h3>
//               <p className="text-sm text-pink-600 dark:text-pink-300">
//                 {e.company} • {e.period}
//               </p>
//               <ul className="list-disc mt-3 ml-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
//                 {e.points.map((p, idx) => (
//                   <li key={idx}>{p}</li>
//                 ))}
//               </ul>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";
import { profile } from "../lib/data";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="relative">
      <h2
        className="text-3xl font-bold mb-12"
        style={{
          backgroundImage: "var(--brand-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        My Journey
      </h2>

      {/* Animated vertical line */}
      <motion.div
        className="absolute left-[17px] bottom-0 w-1 bg-gradient-to-b from-pink-400 via-fuchsia-400 to-purple-500 rounded-full"
        initial={{ height: 0 }}
        whileInView={{ height: "85%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="relative ml-6 space-y-14">
        {profile.experience.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="ml-6 relative"
          >
            {/* Timeline dot with pulse */}
            <motion.div
              className="w-5 h-5 bg-gradient-to-tr from-pink-400 via-fuchsia-400 to-purple-500 rounded-full absolute -left-[38px] top-3 border-4 border-white dark:border-gray-900 shadow-lg"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Ripple glow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-pink-400/40 blur-md"
                initial={{ scale: 0.8, opacity: 0.6 }}
                animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>

            {/* Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -3 }}
              className="card shadow-lg shadow-pink-200/30"
            >
              <h3 className="font-bold text-lg">{e.role}</h3>
              <p className="text-sm text-pink-600 dark:text-pink-300">
                {e.company} • {e.period}
              </p>
              <ul className="list-disc mt-3 ml-5 text-gray-700 dark:text-gray-300 space-y-1 text-sm">
                {e.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

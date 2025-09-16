// "use client";
// import { profile } from "../lib/data";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <div className="card text-center relative overflow-hidden">
//       <div className="absolute -top-20 -right-20 w-60 h-60 bg-pink-400/30 blur-3xl rounded-full"></div>
//       <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-fuchsia-400/20 blur-3xl rounded-full"></div>

//       <h2
//         className="text-3xl font-bold mb-4 bg-clip-text text-transparent"
//         style={{ backgroundImage: "var(--brand-gradient)" }}
//       >
//         About Me
//       </h2>

//       <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
//         {profile.summary}
//       </p>

//       <h3 className="text-xl font-semibold mt-8 mb-4">Skills</h3>

//       <div className="flex flex-wrap justify-center gap-3">
//         {profile.skills.map((s, i) => (
//           <motion.span
//             key={s}
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.03 * i }}
//             className="px-4 py-2 text-sm rounded-full font-medium text-white shadow-md"
//             style={{
//               backgroundImage: "var(--brand-gradient)",
//             }}
//           >
//             {s}
//           </motion.span>
//         ))}
//       </div>
//     </div>
//   );
// }

// 'use client';
// import { profile } from '../lib/data';
// import { motion } from 'framer-motion';

// export default function About() {
//   return (
//     <section id="about" className="relative">
//       <div className="card">
//         <h2 className="text-3xl font-bold mb-4" style={{backgroundImage:'var(--brand-gradient)', WebkitBackgroundClip:'text', color:'transparent'}}>About Me</h2>
//         <div className="md:flex gap-6 items-center">
//           <div className="md:w-1/3 text-center">
//             <div className="w-48 h-48 mx-auto rounded-full overflow-hidden ring-4 ring-pink-200/40">
//               <img src="/avatar.jpeg" alt="Ola" className="object-cover w-full h-full" />
//             </div>
//           </div>
//           <div className="md:flex-1">
//             <p className="text-gray-700 dark:text-gray-300">{profile.summary}</p>
//             <div className="mt-6 flex flex-wrap gap-3">
//               {profile.skills.map((s,i) => (
//                 <motion.span key={s} initial={{scale:0.9}} whileHover={{scale:1.05}} className="px-4 py-2 rounded-full text-white" style={{backgroundImage:'var(--brand-gradient)'}}>
//                   {s}
//                 </motion.span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { profile } from "../lib/data";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <section id="about" className="relative">
//       <h2
//         className="text-3xl font-bold mb-8"
//         style={{
//           backgroundImage: "var(--brand-gradient)",
//           WebkitBackgroundClip: "text",
//           color: "transparent",
//         }}
//       >
//         About Me
//       </h2>
//       <div className="card">
//         <div className="md:flex gap-6 items-center">
//           {/* --- Vector Illustration with Animation --- */}
//           <div className="md:w-1/3 flex justify-center">
//             <motion.div
//               animate={{ y: [0, -10, 0] }}
//               transition={{ duration: 4, repeat: Infinity }}
//               className="w-56 h-56"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 512 512"
//                 className="w-full h-full drop-shadow-xl"
//               >
//                 {/* Monitor */}
//                 <rect
//                   x="100"
//                   y="120"
//                   width="300"
//                   height="200"
//                   rx="15"
//                   fill="url(#grad1)"
//                 />
//                 {/* Keyboard */}
//                 <rect
//                   x="150"
//                   y="340"
//                   width="200"
//                   height="30"
//                   rx="8"
//                   fill="#f3f3f3"
//                 />
//                 {/* Person Head */}
//                 <circle cx="250" cy="90" r="40" fill="#fca5a5" />
//                 {/* Person Body */}
//                 <rect
//                   x="210"
//                   y="130"
//                   width="80"
//                   height="100"
//                   rx="20"
//                   fill="#f472b6"
//                 />

//                 <defs>
//                   <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="1">
//                     <stop offset="0%" stopColor="#ec4899" />
//                     <stop offset="100%" stopColor="#d946ef" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </motion.div>
//           </div>

//           {/* --- About Text + Skills --- */}
//           <div className="md:flex-1">
//             <p className="text-gray-700 dark:text-gray-300">
//               {profile.summary}
//             </p>

//             <div className="mt-6 flex flex-wrap gap-3">
//               {profile.skills.map((s, i) => (
//                 <motion.span
//                   key={s}
//                   initial={{ scale: 0.9 }}
//                   whileHover={{ scale: 1.1, rotate: 2 }}
//                   className="px-4 py-2 rounded-full text-white shadow-md"
//                   style={{ backgroundImage: "var(--brand-gradient)" }}
//                 >
//                   {s}
//                 </motion.span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion } from "framer-motion";
// import { FaReact, FaGithub, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

// export default function About() {
//   const skillsIcons = [
//     { icon: <FaReact className="text-sky-400" />, name: "React" },
//     {
//       icon: <SiNextdotjs className="text-black dark:text-white" />,
//       name: "Next.js",
//     },
//     { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
//     { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
//     { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
//     { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
//     { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
//     {
//       icon: <FaGithub className="text-gray-800 dark:text-gray-200" />,
//       name: "GitHub",
//     },
//   ];

//   return (
//       <section id="about" className="relative">
//       <div className="card">
//         <div className="md:flex gap-6 items-center">
//           <div className="md:flex-1 space-y-6">
//             {/* Infinite Marquee */}
//             <div className="overflow-hidden relative w-full py-6">
//               <motion.div
//                 className="flex gap-10 text-4xl w-max"
//                 animate={{ x: ["0%", "-100%"] }}
//                 transition={{
//                   ease: "linear",
//                   duration: 10,
//                   repeat: Infinity,
//                 }}
//               >
//                 {/* repeat the icons twice to ensure seamless loop */}
//                 {[...skillsIcons, ...skillsIcons].map((skill, i) => (
//                   <div
//                     key={i}
//                     className="cursor-pointer hover:scale-125 transition-transform"
//                     title={skill.name}
//                   >
//                     {skill.icon}
//                   </div>
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaAngular,
  FaBootstrap,
  FaLaravel,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiAngular,
  SiBootstrap,
  SiC,
  SiDocker,
  SiFormik,
  SiGithubcopilot,
  SiJson,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { ChatGPTIcon } from "../public/icons/ChatgptIcon";
import { DeepSeekIcon } from "../public/icons/DeepseekIcon";
import { CursorIcon } from "../public/icons/CursorIcon";

export default function About() {
  // const skillsIcons = [
  //   { icon: <FaReact className="text-sky-400" />, name: "React" },
  //   { icon: <SiNextdotjs className="text-black dark:text-white" />, name: "Next.js" },
  //   { icon: <SiAngular className="text-gray-800 dark:text-gray-200" />, name: "Angular" },
  //   { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
  //   { icon: <FaBootstrap className="text-gray-800 dark:text-gray-200" />, name: "Bootstrap" },
  //   { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
  //   { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  //   { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
  //   { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
  //   { icon: <SiRedux className="text-gray-800 dark:text-gray-200" />, name: "Redux" },
  //   { icon: <FaLaravel className="text-gray-800 dark:text-gray-200" />, name: "Laravel" },
  //   { icon: <FaNodeJs className="text-gray-800 dark:text-gray-200" />, name: "Node.js" },
  //   { icon: <SiPython className="text-gray-800 dark:text-gray-200" />, name: "Python" },
  //   { icon: <SiFormik className="text-gray-800 dark:text-gray-200" />, name: "Formik" },
  //   { icon: <SiGithubcopilot className="text-gray-800 dark:text-gray-200" />, name: "Copilot" },
  // ];
  const skillsIcons = [
    { icon: <FaReact className="text-sky-400" />, name: "React" },
    {
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      name: "Next.js",
    },
    { icon: <SiAngular className="text-red-600" />, name: "Angular" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
    { icon: <FaBootstrap className="text-purple-600" />, name: "Bootstrap" },
    { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS" },
    { icon: <SiRedux className="text-purple-700" />, name: "Redux" },
    { icon: <FaLaravel className="text-red-500" />, name: "Laravel" },
    { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { icon: <SiPython className="text-yellow-500" />, name: "Python" },
    { icon: <SiFormik className="text-pink-500" />, name: "Formik" },
    { icon: <SiGithubcopilot className="text-indigo-500" />, name: "Copilot" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
    { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
  ];

  return (
    <section id="about" className="relative w-full">
      <div className="w-full overflow-hidden py-2">
        <motion.div
          className="flex gap-10 text-5xl w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
        >
          {/* Repeat 2x to fill the screen and loop */}
          {[...skillsIcons, ...skillsIcons, ...skillsIcons].map((skill, i) => (
            <div
              key={i}
              className="cursor-pointer hover:scale-125 transition-transform"
              title={skill.name}
            >
              {skill.icon}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

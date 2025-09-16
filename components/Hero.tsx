// "use client";
// import { motion } from "framer-motion";
// import { profile } from "../lib/data";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <div className="text-center pt-12 md:pt-20 relative">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7 }}
//         className="w-40 h-40 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-violet-500/50 mb-6"
//       >
//         <Image
//           src="/avatar.jpeg"
//           alt={profile.name}
//           width={200}
//           height={200}
//           className="object-cover w-full h-full"
//         />
//       </motion.div>

//       <motion.h1
//         className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent"
//         style={{ backgroundImage: "var(--brand-gradient)" }}
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {profile.name}
//       </motion.h1>

//       <motion.p
//         className="mt-3 text-lg md:text-2xl text-gray-700 dark:text-gray-300 font-medium"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.15 }}
//       >
//         {profile.title}
//       </motion.p>

//       <motion.p
//         className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.25 }}
//       >
//         {profile.summary}
//       </motion.p>

//       <motion.div
//         className="mt-6 flex items-center justify-center gap-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.35 }}
//       >
//         <a href="#projects" className="btn">
//           🚀 View Projects
//         </a>
//         <a
//           href="#contact"
//           className="rounded-full px-6 py-3 border border-violet-400 text-violet-600 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/40"
//         >
//           Contact Me
//         </a>
//       </motion.div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { profile } from "../lib/data";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute -top-40 -left-40 w-72 h-72 bg-pink-300/40 rounded-full blob"></div>
      <div className="overflow-hidden w-[100%]">
        <div className="absolute -right-40 -z-[999] top-6 w-80 h-80 bg-violet-300/30 rounded-full blob"></div>
      </div>

      <div className="grid md:grid-cols-2 items-center gap-8">
        <div className="space-y-6">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight"
            style={{
              backgroundImage: "var(--brand-gradient)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {profile.name}
          </h1>
          <div className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
            <Typewriter
              words={[
                profile.title,
                "UI Enthusiast",
                "React Developer",
                "Next.js Developer",
                "Angular Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </div>
          <p className="max-w-xl text-gray-600 dark:text-gray-300">
            {profile.summary}
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full px-6 py-3 border border-pink-200 text-pink-600"
            >
              Contact
            </a>
          </div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-80"
        >
          <div className="rounded-3xl p-3 bg-white/60 dark:bg-white/5 shadow-2xl ring-1 ring-pink-200/40">
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/avatar.jpeg"
                alt={profile.name}
                width={560}
                height={360}
                className="object-cover w-full h-[360px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

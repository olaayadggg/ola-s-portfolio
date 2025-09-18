"use client";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaLaravel,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiAngular,
  SiFormik,
  SiGithubcopilot,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export default function About() {
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

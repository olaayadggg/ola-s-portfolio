"use client";
import { useParams, notFound } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profile } from "../../../lib/data";
import { useTypewriter } from "../../../lib/useTypeWriter"; // Assuming this is now adjusted to accept a trigger
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import TypewriterText from "../../../components/typewriter";
import { Typewriter } from "react-simple-typewriter";

const techIcons: Record<string, JSX.Element> = {
  React: <FaReact className="text-sky-400 text-2xl" />,
  "Next.js": <SiNextdotjs className="text-black dark:text-white text-2xl" />,
  Node: <FaNodeJs className="text-green-500 text-2xl" />,
  MongoDB: <SiMongodb className="text-green-600 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400 text-2xl" />,
  Vercel: <SiVercel className="text-black dark:text-white text-2xl" />,
};

export default function ProjectDetails() {
  const params = useParams();
  const { id } = params;
  const project = profile.projects.find((p) => p.id.toString() === id);

  if (!project) notFound();

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: timelineScrollProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const timelineGradient = useTransform(
    timelineScrollProgress,
    [0, 1],
    [
      "linear-gradient(to bottom, #ec489900, #ec4899)",
      "linear-gradient(to bottom, #ec4899, #8b5cf600)",
    ]
  );

  return (
    <div className="container py-16 lg:py-24 relative">
      {/* Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(100,50,200,0.1),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(200,50,100,0.1),transparent_70%)] z-0"></div>

      {/* Project Header */}
      <motion.header className="text-center mb-20 lg:mb-32 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-6"
          style={{
            backgroundImage: "linear-gradient(45deg, #ec4899, #8b5cf6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {project.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          {project.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          {project.tech.map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
            >
              {techIcons[t] || (
                <span className="text-gray-800 dark:text-gray-200">{t}</span>
              )}
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {t}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.header>

      {/* Hero Image */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="rounded-3xl overflow-hidden shadow-2xl relative mb-20 lg:mb-32 z-10"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
      </motion.div>

      {/* Story Timeline */}
      <div className="relative z-10" ref={timelineRef}>
        {/* Dynamic Gradient Timeline Line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-1 h-full rounded-full"
          style={{
            background: timelineGradient,
          }}
        />

        <div className="space-y-32">
          {project.story?.map((step, i) => {
            const isEven = i % 2 === 0;
            const [isInView, setIsInView] = useState(false); // State to trigger typewriter

            return (
              <div key={i} className="relative group">
                {/* Timeline Dot */}

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={(entry) => {
                    if (entry?.isIntersecting) {
                      setIsInView(true); // Trigger typewriter when this block is in view
                    } else {
                      setIsInView(false); // Reset if it scrolls out of view (optional, but good for re-scrolling)
                    }
                    return { opacity: 1, y: 0 };
                  }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true, amount: 0.4 }} // Trigger when 40% of block is in view
                  className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20`}
                >
                  {/* Image Block */}
                  <div
                    className={`w-full md:w-1/2 ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <motion.div
                      className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800"
                      initial={{ scale: 0.9, rotate: isEven ? -2 : 2 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100,
                      }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Text Block */}
                  <div
                    className={`w-full md:w-1/2 text-center ${
                      isEven
                        ? "md:order-2 md:text-left"
                        : "md:order-1 md:text-right"
                    }`}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      <motion.span
                        className="inline-block"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        {step.title}
                      </motion.span>
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                      {/* Typewriter effect triggered by isInView */}
                      {/* <TypewriterText
                        text={step.description}
                        active={isInView}
                      /> */}
                      <Typewriter
                        words={[step.description]}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        delaySpeed={1500}
                      />
                      {/* {isInView && <span className="animate-pulse">|</span>} */}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Final Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-24"
      >
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <FiExternalLink /> Live Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200 font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <FiGithub /> View Code
          </a>
        )}
      </motion.div>

      {/* Back link */}
      <div className="mt-12 text-center">
        <Link
          href="/#projects"
          className="text-pink-600 dark:text-pink-400 hover:underline transition-colors duration-300"
        >
          &larr; Back to Projects
        </Link>
      </div>
    </div>
  );
}

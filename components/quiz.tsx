"use client";
import { motion } from "framer-motion";

const jobs = [
  {
    company: "Tech Solutions Ltd",
    role: "Front-End Developer",
    year: "2022 - Present",
  },
  {
    company: "Creative Web Studio",
    role: "Junior Developer",
    year: "2020 - 2022",
  },
];

export default function Timeline() {
  return (
    <section id="experience" className="card relative">
      <h2
        className="text-3xl font-bold mb-8"
        style={{
          backgroundImage: "var(--brand-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        My Journey
      </h2>

      <div className="relative border-l-4 border-pink-300/50 ml-6">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="mb-10 ml-6"
          >
            <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-[26px] top-2 border-4 border-white"></div>
            <h3 className="text-xl font-semibold">{job.role}</h3>
            <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
            <span className="text-sm text-gray-500">{job.year}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

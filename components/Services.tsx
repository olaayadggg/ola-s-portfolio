"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaCode, FaReact, FaMobileAlt, FaPalette, FaRocket, FaCogs } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    icon: <FaReact className="text-5xl text-pink-500" />,
    desc: "Building modern, responsive web applications using React, Next.js, TypeScript, and Tailwind CSS for optimal performance and user experience.",
  },
  {
    title: "UI/UX Implementation",
    icon: <FaPalette className="text-5xl text-purple-500" />,
    desc: "Translating designs into pixel-perfect, interactive interfaces with smooth animations and intuitive user interactions.",
  },
  {
    title: "Responsive Design",
    icon: <FaMobileAlt className="text-5xl text-fuchsia-500" />,
    desc: "Creating mobile-first, responsive layouts that work seamlessly across all devices and screen sizes.",
  },
  {
    title: "Performance Optimization",
    icon: <FaRocket className="text-5xl text-blue-500" />,
    desc: "Optimizing web applications for speed, accessibility, and SEO to deliver exceptional user experiences.",
  },
  {
    title: "Component Architecture",
    icon: <FaCogs className="text-5xl text-green-500" />,
    desc: "Building reusable, maintainable component libraries and implementing clean, scalable code architecture.",
  },
  {
    title: "State Management",
    icon: <FaCode className="text-5xl text-orange-500" />,
    desc: "Implementing efficient state management solutions with Redux, Zustand, and React Query for complex applications.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2
          className="text-3xl font-bold mb-4"
          style={{
            backgroundImage: "var(--brand-gradient)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          My Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Specializing in modern front-end development with a focus on creating exceptional user experiences through cutting-edge technologies and best practices.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#ec4899"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="bg-white/80 dark:bg-white/5 rounded-2xl p-5 shadow-xl h-full hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {s.icon}
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {s.desc}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    icon: <FaCode className="text-5xl text-pink-500" />,
    desc: "Building responsive, fast, and modern web apps using React, Next.js, and cutting-edge tools.",
  },
  {
    title: "UI / UX Design",
    icon: <FaPaintBrush className="text-5xl text-purple-500" />,
    desc: "Designing sleek, user-friendly interfaces with a focus on usability and visual appeal.",
  },
  {
    title: "Mobile-Ready",
    icon: <FaMobileAlt className="text-5xl text-fuchsia-500" />,
    desc: "Ensuring seamless experiences across all devices with mobile-first designs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <h2
        className="text-3xl font-bold text-center mb-12"
        style={{
          backgroundImage: "var(--brand-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        My Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
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

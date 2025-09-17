"use client";
import Image from "next/image";
import { profile } from "../lib/data";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative">
      {/* <div className="absolute -top-40 -left-40 w-72 h-72 bg-pink-300/40 rounded-full blob"></div>
      <div className="overflow-hidden w-[100%]">
        <div className="absolute -right-40 -z-[999] top-6 w-80 h-80 bg-violet-300/30 rounded-full blob"></div>
      </div> */}

      <div className="grid md:grid-cols-2 items-center gap-8">
        <div className="space-y-6">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-6"
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
          className="mx-auto w-fit h-[580px]"
        >
          <Image
            src="/vectors/personal.png"
            alt={profile.name}
            width={450}
            height={580}
            className="object-contain w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

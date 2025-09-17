"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll for background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "backdrop-blur bg-white/60 dark:bg-gray-900/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <motion.a
          href="/"
          className="font-bold text-2xl bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ backgroundImage: "var(--brand-gradient)" }}
        >
          Ola<span className="opacity-80">.</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-sm hover:text-pink-500 transition-colors"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3 relative">
          <a
            href="/Ola ayad - front-end developer.pdf"
            download
            className="rounded-full px-6 py-3 border text-sm border-pink-200 text-pink-600 hover:bg-pink-50 dark:hover:bg-white/10 transition"
          >
            Resume
          </a>
          <a href="/#contact" className="btn text-sm">
            Hire me
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur flex"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="ml-auto w-4/5 max-w-sm bg-black text-white p-8 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              {/* Close button */}
              <button
                aria-label="Close menu"
                className="self-end text-2xl mb-6 focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                ✖
              </button>

              {/* Links */}
              <nav className="flex flex-col gap-6">
                {nav.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium hover:text-pink-400"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-8 border-t border-white/20 pt-6 flex flex-col gap-4">
                <a
                  href="/Ola ayad - front-end developer.pdf"
                  download
                  className="underline text-sm hover:text-pink-400"
                  onClick={() => setMenuOpen(false)}
                >
                  ⬇ Download Resume
                </a>

                <a
                  href="/#contact"
                  className="btn mt-2 text-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Hire me
                </a>

                <ThemeToggle />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

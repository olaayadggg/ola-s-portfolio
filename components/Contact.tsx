// 'use client';
// import { profile } from '../lib/data';
// import { motion } from 'framer-motion';

// export default function Contact() {
//   return (
//     <div className="card">
//       <h2 className="text-2xl font-bold">Contact</h2>
//       <div className="mt-4 space-y-3 text-sm">
//         <div>Email: <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
//         <div>Phone: {profile.phone}</div>
//         <div className="flex gap-4">
//           <a className="underline" target="_blank" href={profile.links.github}>GitHub</a>
//           <a className="underline" target="_blank" href={profile.links.linkedin}>LinkedIn</a>
//           <a className="underline" target="_blank" href={profile.links.portfolio}>Portfolio</a>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';
// import { profile } from '../lib/data';
// import { motion } from 'framer-motion';
// import { Mail, Phone, Github, Linkedin } from 'lucide-react';

// export default function Contact() {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="card text-center relative overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/30 via-fuchsia-100/20 to-purple-100/30 dark:from-pink-900/20 dark:via-purple-900/10 dark:to-fuchsia-900/20"></div>

//       <h2 className="relative z-10 text-3xl font-bold mb-6 bg-clip-text text-transparent"
//           style={{ backgroundImage: 'var(--brand-gradient)' }}>
//         Let’s Connect 💌
//       </h2>

//       <div className="relative z-10 space-y-4 text-sm">
//         <div className="flex justify-center gap-2 items-center">
//           <Mail className="w-4 h-4 text-pink-500" />
//           <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a>
//         </div>
//         <div className="flex justify-center gap-2 items-center">
//           <Phone className="w-4 h-4 text-pink-500" />
//           {profile.phone}
//         </div>
//         <div className="flex justify-center gap-6 mt-4">
//           <a href={profile.links.github} target="_blank" className="hover:scale-110 transition"><Github /></a>
//           <a href={profile.links.linkedin} target="_blank" className="hover:scale-110 transition"><Linkedin /></a>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// import ContactForm from "./ContactForm";
// import { profile } from "../lib/data";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="py-10 flex items-center justify-between w-full"
//     >
//       <div className="mt-4 space-y-3 text-sm">
//         <div>
//           Email:{" "}
//           <a className="underline" href={`mailto:${profile.email}`}>
//             {profile.email}
//           </a>
//         </div>
//         <div>Phone: {profile.phone}</div>
//         <div className="flex gap-4">
//           <a className="underline" target="_blank" href={profile.links.github}>
//             GitHub
//           </a>
//           <a
//             className="underline"
//             target="_blank"
//             href={profile.links.linkedin}
//           >
//             LinkedIn
//           </a>
//           <a
//             className="underline"
//             target="_blank"
//             href={profile.links.portfolio}
//           >
//             Portfolio
//           </a>
//         </div>
//       </div>
//       <ContactForm />
//     </section>
//   );
// }

"use client";
import { motion } from "framer-motion";
import { profile } from "../lib/data";
import ContactForm from "./ContactForm";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";

export default function Contact() {
  const links = [
    {
      icon: Mail,
      label: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: Phone,
      label: profile.phone,
      href: null,
    },
    {
      icon: Github,
      label: "GitHub",
      href: profile.links.github,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: profile.links.linkedin,
    },
    {
      icon: Globe,
      label: "Portfolio",
      href: profile.links.portfolio,
    },
  ];

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="relative grid md:grid-cols-2 gap-12 items-center container">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2
            className="text-4xl font-bold"
            style={{
              backgroundImage: "var(--brand-gradient)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Let’s Connect ✨
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-md leading-relaxed">
            Whether you have a project in mind, a question about my work, or
            just want to say hi 👋, I’d love to hear from you! Let’s create
            something amazing together 🚀
          </p>

          <motion.div
            className="space-y-4 text-gray-700 dark:text-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {links.map((link, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3"
              >
                <link.icon className="text-pink-500" size={20} />
                {link.href ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {link.label}
                  </a>
                ) : (
                  <span>{link.label}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { profile } from "../../../lib/data";

export default function ProjectDetails() {
  const params = useParams();
  const { id } = params; // project id from URL

  const project = profile.projects.find((p) => p.id.toString() === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold mb-6"
        style={{
          backgroundImage: "var(--brand-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        {project.title}
      </motion.h1>

      {/* Banner Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="rounded-2xl overflow-hidden shadow-xl mb-10"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[400px] object-cover"
        />
      </motion.div>

      {/* Description */}
      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Tech Stack:</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 rounded-full text-white text-sm shadow-md"
              style={{ backgroundImage: "var(--brand-gradient)" }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-6">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            🚀 Live Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            💻 View Code
          </a>
        )}
      </div>

      {/* Back link */}
      <div className="mt-12">
        <Link
          href="/#projects"
          className="text-pink-600 dark:text-pink-400 hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}

// "use client";
// import { useParams, notFound } from "next/navigation";
// import { profile } from "../../../lib/data";

// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function ProjectDetails() {
//   const params = useParams();
//   const { id } = params;

//   const project = profile.projects.find((p) => p.id.toString() === id);

//   if (!project) {
//     notFound();
//   }

//   return (
//     <div className="container py-16">
//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="text-4xl font-extrabold mb-6"
//         style={{
//           backgroundImage: "var(--brand-gradient)",
//           WebkitBackgroundClip: "text",
//           color: "transparent",
//         }}
//       >
//         {project.title}
//       </motion.h1>

//       {/* Live Preview (iframe instead of static image) */}
//       {project.demo ? (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="rounded-2xl overflow-hidden shadow-xl mb-10 border border-pink-200/40"
//         >
//           <iframe
//             src={project.demo}
//             title={project.title}
//             className="w-full h-[500px] rounded-2xl"
//             sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
//           />
//         </motion.div>
//       ) : (
//         <div className="rounded-2xl bg-gray-200 dark:bg-gray-800 h-[500px] flex items-center justify-center mb-10">
//           <p className="text-gray-600 dark:text-gray-400">No live demo available</p>
//         </div>
//       )}

//       {/* Description */}
//       <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
//         {project.description}
//       </p>

//       {/* Tech Stack */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold mb-3">Tech Stack:</h2>
//         <div className="flex flex-wrap gap-2">
//           {project.tech.map((t, i) => (
//             <motion.span
//               key={i}
//               initial={{ scale: 0.9 }}
//               whileHover={{ scale: 1.1 }}
//               className="px-3 py-1 rounded-full text-white text-sm shadow-md"
//               style={{ backgroundImage: "var(--brand-gradient)" }}
//             >
//               {t}
//             </motion.span>
//           ))}
//         </div>
//       </div>

//       {/* Links */}
//       <div className="flex gap-6">
//         {project.repo && (
//           <a
//             href={project.repo}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn"
//           >
//             💻 View Code
//           </a>
//         )}
//       </div>

//       {/* Back link */}
//       <div className="mt-12">
//         <Link
//           href="/#projects"
//           className="text-pink-600 dark:text-pink-400 hover:underline"
//         >
//           ← Back to Projects
//         </Link>
//       </div>
//     </div>
//   );
// }

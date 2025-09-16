// "use client";
// import { profile } from "../lib/data";
// import { motion } from "framer-motion";

// export default function Projects() {
//   return (
//     <div className="space-y-8">
//       <h2
//         className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent"
//         style={{ backgroundImage: "var(--brand-gradient)" }}
//       >
//         Featured Projects
//       </h2>

//       <div className="grid md:grid-cols-2 gap-8">
//         {profile.projects.map((p, i) => (
//           <motion.a
//             key={p.title}
//             href={p.demo || p.repo || "#"}
//             target="_blank"
//             rel="noopener noreferrer"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.05 * i }}
//             className="group relative rounded-2xl overflow-hidden shadow-lg border border-pink-200/30 dark:border-pink-300/20 bg-white/80 dark:bg-white/5 backdrop-blur-md hover:scale-[1.02] transition-transform"
//           >
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-pink-200/20 via-fuchsia-200/20 to-purple-200/20"></div>
//             <div className="p-6 relative z-10">
//               <h3 className="text-lg font-bold group-hover:underline">
//                 {p.title}
//               </h3>
//               <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
//                 {p.description}
//               </p>
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {p.tech.map((t) => (
//                   <span
//                     key={t}
//                     className="text-xs px-3 py-1 rounded-full bg-pink-100/70 dark:bg-pink-900/40 text-pink-700 dark:text-pink-200"
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
//                 {p.demo ? "Live Demo ↗" : "Repository ↗"}
//               </div>
//             </div>
//           </motion.a>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";
// import { profile } from "../lib/data";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";

// export default function Projects() {
//   return (
//     <section id="projects">
//       <h2
//         className="text-3xl font-bold mb-8"
//         style={{
//           backgroundImage: "var(--brand-gradient)",
//           WebkitBackgroundClip: "text",
//           color: "transparent",
//         }}
//       >
//         Featured Projects
//       </h2>
//       <div className="grid md:grid-cols-3 gap-6">
//         {profile.projects.map((p, i) => (
//           <motion.a
//             key={p.title}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             href={p.demo || p.repo || "#"}
//             target="_blank"
//             rel="noopener noreferrer"
//             transition={{ duration: 0.6, delay: 0.05 * i }}
//           >
//             <Tilt
//               className="bg-white/80 h-full dark:bg-white/5 rounded-2xl p-4 shadow-xl"
//               glareEnable={true}
//               glareMaxOpacity={0.2}
//               scale={1.02}
//             >
//               <div className="h-40 rounded-lg overflow-hidden bg-gradient-to-br from-pink-200 to-violet-200 flex items-center justify-center text-white font-bold">
//                 <div className="text-lg">{p.title}</div>
//               </div>
//               <div className="mt-4 flex flex-col justify-between">
//                 <div>
//                   <h3 className="font-semibold">{p.title}</h3>
//                   <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
//                     {p.description}
//                   </p>
//                   <div className="mt-3 flex flex-wrap gap-2">
//                     {p.tech.map((t) => (
//                       <motion.span
//                         key={t}
//                         initial={{ scale: 0.9 }}
//                         whileHover={{ scale: 1.1, rotate: 2 }}
//                         className="px-2 py-1 rounded-full text-white shadow-md"
//                         style={{ backgroundImage: "var(--brand-gradient)" }}
//                       >
//                         {t}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mt-4 flex gap-2">
//                   <div className="mt-4 text-sm text-violet-600 dark:text-violet-400">
//                     {p.demo ? "Live Demo ↗" : "Repository ↗"}
//                   </div>
//                 </div>
//               </div>
//             </Tilt>
//           </motion.a>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";
// import { profile } from "../lib/data";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20">
//       <h2
//         className="text-4xl font-extrabold mb-12 text-center"
//         style={{
//           backgroundImage: "var(--brand-gradient)",
//           WebkitBackgroundClip: "text",
//           color: "transparent",
//         }}
//       >
//         Featured Projects
//       </h2>

//       <Swiper
//         modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
//         spaceBetween={40}
//         slidesPerView={1}
//         centeredSlides={true}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         effect="coverflow"
//         loop={true}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 120,
//           modifier: 1,
//           slideShadows: true,
//         }}
//         breakpoints={{
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         className="max-w-7xl mx-auto"
//       >
//         {profile.projects.map((p, i) => (
//           <SwiperSlide key={p.id}>
//             <motion.a
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               href={p.demo || p.repo || "#"}
//               target="_blank"
//               rel="noopener noreferrer"
//               transition={{ duration: 0.6, delay: 0.05 * i }}
//               className="block"
//             >
//               <Tilt
//                 className="bg-white/80 dark:bg-white/5 rounded-2xl p-5 shadow-xl h-full"
//                 glareEnable={true}
//                 glareMaxOpacity={0.2}
//                 scale={1.05}
//               >
//                 {/* Project Banner */}
//                 <div className="h-48 rounded-xl overflow-hidden bg-gradient-to-br from-pink-300 via-fuchsia-400 to-violet-400 flex items-center justify-center text-white font-bold">
//                   {/* <div className="text-xl">{p.title}</div> */}
//                   <img src={p.image} alt="" className="h-full w-full shrink-0" />
//                 </div>

//                 {/* Project Content */}
//                 <div className="mt-5 flex flex-col justify-between h-full">
//                   <div>
//                     <h3 className="font-semibold text-lg">{p.title}</h3>
//                     <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
//                       {p.description}
//                     </p>
//                     <div className="mt-3 flex flex-wrap gap-2">
//                       {p.tech.map((t) => (
//                         <motion.span
//                           key={t}
//                           initial={{ scale: 0.9 }}
//                           whileHover={{ scale: 1.1, rotate: 2 }}
//                           className="px-2 py-1 rounded-full text-white shadow-md text-xs"
//                           style={{ backgroundImage: "var(--brand-gradient)" }}
//                         >
//                           {t}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="mt-4 text-sm text-violet-600 dark:text-violet-400 font-medium">
//                     {p.demo ? "Live Demo ↗" : "Repository ↗"}
//                   </div>
//                 </div>
//               </Tilt>
//             </motion.a>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// }
"use client";
import { profile } from "../lib/data";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Projects() {
  const router = useRouter();

  return (
    <section id="projects" className="py-20">
      <h2
        className="text-4xl font-extrabold mb-12 text-center"
        style={{
          backgroundImage: "var(--brand-gradient)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Featured Projects
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={40}
        slidesPerView={1}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="coverflow"
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {profile.projects.map((p, i) => (
          <SwiperSlide key={p.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * i }}
              className="block h-full cursor-pointer"
              onClick={() => router.push(`/project/${p.id}`)} // navigate to project page
            >
              <Tilt
                className="bg-white/80 dark:bg-white/5 rounded-2xl p-5 shadow-xl h-full"
                glareEnable={true}
                glareMaxOpacity={0.2}
                scale={1.05}
              >
                {/* Project Banner */}
                <div className="h-48 rounded-xl overflow-hidden bg-gradient-to-br from-pink-300 via-fuchsia-400 to-violet-400 flex items-center justify-center text-white font-bold">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                </div>

                {/* Project Content */}
                <div className="mt-5 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-semibold text-lg">{p.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {p.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <motion.span
                          key={t}
                          initial={{ scale: 0.9 }}
                          whileHover={{ scale: 1.1, rotate: 2 }}
                          className="px-2 py-1 rounded-full text-white shadow-md text-xs"
                          style={{ backgroundImage: "var(--brand-gradient)" }}
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Demo Button */}
                  {p.demo && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // prevent card navigation
                        window.open(p.demo, "_blank");
                      }}
                      className="mt-4 text-sm text-violet-600 dark:text-violet-400 font-medium underline"
                    >
                      Live Demo ↗
                    </button>
                  )}
                </div>
              </Tilt>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

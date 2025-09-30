// "use client";
// import { profile } from "../lib/data";
// import Tilt from "react-parallax-tilt";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Autoplay,
//   EffectCoverflow,
// } from "swiper/modules";
// import { useRouter } from "next/navigation";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";

// export default function Projects() {
//   const router = useRouter();

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
//               href={`/project/${p.id}`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.05 * i }}
//               className="block h-full cursor-pointer"
//             >
//               <Tilt
//                 className="bg-white/80 dark:bg-white/5 rounded-2xl p-5 shadow-xl h-full"
//                 glareEnable={true}
//                 glareMaxOpacity={0.2}
//                 scale={1.05}
//               >
//                 {/* Project Banner */}
//                 <div className="h-48 rounded-xl overflow-hidden bg-gradient-to-br from-pink-300 via-fuchsia-400 to-violet-400 flex items-center justify-center text-white font-bold">
//                   <img
//                     src={p.image}
//                     alt={p.title}
//                     className="h-full w-full object-cover"
//                   />
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
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { useRouter } from "next/navigation";
import { useRef } from "react"; // Import useRef

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Projects() {
  const swiperRef = useRef<any>(null); // Ref to store Swiper instance

  // Create multiple copies of projects for seamless infinite scrolling
  const duplicatedProjects = [...profile.projects, ...profile.projects];

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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          reverseDirection: false,
          waitForTransition: true,
        }}
        speed={800}
        effect="coverflow"
        loop={true}
        loopAdditionalSlides={4}
        allowTouchMove={true}
        grabCursor={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            loopAdditionalSlides: 3,
            spaceBetween: 30,
            autoplay: { delay: 3000, disableOnInteraction: false },
          },
          1024: {
            slidesPerView: 3,
            loopAdditionalSlides: 4,
            spaceBetween: 40,
            autoplay: { delay: 3500, disableOnInteraction: false },
          },
        }}
        className="max-w-7xl mx-auto"
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Store the swiper instance
          // Ensure autoplay starts immediately and handle any potential issues
          setTimeout(() => {
            if (swiper && swiper.autoplay) {
              swiper.autoplay.start();
            }
          }, 100);
        }}
        onSlideChange={() => {
          // Ensure autoplay continues after slide changes
          if (
            swiperRef.current?.autoplay &&
            !swiperRef.current.autoplay.running
          ) {
            swiperRef.current.autoplay.start();
          }
        }}
      >
        {duplicatedProjects.map((p, i) => (
          <SwiperSlide key={`${p.id}-${i}`}>
            <div className="h-[450px] flex items-center justify-center">
              <motion.a
                href={`/project/${p.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.05 * (i % profile.projects.length),
                }}
                className="block h-full w-full cursor-pointer"
                // Add mouse event handlers here
                onMouseEnter={() => {
                  if (swiperRef.current?.autoplay) {
                    swiperRef.current.autoplay.pause();
                  }
                }}
                onMouseLeave={() => {
                  if (swiperRef.current?.autoplay) {
                    swiperRef.current.autoplay.resume();
                  }
                }}
              >
                <Tilt
                  className="bg-white/80 dark:bg-white/5 rounded-2xl p-5 shadow-xl h-full w-full flex flex-col"
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  scale={1.05}
                >
                  {/* Project Banner - Fixed height */}
                  <div className="h-48 rounded-xl overflow-hidden bg-gradient-to-br from-pink-300 via-fuchsia-400 to-violet-400 flex items-center justify-center text-white font-bold flex-shrink-0">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Project Content - Flexible height */}
                  <div className="mt-5 flex flex-col justify-between flex-grow">
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed line-clamp-3">
                        {p.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
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
                </Tilt>
              </motion.a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

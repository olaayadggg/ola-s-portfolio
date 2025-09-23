export const profile = {
  name: "Ola Ayad",
  title: "Front-End Developer",
  location: "Alexandria, Egypt",
  summary:
    "Front-end developer focused on building clean, accessible interfaces with React/Next.js. Passionate about UX, performance, and maintainable architecture.",
  email: "olaayad222@gmail.com",
  phone: "+201554519478",
  links: {
    github: "https://github.com/olaayadggg",
    linkedin: "https://linkedin.com/in/ola-ayad/",
    portfolio: "https://ola-s-portfolio-two.vercel.app/",
  },
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript (ES202x)",
    "Tailwind CSS",
    "Framer Motion",
    "Redux Toolkit / Zustand",
    "React Query",
    "REST APIs",
    "Supabase",
    "Firebase",
    "Git",
    "Vercel",
    "Responsive Design",
    "Accessibility (a11y)",
  ],
  experience: [
    {
      company: "Devjets",
      role: "Part time Front-End Developer",
      period: "2025 — Present",
      points: [
        "Designed and implemented scalable, responsive web application for Devjets’ product suite using Next.js, ensuring performance and maintainability.",
        "Improved UI/UX and front-end optimization, reducing page load times by up to 40% and enhancing accessibility, which increased user engagement and retention.",
        "Collaborated with cross-functional teams to deliver feature-rich, customer-centric solutions, leveraging AI-driven development workflows to accelerate releases and improve code quality.",
      ],
    },
    {
      company: "Stackdeans",
      role: "Full time Front-End Developer",
      period: "2024 — 2025",
      points: [
        "Developed dynamic, responsive, and user-centric web applications using Angular, React.js, and Next.js.",
        "Built efficient front-end architectures and optimized UI performance for seamless user experiences.",
        "Integrated REST APIs and improved UI/UX for multiple client projects.",
        "Collaborated with cross-functional teams to deliver scalable solutions, enhancing user experience and interface usability.",
        "Learned best practices for Git, agile teamwork, and code reviews.",
      ],
    },
  ],

  projects: [
    {
      id: 0,
      title: "Devjets app",
      description:
        "A full-featured calendar with drag-and-drop events, recurring rules, and timezone awareness.",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Redux toolkit",
        "RTK",
        "Unleash",
        "i18n",
        "Infisical",
        "Google Analytics",
        "Hotjar",
      ],
      // repo: "https://github.com/your-username/calendar",
      demo: "https://devjets.io/",
      image: "/devjets.png",
      story: [
        {
          image: "/devjets.png",
          title: "The Hero Section",
          description:
            "An animated hero with typewriter effect and smooth neon background.",
        },
        {
          image: "/devjets.png",
          title: "Projects Slider",
          description:
            "A 3D Swiper slider to showcase my projects interactively.",
        },
        {
          image: "/devjets.png",
          title: "Contact Form",
          description:
            "A Formik-powered contact form with EmailJS integration.",
        },
      ],
    },
    {
      id: 1,
      title: "Digitsole dashboard",
      description:
        "A simulation to a smart Gait & Body Analytics Dashboard that helps users seamlessly track activity, monitor performance, and gain personalized insights through intuitive dashboards and interactive features.",
      tech: ["Next.js", "Context api", "Tailwind", "Supabase"],
      // repo: "https://github.com/your-username/kanban",
      demo: "https://digitsole-gules.vercel.app/",
      image: "/digitsole.png",
      story: [
        {
          image: "/digitsole/digitsole1.png",
          title: "Authentication",
          description: "A fully frontend authentication using Supabase",
        },
        {
          image: "/digitsole/digitsole2.png",
          title: "Enter your info",
          description: "Enter 3 basic info to start making the matching logic",
        },
        {
          image: "/digitsole/digitsole3.png",
          title: "Start analizing",
          description: "Display your matching results on an interactive charts",
        },
        {
          image: "/digitsole/digitsole4.png",
          title: "Equipment",
          description: "A little information about the device equipment",
        },
        {
          image: "/digitsole/digitsole5.png",
          title: "A simple demo",
          description: "A simple demo to tell users about the app",
        },
      ],
    },
    {
      id: 2,
      title: "Weconnect",
      description:
        "An employee management app with task tracking, dashboards, and job scheduling.",
      tech: ["Next.js", "Redux Toolkit", "Tailwind css", "React Query"],
      repo: "",
      demo: "",
      image: "/weconnect.png",
      story: [
        {
          image: "/weconnect.png",
          title: "The Hero Section",
          description:
            "An animated hero with typewriter effect and smooth neon background.",
        },
        {
          image: "/weconnect.png",
          title: "Projects Slider",
          description:
            "A 3D Swiper slider to showcase my projects interactively.",
        },
        {
          image: "/weconnect.png",
          title: "Contact Form",
          description:
            "A Formik-powered contact form with EmailJS integration.",
        },
      ],
    },
    {
      id: 3,
      title: "Zawaj 48",
      description:
        "A full featured admin dashboard for Zawaj 48 application that manages users and subscriptions. including filters and ",
      tech: ["Angular", "Bootstrap 5", "Scss"],
      // repo: "https://github.com/your-username/ecommerce",
      // demo: "https://ecommerce-demo.example.com",
      image: "/zawaj.jpg",
      story: [
        {
          image: "/zawaj.jpg",
          title: "The Hero Section",
          description:
            "An animated hero with typewriter effect and smooth neon background.",
        },
        {
          image: "/zawaj.jpg",
          title: "Projects Slider",
          description:
            "A 3D Swiper slider to showcase my projects interactively.",
        },
        {
          image: "/zawaj.jpg",
          title: "Contact Form",
          description:
            "A Formik-powered contact form with EmailJS integration.",
        },
      ],
    },
  ],
};

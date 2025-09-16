
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Inter", "sans-serif"],
        body: ["ui-sans-serif", "system-ui", "Inter", "sans-serif"]
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
};
export default config;

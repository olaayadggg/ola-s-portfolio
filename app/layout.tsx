import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NeonBackground from "../public/vectors/NeonBackground";
import DynamicGradientBackground from "../components/DynamicBackground";

export const metadata = {
  title: "Ola Ayad • Front-End Developer",
  description: "Portfolio of Ola Ayad, Front-End Developer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <NeonBackground /> */}
          <DynamicGradientBackground />
          <div className="relative z-10 min-h-screen flex flex-col">
            <Navbar />
            <main className="container flex-grow py-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

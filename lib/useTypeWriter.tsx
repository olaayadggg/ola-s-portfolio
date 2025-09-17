// import { useState, useEffect } from "react";

// export function useTypewriter(text: string, speed = 40) {
//   const [displayed, setDisplayed] = useState("");

//   useEffect(() => {
//     setDisplayed(""); // reset on text change
//     let i = 0;
//     const interval = setInterval(() => {
//       setDisplayed((prev) => prev + text.charAt(i));
//       i++;
//       if (i >= text.length) clearInterval(interval);
//     }, speed);
//     return () => clearInterval(interval);
//   }, [text, speed]);

//   return displayed;
// }
// A new, standalone `useTypewriter` hook
import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, active: boolean) => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!active || isTyping) return;
    setIsTyping(true);

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false); // Reset for potential re-typing on re-render if needed
      }
    }, 50); // Adjust typing speed here

    return () => {
      clearInterval(typingInterval);
      setTypedText(''); // Clear text when element unmounts or becomes inactive
    };
  }, [text, active]);

  return typedText;
};
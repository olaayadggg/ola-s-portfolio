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
import { useState, useEffect, useRef } from 'react';

export const useTypewriter = (text: string, active: boolean) => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!active) {
      setTypedText("");
      setIsTyping(false);
      hasStartedRef.current = false;
      return;
    }

    if (hasStartedRef.current) return; // Don't restart if already completed
    
    setIsTyping(true);
    hasStartedRef.current = true;

    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setTypedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 50); // Adjust typing speed here

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, active]);

  return typedText;
};
import { useTypewriter } from "../lib/useTypeWriter";

export default function TypewriterText({ text, active }: { text: string; active: boolean }) {
  const typedText = useTypewriter(text, active);
  return (
    <>
      {typedText}
      <span className="animate-pulse">|</span>
    </>
  );
}


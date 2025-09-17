import { useTypewriter } from "../lib/useTypeWriter";

export default function TypewriterText({ text, active }: { text: string; active: any }) {
  const typedText = useTypewriter(text, active);
  return <>{typedText}</>;
}


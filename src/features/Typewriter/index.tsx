import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string[];
  cursor?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseSpeed?: number;
}

enum Phase {
  Typing,
  Pausing,
  Deleting,
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  typeSpeed = 120,
  deleteSpeed = 60,
  cursor = "",
  pauseSpeed = 1000,
}) => {
  const [phase, setPhase] = useState(Phase.Typing);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    switch (phase) {
      case Phase.Typing: {
        const nextDisplayedText = text[selectedIndex].slice(
          0,
          displayedText.length + 1
        );

        if (nextDisplayedText === displayedText) {
          setPhase(Phase.Pausing);
          return;
        }

        const timeout = setTimeout(() => {
          setDisplayedText(nextDisplayedText);
        }, typeSpeed);
        return () => clearTimeout(timeout);
      }
      case Phase.Deleting: {
        if (!displayedText) {
          const nextIndex = selectedIndex + 1;
          setSelectedIndex(text[nextIndex] ? nextIndex : 0);
          setPhase(Phase.Typing);
          return;
        }

        const nextTextRemaining = text[selectedIndex].slice(
          0,
          displayedText.length - 1
        );

        const timeout = setTimeout(() => {
          setDisplayedText(nextTextRemaining);
        }, deleteSpeed);

        return () => clearTimeout(timeout);
      }
      case Phase.Pausing:
      default: {
        const timeout = setTimeout(() => {
          setPhase(Phase.Deleting);
        }, pauseSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [
    phase,
    pauseSpeed,
    typeSpeed,
    selectedIndex,
    displayedText,
    deleteSpeed,
    text,
  ]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 550);

    return () => clearInterval(cursorInterval);
  }, []);
  return (
    <span>
      {displayedText}
      {cursor && showCursor && <span>{cursor}</span>}
    </span>
  );
};

export default Typewriter;

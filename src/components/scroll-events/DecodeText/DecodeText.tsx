import React, { useRef, useEffect, useState } from "react";
import "./styles.scss";

interface DecodeTextProps {
  text: string;
}
const DecodeText: React.FC<DecodeTextProps> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState(text); // State to manage current text displayed
  const [randomOrder, setRandomOrder] = useState<number[]>([]);

  useEffect(() => {
    const originalText = text.split("");
    const randomChars = originalText.map(() => randChar());

    // Generate a random order for the indices
    const indices = originalText.map((_, idx) => idx);
    const shuffledIndices = shuffleArray(indices);
    setRandomOrder(shuffledIndices);

    const handleMouseOver = () => {
      let resolvedIndices: Set<number> = new Set();
      const interval = setInterval(() => {
        if (resolvedIndices.size >= originalText.length) {
          clearInterval(interval);
          setDisplayedText(text); // Final text after full animation
          return;
        }

        const nextIndex = shuffledIndices[resolvedIndices.size]; // Get next random index
        resolvedIndices.add(nextIndex); // Mark this index as resolved

        // Rebuild the text, keeping resolved letters intact
        const updatedText = originalText.map((char, idx) =>
          resolvedIndices.has(idx) ? char : randChar()
        );
        setDisplayedText(updatedText.join(""));
      }, 100); // Speed of resolving letters

      setTimeout(() => {
        clearInterval(interval); // Clear interval if hover ends early
        setDisplayedText(text); // Reset text if the animation doesn't complete
      }, originalText.length * 100 + 500); // Animation duration based on text length
    };

    const element = textRef.current;
    if (element) {
      element.addEventListener("pointerover", handleMouseOver);
    }

    return () => {
      if (element) {
        element.removeEventListener("pointerover", handleMouseOver);
      }
    };
  }, [text]);

  // Helper function to generate random characters
  const randChar = () => {

    const characters = "▒█░!@#$^&*()…æ_█████-=;██/~`";
    const randomChar =
      characters[Math.floor(Math.random() * characters.length)];
    return Math.random() > 0.5 ? randomChar : randomChar.toUpperCase();
  };

  // Helper function to shuffle an array (Fisher-Yates shuffle)
  const shuffleArray = (array: number[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <div className="coded-text" ref={textRef}>
      {displayedText}
    </div>
  );
};

export default DecodeText;

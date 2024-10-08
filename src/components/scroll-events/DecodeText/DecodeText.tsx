// DecodeText.tsx

import React, { useState, useRef } from "react";
import "./styles.scss";

interface DecodeTextProps {
  text: string;
  duration?: number; // Total duration of the decoding animation in milliseconds
  scrambleInterval?: number; // Interval for scrambling characters in milliseconds
}

const DecodeText: React.FC<DecodeTextProps> = ({
  text,
  duration = 2000,
  scrambleInterval = 50,
}) => {
  const [decodedText, setDecodedText] = useState<string[]>(
    text.split("").map((char) => (char === " " ? " " : ""))
  );
  const [isActive, setIsActive] = useState(false);
  const intervalRefs = useRef([]);

  // Utility function to generate a random character
  const getRandomChar = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  // Function to start the decoding animation
  const startDecoding = () => {
    if (isActive) return; // Prevent re-triggering
    setIsActive(true);

    const characters = text.split("");
    const remainingIndices: number[] = [];

    // Identify indices that need to be scrambled (exclude spaces)
    characters.forEach((char, index) => {
      if (char !== " ") {
        remainingIndices.push(index);
      } else {
        // For spaces, ensure they are set immediately
        setDecodedText((prev) => {
          const newDecoded = [...prev];
          newDecoded[index] = " ";
          return newDecoded;
        });
      }
    });

    // Start scrambling for non-space characters
    remainingIndices.forEach((charIndex) => {
      const interval = setInterval(() => {
        setDecodedText((prev) => {
          const newDecoded = [...prev];
          if (newDecoded[charIndex] !== characters[charIndex]) {
            newDecoded[charIndex] = getRandomChar();
          }
          return newDecoded;
        });
      }, scrambleInterval);
      intervalRefs.current[charIndex] = interval;
    });

    // Resolve characters at random times within the duration
    remainingIndices.forEach((charIndex) => {
      const resolveTime = Math.random() * duration;
      setTimeout(() => {
        clearInterval(intervalRefs.current[charIndex]);
        setDecodedText((prev) => {
          const newDecoded = [...prev];
          newDecoded[charIndex] = characters[charIndex];
          return newDecoded;
        });
      }, resolveTime);
    });

    // Cleanup all intervals after the total duration
    setTimeout(() => {
      remainingIndices.forEach((charIndex) => {
        clearInterval(intervalRefs.current[charIndex]);
      });
    }, duration + 100);
  };

  return (
    <div className="DecodeText">
      <button
        onClick={startDecoding}
        className="trigger-button"
        aria-label="Trigger decode effect"
      >
        Decode Text
      </button>
      <div className="decode-text-wrapper">
        {decodedText.map((char, index) => (
          <span
            key={index}
            className={`decode-char ${
              isActive && char === text[index] ? "resolved" : ""
            }`}
          >
            {char || "\u00A0"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DecodeText;

import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";

interface WipeTextProps {
  text: string;
  triggerOn?: "click" | "load" | "scroll";
}

const WipeText: React.FC<WipeTextProps> = ({ text, triggerOn = "click" }) => {
  const [isActive, setIsActive] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (triggerOn === "load") {
      setIsActive(true);
    } else if (triggerOn === "scroll" && textRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsActive(true);
              observer.disconnect(); // Stop observing after trigger
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );

      observer.observe(textRef.current);

      return () => {
        if (textRef.current) {
          observer.unobserve(textRef.current);
        }
      };
    }
  }, [triggerOn]);

  const handleClick = () => {
    if (triggerOn === "click") {
      setIsActive(true);
    }
  };

  return (
    <div className="WipeText">
      {triggerOn === "click" && (
        <button onClick={handleClick} className="trigger-button">
          Trigger Effect
        </button>
      )}
      <div ref={textRef} className={`text-wrapper ${isActive ? "active" : ""}`}>
        <span className="text">{text}</span>
        <div className="overlay-bar"></div>
      </div>
    </div>
  );
};

export default WipeText;

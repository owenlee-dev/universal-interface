// PopperHoverLink.tsx

import React from "react";
import "./styles.scss";

interface PopperHoverLinkProps {
  text?: string;
}

const PopperHoverLink: React.FC<PopperHoverLinkProps> = ({
  text = "solutions",
}) => {
  const letters = text.split("");

  return (
    <div className="PopperHoverLink">
      <ul>
        <li>
          <a href="#" aria-label={text}>
            <span className="bottom-letters">
              {letters.map((letter, index) => (
                <span key={`letters-${index}`} className="nav-a-letter">
                  {letter}
                </span>
              ))}
            </span>
            <span className="stripe stripe--yellow"> </span>
            <span className="stripe stripe--turquoise"> </span>
            <span className="stripe stripe--purple"> </span>
            <span className="top-letters">
              {letters.map((letter, index) => (
                <span key={`top-letters-${index}`} className="bottom-letters">
                  {letter}
                </span>
              ))}
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PopperHoverLink;

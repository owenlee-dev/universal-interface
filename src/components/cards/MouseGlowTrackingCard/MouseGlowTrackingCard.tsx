// src/components/Card/Card.tsx

import React from "react";
import "./styles.scss";

interface MouseGlowTrackingCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MouseGlowTrackingCard: React.FC<MouseGlowTrackingCard> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="MouseGlowTrackingCard">
      {icon}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default MouseGlowTrackingCard;

// src/components/GlowMouseTracking/GlowMouseTracking.tsx

import React, { useEffect, useRef } from "react";
import "./styles.scss";
import MouseGlowTrackingCard from "../cards/MouseGlowTrackingCard/MouseGlowTrackingCard";

import {
  IoBrowsers,
  IoLaptopSharp,
  IoLeafSharp,
  IoPeopleCircle,
  IoPeopleSharp,
  IoShield,
} from "react-icons/io5";
import { IoIosClock } from "react-icons/io";
// interface GlowMouseTrackingProps {}

const cardData = [
  {
    title: "Virus & threat protection",
    description: "No action needed.",
    icon: <IoShield />,
  },
  {
    title: "Account protection",
    description: "No action needed.",
    icon: <IoPeopleSharp />,
  },
  {
    title: "Firewall & network protection",
    description: "No action needed.",
    icon: <IoBrowsers />,
  },
  {
    title: "App & browser control",
    description: "No action needed.",
    icon: <IoLaptopSharp />,
  },
  {
    title: "Device security",
    description: "View status and manage hardware security features.",
    icon: <IoLeafSharp />,
  },
  {
    title: "Protection history",
    description: "View latest protection actions and recommendations.",
    icon: <IoIosClock />,
  },
  {
    title: "Family options",
    description: "Manage how your family uses their devices.",
    icon: <IoPeopleCircle />,
  },
];

const GlowMouseTracking: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        gridRef.current.style.setProperty("--x", `${e.clientX}px`);
        gridRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    const gridElement = gridRef.current;

    if (gridElement) {
      gridElement.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup event listener on component unmount
    return () => {
      if (gridElement) {
        gridElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <div className="GlowMouseTracking">
      <div className="grid" ref={gridRef}>
        {cardData.map((card, index) => (
          <MouseGlowTrackingCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default GlowMouseTracking;

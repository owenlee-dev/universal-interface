import React from "react";
import "./styles.scss";

interface CoreyDonenfeldButtonProps {
  href?: string;
  children: React.ReactNode;
}

const CoreyDonenfeldButton: React.FC<CoreyDonenfeldButtonProps> = ({
  href = "#",
  children,
}) => {
  return (
    <a href={href} className="CoreyDonenfeldButton">
      {children}
    </a>
  );
};

export default CoreyDonenfeldButton;

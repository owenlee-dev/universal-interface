import React from "react";
import "./styles.scss";

interface CoreyDonenfeldButtonProps {
  href?: string;
  children: React.ReactNode;
  onClick: any;
}

const CoreyDonenfeldButton: React.FC<CoreyDonenfeldButtonProps> = ({
  href = "#",
  children,
  onClick,
}) => {
  return (
    <a href={href} onClick={onClick} className="CoreyDonenfeldButton">
      {children}
    </a>
  );
};

export default CoreyDonenfeldButton;

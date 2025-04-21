import React from "react";
import "./styles.scss";

type SondereggerButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const SondereggerButton: React.FC<SondereggerButtonProps> = ({
  onClick,
  children,
}) => {
  return (
    <button className="SondereggerButton" onClick={onClick}>
      {children ? children : <span>Click Me</span>}
    </button>
  );
};
export default SondereggerButton;

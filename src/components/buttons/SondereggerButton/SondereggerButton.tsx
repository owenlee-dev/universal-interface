import React from "react";
import "./styles.scss";

type SondereggerButtonProps = { onClick: () => void };

const SondereggerButton: React.FC<SondereggerButtonProps> = ({ onClick }) => {
  return (
    <button className="SondereggerButton" onClick={onClick}>
      <span>Click Me</span>
    </button>
  );
};
export default SondereggerButton;

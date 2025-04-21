import "./styles.scss";

interface WipeTextProps {
  text: string;
  className?: string;
}

const WipeText: React.FC<WipeTextProps> = ({ text, className = "" }) => {
  return (
    <div className={`WipeText ${className}`}>
      <span className="wipe-text">{text}</span>
      <div className="wipe-overlay"></div>
    </div>
  );
};

export default WipeText;

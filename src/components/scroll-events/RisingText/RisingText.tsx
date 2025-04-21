import React from "react";
import "./styles.scss";
import { motion } from "framer-motion";

type RisingTextProps = {
  text: string | React.ReactNode;
};

function RisingText({ text }: RisingTextProps) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity }}
      whileHover={{ rotate: 0 }}
      className="RisingText"
    >
      {text}
    </motion.div>
  );
}

export default RisingText;

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import "./styles.scss";
type CoompactModalProps = { message?: string | React.ReactNode };

function CompactModal({ message }: CoompactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="modal-button-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.dialog
            layoutId="dialog"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            open
            className="CompactModal"
          >
            <motion.div layoutId="dialog-content">
              <h2>Family Dialog</h2>
              <p>This is a shared layout animation example.</p>
              <motion.button onClick={() => setIsOpen(false)}>
                Close
              </motion.button>
              <motion.button
                layoutId="dialog-button"
                className="accept-btn"
                onClick={handleOpenModal}
              >
                Receive
              </motion.button>
            </motion.div>
          </motion.dialog>
        )}
        <motion.button
          layoutId="dialog-button"
          className="accept-btn"
          onClick={handleOpenModal}
        >
          Receive
        </motion.button>
      </AnimatePresence>
    </div>
  );
}

export default CompactModal;

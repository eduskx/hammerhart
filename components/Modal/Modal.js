import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.js";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete</button>
      {showModal &&
        createPortal(
          <ModalContent onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}

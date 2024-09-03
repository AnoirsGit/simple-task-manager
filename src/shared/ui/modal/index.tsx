import { ReactNode } from "react";
import ReactDOM from "react-dom";
import './index.css'

const Modal = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
        >
          sdf
          {children}
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;

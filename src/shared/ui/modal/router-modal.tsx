import ReactDOM from "react-dom";
import "./index.css";
import { Outlet, useNavigate } from "react-router-dom";

const RouterModal = () => {
  const modalRoot = document.getElementById("modal-root");
  const navigate = useNavigate();

  if (!modalRoot) return null;
  const handleClose = () => navigate('/tasks');

  return ReactDOM.createPortal(
    <>
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <Outlet />
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default RouterModal;

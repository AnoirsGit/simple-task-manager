import { ReactNode } from "react";

const ModalContent = ({ children }: { children: ReactNode}) => {
  return  <div className="modal-internal-content">{children}</div>
};

export default ModalContent;

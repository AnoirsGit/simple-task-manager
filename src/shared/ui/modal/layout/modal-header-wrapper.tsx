import { ReactNode } from "react";

const ModalHeader = ({ children }: { children: ReactNode}) => {
  return  <div className="modal-header">{children}</div>
};

export default ModalHeader;

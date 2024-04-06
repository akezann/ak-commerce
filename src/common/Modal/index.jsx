import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, showModal, handleClickOutside }) => {
  return ReactDOM.createPortal(
    <>
      {showModal ? (
        <div
          onClick={handleClickOutside}
          className="bg-black bg-opacity-25 w-full h-screen fixed top-0 left-0  z-10 flex justify-center items-center"
        >
          {children}
        </div>
      ) : null}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;

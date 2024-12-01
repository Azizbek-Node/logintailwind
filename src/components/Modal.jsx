import React from "react";

const Modal = ({ children, close }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40"
        onClick={close}
      ></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        {children}
      </div>
    </>
  );
};

export default Modal;

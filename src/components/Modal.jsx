import React, { useEffect } from "react";
import ReactDOM from "react-dom";

export const Modal = ({ onClose, children, actionBar }) => {
  // for disabling scroll
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    // clean up function
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  //for creating a portal we have to create a div in index.html and we will make a portal to that div
  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80" //first div is for gray background to disable the screen second div is for modal
        onClick={onClose}
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
};

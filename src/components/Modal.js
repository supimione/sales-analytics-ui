// Modal.js
import React from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ title, isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-lg">
          <h2 className="text-base font-semibold">{title}</h2>
          <IoMdClose onClick={onClose} className="cursor-pointer text-xl" />
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";

export default function AddButton({ onAdd }) {
  return (
    <>
      <button
        onClick={onAdd}
        className="z-40 fixed bottom-8 right-8 p-4 bg-blue-500 shadow-blue-500/50 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
      >
        <FaPlus className="text-lg" />
      </button>
    </>
  );
}

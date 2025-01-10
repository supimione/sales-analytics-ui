// components/Header.js
"use client";

import React from "react";

export default function PageHeader({ pageTitle, handleAddPopup, buttonTitle }) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl font-bold">{pageTitle}</h1>
      <button
        className="px-4 py-2 text-sm text-white bg-[#597cff] rounded hover:bg-sky-700"
        onClick={handleAddPopup}
      >
        {buttonTitle}
      </button>
    </div>
  );
}

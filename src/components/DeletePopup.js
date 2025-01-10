// components/Header.js
"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";

export default function DeletePopup({
  handleOpenDeletePop,
  handleCancelDelete,
  handleConfirmDelete,
}) {
  if (!handleOpenDeletePop) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Confirm Deletion</h3>
          <IoMdClose
            onClick={handleCancelDelete}
            className="cursor-pointer text-xl"
          />
        </div>
        <p className="mb-6">Are you sure you want to delete this item?</p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleCancelDelete}
            className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmDelete}
            className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}

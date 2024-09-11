// components/Header.js
"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";

export default function CreateSalePopup({
  isOpen,
  onClose,
  title,
  okBtnText,
  handleSubmit,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">{title}</h2>
          <IoMdClose onClick={onClose} className="cursor-pointer text-xl" />
        </div>

        <div className="p-4 space-y-4">
          <p className="mb-4 text-sm">
            The field labels marked with * are required input fields.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block mb-2 text-sm font-medium">
                Ticket ref no.
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                value="TKT-20240910-092411"
                readonly
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Customer *
              </label>
              <select className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none">
                <option value="">-</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Date *</label>
              <input
                type="date"
                className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                value="2024-09-10"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Session *
              </label>
              <select className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none">
                <option value="EVE">EVE (20:00)</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Lottery *
              </label>
              <select className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none">
                <option value="">Select Lottery</option>
              </select>
            </div>
          </div>

          <p className="text-green-500 font-bold mb-4">
            Total Ticket Qt.: 0, Total Price: 0
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Same *</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                value="1"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Group *</label>
              <select className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none">
                <option value="30">30</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">From *</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">To *</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Count *</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">
                Ticket Qt. *
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Price *</label>
              <input
                type="text"
                className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end bg-gray-100 p-4 rounded-b-lg space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
            onClick={handleSubmit}
          >
            {okBtnText}
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { IoMdClose } from "react-icons/io";
import masterData from "@/data/masterData.json";

export default function CreateSalePopup({
  isOpen,
  title,
  ticketRef = true,
  btnText,
  onClose,
  onCreate,
}) {
  if (!isOpen) return null;

  const CustomerNames = ["Rahit", "Ram", "Dip"];
  const lotteryData = ["DEAR", "DEAR2", "DEAR3"];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">{title}</h2>
          <IoMdClose onClick={onClose} className="cursor-pointer text-xl" />
        </div>

        <div className="p-4 space-y-4">
          <p className="mb-4 text-xs text-rose-400">
            The fields marked with * are mandatory.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            {ticketRef && (
              <div>
                <label className="mb-2 text-sm font-semibold">
                  Ticket ref no.
                </label>
                <input
                  readOnly
                  className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
              </div>
            )}
            <div>
              <label className="mb-2 text-sm font-semibold">Customer *</label>
              <select
                name="customer"
                className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
              >
                <option value="">-</option>
                {CustomerNames.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Date *</label>
              <input
                type="date"
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Session *</label>
              <select
                name="session"
                className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
              >
                <option value="">---</option>
                {masterData.masterDropdown.session.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Lottery *</label>
              <select
                name="lottery"
                className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
              >
                <option>---</option>
                {lotteryData.map((lottery, index) => (
                  <option key={index} value={lottery}>
                    {lottery}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div>
              <label className="mb-2 text-sm font-semibold">Same *</label>
              <input
                type="text"
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Group *</label>
              <select
                name="session"
                className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
              >
                <option value="">---</option>
                {masterData.masterDropdown.groups.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">From *</label>
              <input
                type="text"
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">To *</label>
              <input
                type="text"
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Count</label>
              <input
                readOnly
                type="text"
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Ticket Qt.</label>
              <input
                readOnly
                type="text"
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Price</label>
              <input
                readOnly
                type="text"
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
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
            onClick={onCreate}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

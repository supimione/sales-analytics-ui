"use client";

import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import masterData from "@/data/masterData.json";

export default function CreateSalePopup({
  isOpen,
  title,
  ticketRef = true,
  btnText,
  onClose,
  onCreate,
  initialValues = null, // Add initialValues for edit
}) {
  const [formData, setFormData] = useState({
    ticketRef: "",
    date: "",
    customer: "",
    session: "",
    ticket: "",
    from: null,
    to: null,
    count: null,
    same: null,
    ticketQty: null,
    price: null,
  });

  const CustomerNames = ["Rahit Das - rahit123", "Suman Roy - suman123"];
  const lotteryData = ["DEAR", "NAGALAND"];

  // If we are editing, populate the formData with initialValues
  useEffect(() => {
    if (initialValues) {
      setFormData({
        ticketRef: initialValues.ticketRef,
        date: initialValues.date,
        customer: initialValues.customer,
        session: initialValues.session,
        ticket: initialValues.ticket,
        from: initialValues.from,
        to: initialValues.to,
        count: initialValues.count,
        same: initialValues.same,
        ticketQty: initialValues.ticketQty,
        price: initialValues.price,
      });
    }
  }, [initialValues]);

  useEffect(() => {
    if (formData.date && !initialValues) {
      // Generate ticketRef only if it's not being edited
      const generateTicketRef = () => {
        const now = new Date();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        const timeString = now.getTime().toString().slice(-6);
        return `T${month}${day}${timeString}`;
      };

      setFormData((prevState) => ({
        ...prevState,
        ticketRef: generateTicketRef(),
      }));
    }
  }, [formData.date, initialValues]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateDistributorForm = () => {
    if (
      !formData.date ||
      !formData.customer ||
      !formData.session ||
      !formData.ticket ||
      !formData.from ||
      !formData.to ||
      !formData.same ||
      (!ticketRef && !formData.ticketRef)
    ) {
      alert("Please fill in all fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateDistributorForm()) {
      onCreate(formData); // Pass the form data back to the parent
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-gray-900 p-4 m-2 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
          <h2 className="text-xl font-bold">{title}</h2>
          <IoMdClose onClick={onClose} className="cursor-pointer text-xl" />
        </div>

        <div className="p-4 space-y-4">
          <p className="mb-4 text-xs text-rose-400">
            The fields marked with * are mandatory.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {ticketRef && (
              <div>
                <label className="mb-2 text-sm font-semibold">
                  Ticket ref no.
                </label>
                <input
                  type="text"
                  name="ticketRef"
                  value={formData.ticketRef}
                  onChange={handleInputChange}
                  className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
                  readOnly
                />
              </div>
            )}
            <div>
              <label className="mb-2 text-sm font-semibold">Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Customer *</label>
              <select
                name="customer"
                value={formData.customer}
                onChange={handleInputChange}
                className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
              >
                <option>---</option>
                {CustomerNames.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Session *</label>
              <select
                name="session"
                value={formData.session}
                onChange={handleInputChange}
                className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
              >
                <option>---</option>
                {masterData.masterDropdown.session.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">
                Ticket Name *
              </label>
              <select
                name="ticket"
                value={formData.ticket}
                onChange={handleInputChange}
                className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
              >
                <option>---</option>
                {lotteryData.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="mb-2 text-sm font-semibold">From *</label>
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">To *</label>
              <input
                type="text"
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Count</label>
              <input
                type="text"
                name="ticketQty"
                value={formData.ticketQty}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                readOnly
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Same *</label>
              <select
                name="same"
                value={formData.same}
                onChange={handleInputChange}
                className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none"
              >
                <option>---</option>
                {masterData.masterDropdown.same.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Ticket Qt.</label>
              <input
                type="text"
                name="ticketQty"
                value={formData.ticketQty}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                readOnly
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                readOnly
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
            onClick={handleSubmit}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

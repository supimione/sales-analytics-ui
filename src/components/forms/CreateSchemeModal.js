"use client";

import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import masterData from "@/jsonData/masterData.json";

export default function CreateSchemeModal({
  isOpen,
  title,
  btnText,
  onClose,
  onCreate,
  width,
  initialValues = null,
}) {
  const [schemeFormData, setSchemeFormData] = useState({
    schemeName: "",
    timePeriods: "MOR, DAY, EVE",
    status: "",
  });

  // If we are editing, populate the formData with initialValues
  useEffect(() => {
    if (initialValues) {
      setSchemeFormData({
        schemeName: initialValues.schemeName,
        timePeriods: initialValues.timePeriods,
        status: initialValues.status,
      });
    }
  }, [initialValues]);

  const handleSchemeChange = (e) => {
    const { name, value } = e.target;
    setSchemeFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForData = () => {
    if (
      !schemeFormData.schemeName ||
      !schemeFormData.status ||
      !schemeFormData.timePeriods
    ) {
      alert("Please fill in all fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForData()) {
      onCreate(schemeFormData); // Pass the form data back to the parent
      setSchemeFormData({
        schemeName: "",
        timePeriods: "MOR, DAY, EVE",
        status: "",
      }); // Reset the form data after submission
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`bg-white m-2 text-gray-900 p-4 rounded-lg shadow-lg w-full ${width} max-h-[90vh] overflow-y-auto`}
      >
        <div className="flex justify-between items-center bg-blue-600 text-white p-3 rounded-t-lg">
          <h2 className="text-base font-semibold">{title}</h2>
          <IoMdClose onClick={onClose} className="cursor-pointer text-xl" />
        </div>

        <div className="p-4 space-y-4">
          <p className="mb-4 text-xs text-rose-400">
            The fields marked with * are mandatory.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-4 mb-6">
            <div>
              <label className="mb-2 text-sm font-semibold">
                Scheme Name *
              </label>
              <input
                type="text"
                name="schemeName"
                autoComplete="off"
                value={schemeFormData.schemeName}
                onChange={handleSchemeChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Status *</label>
              <select
                name="status"
                value={schemeFormData.status}
                onChange={handleSchemeChange}
                className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700"
              >
                <option value="">---</option>
                {masterData.masterDropdown.status.map((status, index) => (
                  <option key={index} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 text-sm font-semibold">Time *</label>
              <div className="flex w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700 focus:outline-none">
                {["MOR", "DAY", "EVE"].map((timePeriod, index) => (
                  <div key={index} className="flex items-center me-4">
                    <input
                      disabled
                      defaultChecked
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                      {timePeriod}
                    </label>
                  </div>
                ))}
              </div>
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

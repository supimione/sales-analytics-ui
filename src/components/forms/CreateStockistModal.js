"use client";

import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import masterData from "@/jsonData/masterData.json";

export default function CreateStockistModal({
  isOpen,
  title,
  btnText,
  onClose,
  onCreate,
  width,
  activeTab,
  superStockistUsernames,
  stockistUsernames,
  initialValues = null,
}) {
  const [schemeFormData, setSchemeFormData] = useState({
    mode: "",
    superStockist: "",
    stockist: "",
    role: "",
    name: "",
    username: "",
    password: "",
    mobile: "",
    rate5: "",
    rate5b: "",
    rate10: "",
    status: "",
  });

  useEffect(() => {
    if (initialValues) {
      setSchemeFormData({
        mode: initialValues.mode,
        superStockist: initialValues.superStockist,
        stockist: initialValues.stockist,
        role: initialValues.role,
        name: initialValues.name,
        username: initialValues.username,
        password: initialValues.password,
        mobile: initialValues.mobile,
        rate5: initialValues.rate5,
        rate5b: initialValues.rate5b,
        rate10: initialValues.rate10,
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
      !schemeFormData.name ||
      !schemeFormData.username ||
      !schemeFormData.password ||
      !schemeFormData.mobile ||
      !schemeFormData.status ||
      (activeTab === 4 && !schemeFormData.role) ||
      (activeTab === 1 &&
        (!schemeFormData.rate5 ||
          !schemeFormData.rate5b ||
          !schemeFormData.rate10)) ||
      (activeTab === 2 &&
        (!schemeFormData.superStockist ||
          !schemeFormData.rate5 ||
          !schemeFormData.rate5b ||
          !schemeFormData.rate10)) ||
      (activeTab === 3 &&
        (!schemeFormData.stockist ||
          !schemeFormData.rate5 ||
          !schemeFormData.rate5b ||
          !schemeFormData.rate10))
    ) {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForData()) {
      const dataToSubmit = {
        mode: schemeFormData?.mode,
        name: schemeFormData?.name,
        username: schemeFormData?.username,
        password: schemeFormData?.password,
        mobile: schemeFormData?.mobile,
        rate5: schemeFormData?.rate5,
        rate5b: schemeFormData?.rate5b,
        rate10: schemeFormData?.rate10,
        status: schemeFormData?.status,
      };

      const userDataToSubmit = {
        role: schemeFormData?.role,
        name: schemeFormData?.name,
        username: schemeFormData?.username,
        password: schemeFormData?.password,
        mobile: schemeFormData?.mobile,
        status: schemeFormData?.status,
      };

      if (activeTab === 1) {
        onCreate({
          ...dataToSubmit,
          mode: "Super Stockist",
        });
      } else if (activeTab === 2) {
        onCreate({
          ...dataToSubmit,
          mode: "Stockist",
          superStockist: schemeFormData?.superStockist,
        });
      } else if (activeTab === 3) {
        onCreate({
          ...dataToSubmit,
          mode: "Retailer",
          stockist: schemeFormData?.stockist,
        });
      } else if (activeTab === 4) {
        onCreate(userDataToSubmit);
      }

      // Reset form data after submission
      setSchemeFormData({
        mode: "",
        superStockist: "",
        stockist: "",
        role: "",
        name: "",
        username: "",
        password: "",
        mobile: "",
        status: "",
        rate5: "",
        rate5b: "",
        rate10: "",
      });
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-4 mb-6">
            {activeTab === 1 && (
              <div>
                <label className="mb-2 text-sm font-semibold">Mode *</label>
                <select
                  name="mode"
                  value={schemeFormData.mode}
                  onChange={handleSchemeChange}
                  className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700"
                >
                  {["Super Stockist"]?.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            )}
            {activeTab === 2 && (
              <>
                <div>
                  <label className="mb-2 text-sm font-semibold">Mode *</label>
                  <select
                    name="mode"
                    value={schemeFormData.mode}
                    onChange={handleSchemeChange}
                    className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700"
                  >
                    {["Stockist"]?.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 text-sm font-semibold">
                    Super Stockist *
                  </label>
                  <select
                    name="superStockist"
                    value={schemeFormData.superStockist}
                    onChange={handleSchemeChange}
                    className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700"
                  >
                    <option value="">---</option>
                    {superStockistUsernames?.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {activeTab === 3 && (
              <>
                <div>
                  <label className="mb-2 text-sm font-semibold">Mode *</label>
                  <select
                    name="mode"
                    value={schemeFormData.mode}
                    onChange={handleSchemeChange}
                    className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700"
                  >
                    {["Retailer"]?.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-2 text-sm font-semibold">
                    Stockist *
                  </label>
                  <select
                    name="stockist"
                    value={schemeFormData.stockist}
                    onChange={handleSchemeChange}
                    className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700"
                  >
                    <option value="">---</option>
                    {stockistUsernames?.map((status, index) => (
                      <option key={index} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </>
            )}
            {activeTab === 4 && (
              <div>
                <label className="mb-2 text-sm font-semibold">Role *</label>
                <select
                  name="role"
                  value={schemeFormData.role}
                  onChange={handleSchemeChange}
                  className="w-full px-2 py-2 border text-sm rounded bg-gray-100 text-gray-700"
                >
                  <option value="">---</option>
                  {masterData.masterDropdown.role.map((status, index) => (
                    <option key={index} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <label className="mb-2 text-sm font-semibold">Name *</label>
              <input
                type="text"
                name="name"
                autoComplete="off"
                value={schemeFormData.name}
                onChange={handleSchemeChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Username *</label>
              <input
                type="text"
                name="username"
                autoComplete="off"
                value={schemeFormData.username}
                onChange={handleSchemeChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Password *</label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                value={schemeFormData.password}
                onChange={handleSchemeChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Mobile *</label>
              <input
                type="number"
                name="mobile"
                autoComplete="off"
                value={schemeFormData.mobile}
                onChange={handleSchemeChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Rate 5 *</label>
              <input
                type="number"
                name="rate5"
                autoComplete="off"
                value={schemeFormData.rate5}
                onChange={handleSchemeChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Rate 5-B *</label>
              <input
                type="number"
                name="rate5b"
                autoComplete="off"
                value={schemeFormData.rate5b}
                onChange={handleSchemeChange}
                className="w-full px-2 py-1.5 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="mb-2 text-sm font-semibold">Rate 10 *</label>
              <input
                type="number"
                name="rate10"
                autoComplete="off"
                value={schemeFormData.rate10}
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

"use client"; // Required for UI manipulation or using any React hook

import { useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdDelete, MdEditDocument } from "react-icons/md";

const distributorHeader = [
  "Sl No.",
  " Distributor Name",
  " Phone No.",
  " EmailId / User name",
  " MOR",
  "Day",
  "EVE",
  "Action",
];
const distributorData = [
  {
    id: 1,
    name: "Silver",
    phone: "12345678911",
    email: "test@gmail.com",
    mor: "9.5",
    day: "9.5",
    eve: "9.5",
  },
  {
    id: 2,
    name: "Gold",
    phone: "98765432100",
    email: "example@gmail.com",
    mor: "8.0",
    day: "7.5",
    eve: "6.5",
  },
];

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  // Open delete confirmation popup
  const handleDeleteClick = (itemId) => {
    setDeletePopupOpen(true);
  };

  // Close delete popup
  const handleCancelDelete = () => {
    setDeletePopupOpen(false);
  };

  return (
    <>
      <div className={`py-4 px-2 sm:ml-64 ${isPopupOpen ? "blur-sm" : ""}`}>
        {/* Header and Breadcrumb */}
        <div className="flex justify-between items-center mt-14">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Distributors</h1>
          </div>
          <button
            onClick={handleOpenPopup}
            className="mb-4 px-4 py-2 text-sm text-white bg-sky-600 rounded hover:bg-sky-700"
          >
            + Add Distributor
          </button>
        </div>

        {/* Main Content Area */}
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-6">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {distributorHeader.map((item) => (
                    <>
                      <th scope="col" className="px-6 py-3">
                        {item}
                      </th>
                    </>
                  ))}
                </tr>
              </thead>
              <tbody>
                {distributorData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.phone}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.mor}</td>
                    <td className="px-6 py-4">{item.day}</td>
                    <td className="px-6 py-4">{item.eve}</td>
                    <td className="px-6 py-4 flex space-x-2">
                      <MdEditDocument className="text-blue-500 cursor-pointer text-xl hover:text-blue-700" />
                      <MdDelete
                        className="text-red-500 cursor-pointer text-xl hover:text-red-700"
                        onClick={() => handleDeleteClick(1)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold">Add Distributor</h2>
              <IoMdClose
                onClick={handleOpenPopup}
                className="cursor-pointer text-xl"
              />
            </div>

            {/* Modal Body */}
            <div className="p-4 space-y-4">
              <p className="mb-4 text-sm">
                The field labels marked with * are required input fields.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Name *</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Company Name"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Phone No. *</label>
                  <input
                    type="text"
                    placeholder="Enter Your Phone No."
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Address *</label>
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Incentive *</label>
                  <input
                    type="text"
                    placeholder="Type Incentive..."
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                Create the dealer credentials:
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">User *</label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Password *</label>
                  <input
                    type="password"
                    placeholder="Enter the password..."
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                Session Wise Report *
              </h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <label className="block mb-1 font-medium">MOR *</label>
                  <input
                    type="text"
                    placeholder="Type Rate"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">DAY *</label>
                  <input
                    type="text"
                    placeholder="Type Rate"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">EVE *</label>
                  <input
                    type="text"
                    placeholder="Type Rate"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end bg-gray-100 p-4 rounded-b-lg space-x-2">
              <button
                onClick={handleOpenPopup}
                className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700"
              >
                Close
              </button>
              <button className="px-4 py-2 text-sm text-white bg-green-600 rounded hover:bg-green-700">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeletePopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete this item?</p>

            <div className="flex justify-end space-x-2 mt-6">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-700">
                Okay
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client"; // Required for UI manipulation or using any React hook

import { useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdDelete, MdEditDocument } from "react-icons/md";

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("MOR");
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
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
      <div className="py-4 px-2 sm:ml-64">
        <div className="flex justify-between items-center mt-14">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Winning</h1>
          </div>
          <button
            className="mb-4 px-4 py-2 text-sm text-white bg-[#597cff] rounded hover:bg-sky-700"
            onClick={handleOpenPopup}
          >
            + Add Winning
          </button>
        </div>

        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-6">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    SL No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Result Ref No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Day
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Lottery Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sessions
                  </th>
                  <th scope="col" className="px-6 py-3 text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td className="px-6 py-4">RESULT - 1</td>
                  <td className="px-6 py-4">Wed</td>
                  <td className="px-6 py-4">2024-09-11</td>
                  <td className="px-6 py-4">Wed</td>
                  <td className="px-6 py-4">MOR</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <MdEditDocument className="text-blue-500 cursor-pointer text-xl hover:text-blue-700" />
                      <MdDelete
                        className="text-red-500 cursor-pointer text-xl hover:text-red-700"
                        onClick={() => handleDeleteClick(1)}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-5xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center bg-blue-600 text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold">Add Tickets</h2>
              <IoMdClose
                onClick={handleOpenPopup}
                className="cursor-pointer text-xl"
              />
            </div>

            <div className="p-4 space-y-4">
              <p className="mb-4 text-sm">
                The field labels marked with * are required input fields.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Date *
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    value="2024-09-10"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Session
                  </label>
                  <select className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none">
                    <option value="">-</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Lottery
                  </label>
                  <select className="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none">
                    <option value="">-</option>
                  </select>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Prizes 1</h3>
              <div className="grid grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="Prize 1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
              </div>

              <h3 className="text-xl font-bold mb-4">Prizes 2</h3>
              <div className="grid grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="6"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="7"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="8"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="9"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="10"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
              </div>

              <h3 className="text-xl font-bold mb-4">Prizes 3</h3>
              <div className="grid grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="6"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="7"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="8"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="9"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="10"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
              </div>

              <h3 className="text-xl font-bold mb-4">Prizes 4</h3>
              <div className="grid grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="6"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="7"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="8"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="9"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="10"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
              </div>

              <h3 className="text-xl font-bold mb-4">Prizes 5</h3>
              <div className="grid grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="6"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="7"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="8"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="9"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="10"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
              </div>

              <h3 className="text-xl font-bold mb-4">Prizes 6</h3>
              <div className="grid grid-cols-5 gap-4">
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="6"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="7"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="8"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="9"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="10"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />{" "}
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="1"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="2"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="3"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="4"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="5"
                  className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="flex justify-end bg-gray-100 p-4 rounded-b-lg space-x-2">
              <button
                onClick={handleOpenPopup}
                className="px-4 py-2 text-sm text-gray-600 bg-white border border-gray-300 rounded hover:bg-gray-100"
              >
                Cancel
              </button>
              <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700">
                Add
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

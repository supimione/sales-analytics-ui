"use client"; // Required for UI manipulation or using any React hook

import { useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdDelete, MdEditDocument } from "react-icons/md";

export default function Home() {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("MOR"); // State to manage selected time

  const handleOpenPopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  return (
    <>
      <div className="py-4 px-2 sm:ml-64">
        <div className="flex justify-between items-center mt-14">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Tickets</h1>
          </div>
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  <FaHome />
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <Link
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-700 md:ml-2"
                  >
                    All Tickets
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-6">
          <button
            className="mb-4 px-4 py-2 text-sm text-white bg-sky-600 rounded hover:bg-sky-700"
            onClick={handleOpenPopup}
          >
            + Add Tickets
          </button>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    SL No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Distributor Name
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
                  <td className="px-6 py-4">Ganash Distributor</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end space-x-2">
                      <MdEditDocument className="text-blue-500 cursor-pointer text-xl hover:text-blue-700" />
                      <MdDelete className="text-red-500 cursor-pointer text-xl hover:text-red-700" />
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
          <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
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

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-1 font-medium">Name *</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium">Time *</label>
                  <div className="flex space-x-4 mb-6">
                    {/* Time Selection Buttons */}
                    {["MOR", "DAY", "EVE"].map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelection(time)}
                        className={`text-sm px-7 py-2 rounded ${
                          selectedTime === time
                            ? "bg-green-600 text-white"
                            : "bg-gray-200 text-gray-700 border border-gray-400"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prizes Section */}
              <h3 className="text-xl font-bold mb-4">Prizes</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block mb-1">Sunday</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Monday</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Tuesday</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label className="block mb-1">Wednesday</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Thursday</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Friday</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Saturday</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
              </div>

              {/* Prizes Section */}
              <h3 className="text-xl font-bold mb-4">Prizes</h3>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block mb-1">Prize 1</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Special Prize 1</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Super Prize 1</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>

                <div>
                  <label className="block mb-1">Prize 2</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Special Prize 2</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block mb-1">Super Prize 2</label>
                  <input
                    type="text"
                    placeholder="Enter"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
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
    </>
  );
}

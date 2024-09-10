"use client"; // Required for UI manipulation or using any React hook

import { useState } from "react";
import Link from "next/link";
import { FaFileExcel, FaFilePdf, FaHome } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdDelete, MdEditDocument } from "react-icons/md";

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
      <div className="py-4 px-2 sm:ml-64">
        <div className="flex justify-between items-center mt-14">
          <div className="flex items-center">
            <h1 className="text-xl font-bold">Ticket Sale List</h1>
          </div>
          <button
            className="px-4 py-2 text-sm text-white bg-sky-600 rounded hover:bg-sky-700"
            onClick={handleOpenPopup}
          >
            + Add Sales
          </button>
        </div>

        <div className="p-4 mt-4 mb-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <form className="w-full">
            <div className="flex flex-wrap items-center gap-4">
              {/* Date Inputs */}
              <input
                type="date"
                className="px-4 py-1 border border-gray-300 rounded-lg bg-white text-black focus:ring-blue-500 focus:border-blue-500 min-w-[230px] w-full sm:w-auto"
              />
              <input
                type="date"
                className="px-4 py-1 border border-gray-300 rounded-lg bg-white text-black focus:ring-blue-500 focus:border-blue-500 min-w-[230px] w-full sm:w-auto"
              />

              {/* Selects */}
              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white text-black focus:ring-blue-500 focus:border-blue-500 min-w-[230px] w-full sm:w-auto">
                <option>S BASAK</option>
              </select>

              <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white text-black focus:ring-blue-500 focus:border-blue-500 min-w-[230px] w-full sm:w-auto">
                <option>ALL</option>
              </select>

              {/* Submit Button */}
              <button className="px-6 py-2 bg-gray-100 text-gray-700 border text-base rounded-lg focus:ring-4 w-full sm:w-auto">
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div className="flex justify-between mb-4">
            <button
              className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md focus:outline-none flex items-center"
              onClick={handleDeleteClick}
            >
              <MdDelete />
            </button>
            <div className="flex justify-between ">
              <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md focus:outline-none flex items-center mr-2">
                <FaFileExcel />
              </button>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md focus:outline-none flex items-center">
                <FaFilePdf />
              </button>
            </div>
          </div>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </th>
                  <th scope="col" class="px-3 py-3">
                    Sl No.
                  </th>
                  <th scope="col" class="px-3 py-3">
                    Ticket Ref No.
                  </th>
                  <th scope="col" class="px-3 py-3">
                    Date
                  </th>
                  <th scope="col" class="px-3 py-3">
                    Customer
                  </th>
                  <th scope="col" class="px-3 py-3">
                    Lottery
                  </th>
                  <th scope="col" class="px-3 py-3">
                    From
                  </th>
                  <th scope="col" class="px-3 py-3">
                    To
                  </th>
                  <th scope="col" class="px-3 py-3">
                    Same
                  </th>
                  <th scope="col" class="px-3 py-3">
                    Group
                  </th>
                  <th scope="col" class="px-3 py-3">
                    Ticket Qty.
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-table-search-3"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                    </div>
                  </td>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    1
                  </th>
                  <td class="px-6 py-4">TKT-20240910-092049</td>
                  <td class="px-6 py-4">2024-09-11</td>
                  <td class="px-6 py-4">S Basak</td>
                  <td class="px-6 py-4">wed</td>
                  <td class="px-6 py-4">29</td>
                  <td class="px-6 py-4">53</td>
                  <td class="px-6 py-4">1</td>
                  <td class="px-6 py-4">53</td>
                  <td class="px-6 py-4">53</td>
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
              <h2 className="text-xl font-bold">Add Ticket Sale</h2>
              <IoMdClose
                onClick={handleOpenPopup}
                className="cursor-pointer text-xl"
              />
            </div>

            <div className="p-4 space-y-4">
              <p className="mb-4 text-sm">
                The field labels marked with * are required input fields.
              </p>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label class="block mb-2 text-sm font-medium">
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
                  <label class="block mb-2 text-sm font-medium">
                    Customer *
                  </label>
                  <select class="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none">
                    <option value="">-</option>
                  </select>
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium">Date *</label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    value="2024-09-10"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium">
                    Session *
                  </label>
                  <select class="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none">
                    <option value="EVE">EVE (20:00)</option>
                  </select>
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium">
                    Lottery *
                  </label>
                  <select class="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none">
                    <option value="">Select Lottery</option>
                  </select>
                </div>
              </div>

              <p class="text-green-500 font-bold mb-4">
                Total Ticket Qt.: 0, Total Price: 0
              </p>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <label class="block mb-2 text-sm font-medium">Same *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                    value="1"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium">Group *</label>
                  <select class="w-full px-3 py-2 border rounded-lg bg-gray-100 text-gray-700 focus:outline-none">
                    <option value="30">30</option>
                  </select>
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium">From *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium">To *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium">Count *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium">
                    Ticket Qt. *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 text-sm bg-gray-100 text-gray-700 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label class="block mb-2 text-sm font-medium">Price *</label>
                  <input
                    type="text"
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
                Create Sale
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

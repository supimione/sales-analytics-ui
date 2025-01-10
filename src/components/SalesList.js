// components/Header.js
"use client";

import React from "react";
import { FaFileExcel, FaFilePdf } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function SalesList({
  handleDeleteSelectedItems,
  handleGenerateExcel,
  handleGeneratePDF,
}) {
  return (
    <>
      <div className="p-4 mt-4 mb-2 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <form className="w-full">
          <div className="flex flex-wrap items-center gap-4">
            {/* Date Inputs */}
            <input
              type="date"
              className="px-4 py-1 border border-gray-300 rounded-lg bg-white text-black focus:ring-blue-500 focus:border-blue-500 min-w-[220px] w-full sm:w-auto"
            />
            <input
              type="date"
              className="px-4 py-1 border border-gray-300 rounded-lg bg-white text-black focus:ring-blue-500 focus:border-blue-500 min-w-[220px] w-full sm:w-auto"
            />

            {/* Selects */}
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white text-black focus:ring-blue-500 focus:border-blue-500 min-w-[220px] w-full sm:w-auto">
              <option>S BASAK</option>
            </select>

            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white text-black focus:ring-blue-500 focus:border-blue-500 min-w-[220px] w-full sm:w-auto">
              <option>ALL</option>
            </select>

            {/* Submit Button */}
            <button className="px-6 py-1.5 bg-gray-100 text-gray-700 border text-base rounded-lg focus:ring-4 w-full sm:w-auto">
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div className="flex justify-between mb-4">
          <button
            className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md focus:outline-none flex items-center"
            onClick={handleDeleteSelectedItems}
          >
            <MdDelete />
          </button>
          <div className="flex justify-between ">
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md focus:outline-none flex items-center mr-2">
              <FaFileExcel onClick={handleGenerateExcel} />
            </button>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-md focus:outline-none flex items-center">
              <FaFilePdf onClick={handleGeneratePDF} />
            </button>
          </div>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </th>
                <th scope="col" className="px-3 py-3">
                  Sl No.
                </th>
                <th scope="col" className="px-3 py-3">
                  Ticket Ref No.
                </th>
                <th scope="col" className="px-3 py-3">
                  Date
                </th>
                <th scope="col" className="px-3 py-3">
                  Customer
                </th>
                <th scope="col" className="px-3 py-3">
                  Lottery
                </th>
                <th scope="col" className="px-3 py-3">
                  From
                </th>
                <th scope="col" className="px-3 py-3">
                  To
                </th>
                <th scope="col" className="px-3 py-3">
                  Same
                </th>
                <th scope="col" className="px-3 py-3">
                  Group
                </th>
                <th scope="col" className="px-3 py-3">
                  Ticket Qty.
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-table-search-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td className="px-6 py-4">TKT-20240910-092049</td>
                <td className="px-6 py-4">2024-09-11</td>
                <td className="px-6 py-4">S Basak</td>
                <td className="px-6 py-4">wed</td>
                <td className="px-6 py-4">29</td>
                <td className="px-6 py-4">53</td>
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">53</td>
                <td className="px-6 py-4">53</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

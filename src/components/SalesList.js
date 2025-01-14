"use client";

import React from "react";
import { FaFileExcel } from "react-icons/fa";
import { MdDelete, MdEditDocument } from "react-icons/md";
import masterData from "@/data/masterData.json";

export default function SalesList({
  showHeader = true,
  ShowEdit = true,
  tableHeader,
  tableData,
  generateExcel,
  onEdit,
  onDelete,
}) {
  return (
    <>
      <div className="p-4 mt-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        {showHeader && (
          <div className="flex justify-between items-center mb-4">
            <select
              name="filter"
              className="px-2 font-bold py-2 text-sm bg-white border border-gray-200 rounded-lg"
            >
              {masterData.masterDropdown.filterData.map((status, index) => (
                <option key={index} value={status}>
                  {status}
                </option>
              ))}
            </select>

            {/* Export Excel Button */}
            <button
              onClick={generateExcel}
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md focus:outline-none flex items-center"
            >
              <FaFileExcel className="mr-2" />
              Export Excel
            </button>
          </div>
        )}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {tableHeader.map((header) => (
                  <th key={header} scope="col" className="px-3 py-3">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            {tableData?.length > 0 ? (
              <tbody>
                {tableData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    {Object.keys(item).map((key) => {
                      if (key !== "id") {
                        return (
                          <td key={key} className="px-3 py-4">
                            {item[key]}
                          </td>
                        );
                      }
                    })}
                    <td className="px-3 py-4 flex space-x-2">
                      {ShowEdit && (
                        <MdEditDocument
                          className="text-blue-500 cursor-pointer text-xl hover:text-blue-700"
                          onClick={() => onEdit(item.id)}
                        />
                      )}
                      <MdDelete
                        className="text-red-500 cursor-pointer text-xl hover:text-red-700"
                        onClick={() => onDelete(item.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                <tr>
                  <td colSpan={tableHeader.length} className="text-center p-6">
                    <div className="text-gray-500 dark:text-gray-400 text-base">
                      No Data Found
                    </div>
                  </td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}

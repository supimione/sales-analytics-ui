"use client";

import React, { useState } from "react";
import { FaFileExcel } from "react-icons/fa";
import { MdDelete, MdEditDocument } from "react-icons/md";
import masterData from "@/api/masterData.json";

export default function SalesList({
  showHeader = true,
  ShowEdit = true,
  tableHeader,
  tableData,
  generateExcel,
  onEdit,
  onDelete,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const currentItems = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="p-0 sm:p-2 mt-4 sm:border-2 border-gray-100 border-dashed rounded-lg">
        {showHeader && (
          <div className="flex justify-between items-center mb-4">
            <select
              name="filter"
              className="px-2 cursor-pointer font-bold py-2 text-sm bg-white border border-gray-200 rounded-lg"
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
              Export
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
            {currentItems.length > 0 ? (
              <tbody>
                {currentItems.map((item, index) => (
                  <tr
                    key={item.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {(currentPage - 1) * itemsPerPage + index + 1}
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

        {totalPages > 1 && (
          <nav
            className="flex justify-center items-center gap-x-1 mt-4"
            aria-label="Pagination"
          >
            <button
              type="button"
              className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              aria-label="Previous"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              <span className="sr-only">Previous</span>
            </button>

            <div className="flex items-center gap-x-1">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  type="button"
                  className={`min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500 ${
                    currentPage === index + 1
                      ? "bg-gray-200 text-gray-800"
                      : "text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-white/10"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                  aria-current={currentPage === index + 1 ? "page" : undefined}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              type="button"
              className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              aria-label="Next"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <span className="sr-only">Next</span>
              <svg
                className="shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </nav>
        )}
      </div>
    </>
  );
}

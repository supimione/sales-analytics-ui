"use client";

import React, { useState } from "react";
import { FaFileExcel } from "react-icons/fa";

export default function SalesList({
  selectedItem,
  generateExcel,
  generatePDF,
}) {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Set number of items per page

  const data = [
    {
      ticketRef: "TKT-20240910-092049",
      date: "2024-09-11",
      customer: "S Basak",
      lottery: "Wed",
      from: "29",
      to: "53",
      same: "1",
      group: "53",
      ticketQty: 53,
    },
    {
      ticketRef: "TKT-20240911-105210",
      date: "2024-09-12",
      customer: "R Sharma",
      lottery: "Mon",
      from: "12",
      to: "34",
      same: "2",
      group: "34",
      ticketQty: 34,
    },
    {
      ticketRef: "TKT-20240912-112356",
      date: "2024-09-13",
      customer: "M Das",
      lottery: "Fri",
      from: "45",
      to: "76",
      same: "3",
      group: "76",
      ticketQty: 76,
    },
    {
      ticketRef: "TKT-20240913-124506",
      date: "2024-09-14",
      customer: "A Kumar",
      lottery: "Sun",
      from: "23",
      to: "78",
      same: "1",
      group: "78",
      ticketQty: 78,
    },
    {
      ticketRef: "TKT-20240914-134620",
      date: "2024-09-15",
      customer: "P Roy",
      lottery: "Tue",
      from: "15",
      to: "56",
      same: "2",
      group: "56",
      ticketQty: 56,
    },
    {
      ticketRef: "TKT-20240915-145320",
      date: "2024-09-16",
      customer: "L Saha",
      lottery: "Wed",
      from: "10",
      to: "90",
      same: "1",
      group: "90",
      ticketQty: 90,
    },
    {
      ticketRef: "TKT-20240916-154840",
      date: "2024-09-17",
      customer: "K Gupta",
      lottery: "Thu",
      from: "32",
      to: "60",
      same: "2",
      group: "60",
      ticketQty: 60,
    },
    {
      ticketRef: "TKT-20240917-161212",
      date: "2024-09-18",
      customer: "B Sen",
      lottery: "Sat",
      from: "50",
      to: "100",
      same: "3",
      group: "100",
      ticketQty: 100,
    },
    {
      ticketRef: "TKT-20240918-173545",
      date: "2024-09-19",
      customer: "V Shah",
      lottery: "Mon",
      from: "18",
      to: "45",
      same: "2",
      group: "45",
      ticketQty: 45,
    },
    {
      ticketRef: "TKT-20240919-181820",
      date: "2024-09-20",
      customer: "J Sharma",
      lottery: "Thu",
      from: "67",
      to: "89",
      same: "1",
      group: "89",
      ticketQty: 89,
    },

    {
      ticketRef: "TKT-20240913-124506",
      date: "2024-09-14",
      customer: "A Kumar",
      lottery: "Sun",
      from: "23",
      to: "78",
      same: "1",
      group: "78",
      ticketQty: 78,
    },
    {
      ticketRef: "TKT-20240914-134620",
      date: "2024-09-15",
      customer: "P Roy",
      lottery: "Tue",
      from: "15",
      to: "56",
      same: "2",
      group: "56",
      ticketQty: 56,
    },
    {
      ticketRef: "TKT-20240915-145320",
      date: "2024-09-16",
      customer: "L Saha",
      lottery: "Wed",
      from: "10",
      to: "90",
      same: "1",
      group: "90",
      ticketQty: 90,
    },
    {
      ticketRef: "TKT-20240916-154840",
      date: "2024-09-17",
      customer: "K Gupta",
      lottery: "Thu",
      from: "32",
      to: "60",
      same: "2",
      group: "60",
      ticketQty: 60,
    },
    {
      ticketRef: "TKT-20240917-161212",
      date: "2024-09-18",
      customer: "B Sen",
      lottery: "Sat",
      from: "50",
      to: "100",
      same: "3",
      group: "100",
      ticketQty: 100,
    },
    {
      ticketRef: "TKT-20240918-173545",
      date: "2024-09-19",
      customer: "V Shah",
      lottery: "Mon",
      from: "18",
      to: "45",
      same: "2",
      group: "45",
      ticketQty: 45,
    },
    {
      ticketRef: "TKT-20240919-181820",
      date: "2024-09-20",
      customer: "J Sharma",
      lottery: "Thu",
      from: "67",
      to: "89",
      same: "1",
      group: "89",
      ticketQty: 89,
    },
  ];

  // Function to filter data based on selected filter
  const filterData = () => {
    const today = new Date();
    let filteredData = [...data];

    if (filter === "Last 3 Days") {
      const threeDaysAgo = new Date(today);
      threeDaysAgo.setDate(today.getDate() - 3);
      filteredData = filteredData.filter(
        (item) => new Date(item.date) >= threeDaysAgo
      );
    } else if (filter === "Last 7 Days") {
      const sevenDaysAgo = new Date(today);
      sevenDaysAgo.setDate(today.getDate() - 7);
      filteredData = filteredData.filter(
        (item) => new Date(item.date) >= sevenDaysAgo
      );
    } else if (filter === "Last 30 Days") {
      const thirtyDaysAgo = new Date(today);
      thirtyDaysAgo.setDate(today.getDate() - 30);
      filteredData = filteredData.filter(
        (item) => new Date(item.date) >= thirtyDaysAgo
      );
    }

    return filteredData;
  };

  // Paginate the filtered data
  const paginateData = () => {
    const filteredData = filterData();
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    return filteredData.slice(indexOfFirstItem, indexOfLastItem);
  };

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(filterData().length / itemsPerPage);

  return (
    <>
      <div className="p-4 mt-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        {/* Filter Dropdown */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:text-white dark:border-gray-600"
            >
              <option value="All">All</option>
              <option value="Last 3 Days">Last 3 Days</option>
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
            </select>
          </div>

          {/* Export Excel Button */}
          <button
            onClick={generateExcel}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md focus:outline-none flex items-center"
          >
            <FaFileExcel className="mr-2" />
            Export Excel
          </button>
        </div>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
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
              {paginateData().map((item, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4">{item.ticketRef}</td>
                  <td className="px-6 py-4">{item.date}</td>
                  <td className="px-6 py-4">{item.customer}</td>
                  <td className="px-6 py-4">{item.lottery}</td>
                  <td className="px-6 py-4">{item.from}</td>
                  <td className="px-6 py-4">{item.to}</td>
                  <td className="px-6 py-4">{item.same}</td>
                  <td className="px-6 py-4">{item.group}</td>
                  <td className="px-6 py-4">{item.ticketQty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination using provided code */}
        <nav aria-label="Page navigation">
          <ul className="flex items-center -space-x-px h-8 text-sm mt-3">
            {/* Prev Button */}
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 1 1 5l4 4"
                  />
                </svg>
              </button>
            </li>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    currentPage === index + 1
                      ? "text-blue-600 border-blue-300 bg-blue-50"
                      : ""
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}

            {/* Next Button */}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

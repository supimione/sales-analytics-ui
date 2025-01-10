"use client";

import { useState } from "react";
import { FaTicketAlt, FaUser } from "react-icons/fa";

export default function Home() {
  const [tabName, setTabName] = useState("distributer"); // Default tab

  const handleTabChange = (tab) => {
    setTabName(tab);
  };

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-gray-500 dark:text-gray-400">
          <li
            className={`me-2 cursor-pointer p-4 flex items-center ${
              tabName === "distributer"
                ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                : "hover:text-gray-600 hover:border-gray-300"
            }`}
            onClick={() => handleTabChange("distributer")}
          >
            <FaUser
              className={`w-5 h-5 me-2 ${
                tabName === "distributer"
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
              }`}
            />
            <span>DISTRIBUTER</span>
          </li>
          <li
            className={`me-2 cursor-pointer p-4 flex items-center ${
              tabName === "tickets"
                ? "text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500"
                : "hover:text-gray-600 hover:border-gray-300"
            }`}
            onClick={() => handleTabChange("tickets")}
          >
            <FaTicketAlt
              className={`w-5 h-5 me-2 ${
                tabName === "tickets"
                  ? "text-blue-600 dark:text-blue-500"
                  : "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
              }`}
            />
            <span>TICKETS</span>
          </li>
        </ul>
      </div>

      <div className="p-5">
        {tabName === "distributer" && (
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Distributer Report</h1>
            <button className="px-4 py-2 text-sm text-white bg-[#597cff] rounded hover:bg-sky-700">
              + Add Distributer
            </button>
          </div>
        )}
        {tabName === "tickets" && (
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Tickets Report</h1>
            <button className="px-4 py-2 text-sm text-white bg-[#597cff] rounded hover:bg-sky-700">
              + Add Tickets
            </button>
          </div>
        )}
      </div>
    </>
  );
}

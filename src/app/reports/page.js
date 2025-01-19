"use client"; // Required for UI manipulation or using any React hook

import { useState } from "react";
import { FaTicketAlt, FaUser } from "react-icons/fa";

const tabData = [
  { title: "Sales Report", icon: FaUser },
  { title: "Unsold Report", icon: FaTicketAlt },
  { title: "Stock Report", icon: FaTicketAlt },
  { title: "Winner Report", icon: FaTicketAlt },
  { title: "Unsold Winner Report", icon: FaTicketAlt },
];

export default function Home() {
  const [tabName, setTabName] = useState("");

  return (
    <>
      <div className="px-4 py-5">
        <ul class="flex border-b">
          {tabData.map(({ title, icon: Icon }) => (
            <li
              key={title}
              className={`w-64 px-4 py-3 ml-1 inline-flex items-center text-black text-sm rounded ${
                tabName === title
                  ? "text-white bg-blue-500"
                  : "bg-gray-300 hover:text-gray-600 hover:border-gray-300"
              }`}
              onClick={() => handleTabChange(title)}
            >
              <div className="flex items-center justify-center">
                <Icon
                  className={`w-4 h-4 me-2 ${
                    tabName === title
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-500"
                  }`}
                />
                <span>{title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Report</h1>
          <button className="px-4 py-2 text-sm text-white bg-[#597cff] rounded hover:bg-sky-700">
            + Add Sales
          </button>
        </div>
      </div>
    </>
  );
}

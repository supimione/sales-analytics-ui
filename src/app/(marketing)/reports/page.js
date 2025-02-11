"use client";

import { useState } from "react";
import {
  FaStore,
  FaChartLine,
  FaBan,
  FaTrophy,
  FaTimesCircle,
} from "react-icons/fa";

const tabData = [
  { title: "Stockist Report", icon: FaStore }, // FaStore represents a business or store
  { title: "Sales Report", icon: FaChartLine }, // FaChartLine represents sales growth
  { title: "Unsold Report", icon: FaBan }, // FaBan represents something that didn't sell
  { title: "Winner Report", icon: FaTrophy }, // FaTrophy represents a winner
  { title: "Unsold Winner Report", icon: FaTimesCircle }, // FaTimesCircle for unsold, and FaTrophy for winner
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="px-4 py-5">
        <div className="flex border-b">
          {tabData.map((tab, index) => (
            <button
              key={index}
              className={`py-2 px-4 text-sm ${
                activeTab === index
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-600 hover:text-blue-500"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex items-center justify-center">
                <tab.icon className="text-sm mr-2" />
                {tab.title}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-4 p-4 border border-gray-200 rounded-lg">
          {/* {tabContents[activeTab].content}asdssd */}sd
        </div>
      </div>
    </>
  );
}

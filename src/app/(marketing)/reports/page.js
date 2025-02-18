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
  { tabId: 0, title: "Stockist Report", icon: FaStore }, // FaStore represents a business or store
  { tabId: 1, title: "Sales Report", icon: FaChartLine }, // FaChartLine represents sales growth
  { tabId: 2, title: "Unsold Report", icon: FaBan }, // FaBan represents something that didn't sell
  { tabId: 3, title: "Winner Report", icon: FaTrophy }, // FaTrophy represents a winner
  { tabId: 4, title: "Unsold Winner Report", icon: FaTimesCircle }, // FaTimesCircle for unsold, and FaTrophy for winner
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className="p-5">
        <div className="flex flex-wrap border-b">
          {tabData.map((tab) => (
            <button
              key={tab.tabId}
              className={`py-2 px-4 text-sm flex-shrink-0 mb-2 mr-2 rounded-t-lg transition-colors duration-200 ${
                activeTab === tab.tabId
                  ? "border-b-2 border-blue-500 text-blue-500 bg-blue-50"
                  : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab(tab.tabId)}
            >
              <div className="flex items-center justify-center whitespace-nowrap">
                <tab.icon className="text-sm mr-2" />
                {tab.title}
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

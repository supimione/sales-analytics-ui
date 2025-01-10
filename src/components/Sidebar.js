"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "@/images/header-logo.png";
import {
  FaHome,
  FaTicketAlt,
  FaTimesCircle,
  FaBoxes,
  FaChartBar,
  FaFileAlt,
} from "react-icons/fa";

const menuItems = [
  {
    id: 1,
    link: "/",
    title: "Dashboard",
    icon: FaHome, // Replace with an appropriate icon
  },
  {
    id: 2,
    link: "/sales",
    title: "Sales Tickets",
    icon: FaTicketAlt, // Replace with a ticket-related icon
  },
  {
    id: 3,
    link: "/unsold",
    title: "Unsold Tickets",
    icon: FaTimesCircle, // Replace with an icon for unsold or unavailable items
  },
  {
    id: 4,
    link: "/stocks",
    title: "Stock Management",
    icon: FaBoxes, // Replace with a stock or inventory-related icon
  },
  {
    id: 5,
    link: "/result",
    title: "Results",
    icon: FaChartBar, // Replace with a results or analytics-related icon
  },
  {
    id: 6,
    link: "/reports",
    title: "Reports",
    icon: FaFileAlt, // Replace with a reports or file-related icon
  },
];

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(1);
  const [activeMenu, setActiveMenu] = useState(1);

  const toggleMenu = (id) => {
    setActiveMenu(id);
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0 flex flex-col justify-between">
      <div className="p-6">
        <Image src={HeaderLogo} className="w-40" alt="LMS Logo" />
      </div>

      <div className="h-full pb-4 overflow-y-auto flex-grow">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className={`flex items-center my-2 px-4 py-1 text-sm ${
                  activeMenu === item.id
                    ? "text-white rounded-r-3xl shadow-[0px_4px_8px_-4px_rgba(58,53,65,0.42)] bg-gradient-to-r from-[#5f90fd] to-[#2e6ce2]"
                    : "text-gray-700"
                }`}
                onClick={() => toggleMenu(item.id)}
              >
                <span className="p-2 mr-2 text-lg">
                  <item.icon />
                </span>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

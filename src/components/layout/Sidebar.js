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
  FaClipboardList,
} from "react-icons/fa";

const menuItems = [
  { id: 1, link: "/", title: "Master", icon: FaHome },
  { id: 2, link: "/sales", title: "Sales", icon: FaTicketAlt },
  { id: 3, link: "/unsold", title: "Unsold", icon: FaTimesCircle },
  { id: 4, link: "/stocks", title: "Stockist", icon: FaBoxes },
  { id: 5, link: "/result", title: "Results", icon: FaChartBar },
  { id: 6, link: "/reports", title: "Daily Reports", icon: FaClipboardList },
];

export default function Sidebar({ sidebarOpen }) {
  const [openMenu, setOpenMenu] = useState(1);
  const [activeMenu, setActiveMenu] = useState(1);

  const toggleMenu = (id) => {
    setActiveMenu(id);
    setOpenMenu(openMenu === id ? 1 : id);
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-60 pr-4 h-screen transition-transform flex flex-col justify-between ${
        sidebarOpen
          ? "translate-x-0 bg-white shadow-lg"
          : "-translate-x-full lg:translate-x-0"
      }`}
    >
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

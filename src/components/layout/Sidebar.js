"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import HeaderLogo from "@/images/header-logo.png";
import { IoMdClose } from "react-icons/io";
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

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(1);

  useEffect(() => {
    // Find the menu item that matches the current path
    const currentMenu = menuItems.find((item) => item.link === pathname);
    if (currentMenu) {
      setActiveMenu(currentMenu.id);
    }
  }, [pathname]);

  const handleLinkClick = (id) => {
    setActiveMenu(id);
    // Close sidebar on mobile when a link is clicked
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <aside
      className={`fixed top-0 left-0 z-40 w-60 pr-4 h-screen transition-transform flex flex-col justify-between ${
        sidebarOpen
          ? "translate-x-0 bg-white shadow-lg"
          : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <div className="p-6 flex justify-between items-center">
        <Image src={HeaderLogo} className="w-40" alt="LMS Logo" />
        {/* Close button - only visible on mobile */}
        <button
          className="ml-6 lg:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setSidebarOpen(false)}
        >
          <IoMdClose size={24} />
        </button>
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
                onClick={() => handleLinkClick(item.id)}
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

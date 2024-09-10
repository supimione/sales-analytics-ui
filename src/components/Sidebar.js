"use client"; // Required for UI manipulation or using any React hook

import { useState } from "react";
import { FaSignOutAlt, FaLaptop } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

const menuItems = [
  {
    id: 1,
    link: "/distributer",
    title: "Master Data",
    icon: FaSignOutAlt,
    subMenu: [
      { id: 1, title: "Distributer", link: "/distributer" },
      { id: 1.2, title: "Tickets", link: "/tickets" },
    ],
  },
  {
    id: 2,
    link: "/sales",
    title: "Sale",
    icon: FaLaptop,
  },
  {
    id: 3,
    link: "/unsold",
    title: "Unsold",
    icon: FaLaptop,
  },
  {
    id: 4,
    link: "/stocks",
    title: "Stock",
    icon: FaLaptop,
  },
  {
    id: 5,
    link: "#",
    title: "Result",
    icon: FaLaptop,
  },
  {
    id: 6,
    link: "#",
    title: "Report",
    icon: FaLaptop,
    subMenu: [
      { id: 6, title: "Sales Report", link: "#" },
      { id: 6.2, title: "UnSold Report", link: "#" },
      { id: 6.3, title: "Stock Report", link: "#" },
    ],
  },
];

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null); // Manage the open/close state for each sub-menu
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  console.log(activeMenu, activeSubMenu, "activeSubMenu");

  const toggleMenu = (id) => {
    setActiveMenu(id);
    setOpenMenu(openMenu === id ? null : id); // Toggle the menu open/close state
    if (id === 1) {
      setActiveSubMenu(1);
    }
    if (id === 6) {
      setActiveSubMenu(6);
    }
  };

  const toggleSubMenu = (id) => {
    setActiveSubMenu(id);
    if (id === 1.2) {
      setActiveMenu(1);
    } else if (id === 6.2 || id === 6.3) {
      setActiveMenu(6);
    }
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="h-full px-3 pb-4 pt-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.link}
                className={`flex items-center px-4 py-2 text-sm font-semibold ${
                  activeMenu === item.id
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"
                } dark:hover:text-white`}
                onClick={() => toggleMenu(item.id)}
              >
                <span className="bg-gray-200 p-2 rounded-full mr-2">
                  <item.icon />
                </span>
                {item.title}
                {item.subMenu && <IoMdArrowDropdown className="ml-auto" />}
              </Link>
              {openMenu === item.id && item.subMenu && (
                <ol className="submenu list-none ml-14">
                  {item.subMenu.map((subItem) => (
                    <li
                      key={subItem.id}
                      className="text-sm submenu-item leading-6 before:content-['-'] before:mr-2"
                    >
                      <Link
                        href={subItem.link}
                        className={`${
                          activeSubMenu === subItem.id
                            ? "text-blue-600 dark:text-blue-400"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                        onClick={() => toggleSubMenu(subItem.id)}
                      >
                        {subItem.title}
                      </Link>
                    </li>
                  ))}
                </ol>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

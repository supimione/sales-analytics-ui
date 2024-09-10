"use client"; // Required for UI manipulation or using any React hook

import { useState } from "react";
import { FaSignOutAlt, FaLaptop } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

const menuItems = [
  {
    id: 1,
    title: "Master Data",
    icon: FaSignOutAlt,
    subMenu: [
      { id: 1.1, title: "Distributer", link: "#" },
      { id: 1.2, title: "Tickets", link: "#" },
    ],
  },
  {
    id: 2,
    title: "Sale",
    icon: FaLaptop,
  },
  {
    id: 3,
    title: "Unsold",
    icon: FaLaptop,
  },
  {
    id: 4,
    title: "Stock",
    icon: FaLaptop,
  },
  {
    id: 5,
    title: "Result",
    icon: FaLaptop,
    subMenu: [
      { id: 5.1, title: "Add Game Result", link: "#" },
      { id: 5.2, title: "Result Game List", link: "#" },
    ],
  },
  {
    id: 6,
    title: "Report",
    icon: FaLaptop,
    subMenu: [
      { id: 6.1, title: "Sales Report", link: "#" },
      { id: 6.2, title: "UnSold Report", link: "#" },
      { id: 6.3, title: "Stock Report", link: "#" },
    ],
  },
];

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null); // Manage the open/close state for each sub-menu

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu); // Toggle the menu open/close state
  };

  return (
    <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="h-full px-3 pb-4 pt-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href="#"
                className="flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 dark:hover:text-white"
                onClick={() => toggleMenu(item.id)}
              >
                <span className="bg-gray-200 p-2 rounded-full mr-2">
                  <item.icon />
                </span>
                {item.title}
                {item.subMenu && <IoMdArrowDropdown className="ml-auto" />}
              </Link>
              {openMenu === item.id && item.subMenu && (
                <ol className="submenu list-none ml-8">
                  {item.subMenu.map((subItem) => (
                    <li
                      key={subItem.id}
                      className="submenu-item before:content-['-'] before:mr-2"
                    >
                      <Link href={subItem.link}>{subItem.title}</Link>
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

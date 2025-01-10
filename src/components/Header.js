"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Admin from "@/images/user.png";
import { IoMdSettings } from "react-icons/io";
import { FaKey, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  const closeUserMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsUserMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isUserMenuOpen) {
      document.addEventListener("click", closeUserMenu);
    } else {
      document.removeEventListener("click", closeUserMenu);
    }
    return () => document.removeEventListener("click", closeUserMenu);
  }, [isUserMenuOpen]);

  return (
    <nav className="fixed top-0 z-50 w-full">
      <div className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center justify-start rtl:justify-end">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>

        <div className="relative">
          <Image
            className="w-9 h-9 rounded-full cursor-pointer"
            onClick={toggleUserMenu}
            src={Admin}
            alt=""
          />
          <span className="absolute bottom-0 left-7 w-3 h-3 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>

        <div
          ref={dropdownRef}
          className={`absolute right-6 top-14 w-48 bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600 transform transition-transform duration-300 ${
            isUserMenuOpen
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0 pointer-events-none"
          }`}
          id="dropdown-user"
        >
          <div className="px-4 py-3" role="none">
            <p className="text-xs text-gray-600 font-semibold leading-4 dark:text-gray-400">
              Rahit Roy (Admin)
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-400">
              admin@gmail.com
            </p>
          </div>
          <ul className="py-1" role="none">
            <li>
              <Link
                href="#"
                className="flex items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <IoMdSettings className="mr-2" /> Settings
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <FaKey className="mr-2" /> Change Password
              </Link>
            </li>
            <hr className="border-gray-100 dark:border-gray-600 my-1" />
            <li>
              <Link
                href="#"
                className="flex items-center px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <FaSignOutAlt className="mr-2" /> Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

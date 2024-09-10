// components/Header.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "../images/logo.png";
import Admin from "../images/admin.jpg";
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import { FaKey, FaSignOutAlt } from "react-icons/fa";

export default function Header() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
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
            <Image src={Logo} className="w-16 h-12 me-3" alt="FlowBite Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              LMS Lottery
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={Admin}
              alt="Admin Picture"
              onClick={toggleUserMenu}
              className="w-10 h-10 rounded-full cursor-pointer"
            />
            <div>
              <p className="text-sm text-gray-800 font-semibold leading-4 dark:text-gray-400">
                Neil Sims
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                neil.sims@gmail.com
              </p>
            </div>
          </div>

          <div
            className={`absolute right-3 top-14 w-48 bg-white divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600 ${
              isUserMenuOpen ? "block" : "hidden"
            }`}
            id="dropdown-user"
          >
            <div className="px-4 py-3" role="none">
              <p className="text-sm text-gray-900 dark:text-white" role="none">
                Admin
              </p>
            </div>
            <ul className="py-1" role="none">
              <li>
                <Link
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <IoMdSettings className="mr-2" /> Settings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <FaKey className="mr-2" /> Change Password
                </Link>
              </li>
              {/* Separator Line */}
              <hr className="border-gray-200 dark:border-gray-600 my-1" />
              <li>
                <Link
                  href="#"
                  className="flex items-center px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <FaSignOutAlt className="mr-2" /> Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

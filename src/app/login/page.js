/* eslint-disable @next/next/no-img-element */
"use client"; // UI manipulation or using any React hook we have to use

import { useState } from "react";
import Image from "next/image";
import Logo from "@/images/logo.png";

export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg rounded-3xl px-14 pt-8 pb-14">
          <div className="flex justify-center mb-6">
            <Image
              src={Logo}
              alt="Lottery Management System Logo"
              className="h-22 w-32"
            />
          </div>
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold">Hi, Welcome to LMS CRM</h1>

            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                <label className="text-sm">Email Address</label>
                <input
                  name="email"
                  type="text"
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full h-8 text-sm border-2 mt-0 pl-2 rounded-md border-neutral-100 text-gray-900 focus:outline-none focus:border-rose-600"
                />
                <label className="text-sm">Password</label>
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  className="w-full h-8 text-sm border-2 mt-0 pl-2 rounded-md border-neutral-100 text-gray-900 focus:outline-none focus:border-rose-600"
                />

                <div className="flex items-center mt-3 text-sm text-red-800 rounded-lg">
                  <svg
                    className="flex-shrink-0 inline w-4 h-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  All the fields are required
                </div>

                <div className="text-right">
                  <button
                    className="bg-cyan-500 text-white rounded-md px-5 py-2 mt-5 text-sm float-right"
                    onClick={handleSubmit}
                    disabled={
                      formData.email == null ||
                      formData.email === "" ||
                      formData.password == null ||
                      formData.password === ""
                    }
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

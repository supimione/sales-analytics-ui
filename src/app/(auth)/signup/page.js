"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError(""); // Reset the error message when the user modifies the input
  };

  const handleSubmit = () => {
    const credentials = {
      admin: { email: "admin@gmail.com", password: "Admin@1212" },
      distributor: {
        email: "distribute@gmail.com",
        password: "Distribute@2121",
      },
      user: { email: "user@gmail.com", password: "User@1122" },
    };

    // Validate inputs
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    // Check credentials and redirect accordingly
    if (
      formData.email === credentials.admin.email &&
      formData.password === credentials.admin.password
    ) {
      // Store admin info in localStorage
      localStorage.setItem(
        "adminInfo",
        JSON.stringify({
          email: "admin@gmail.com",
          type: "admin",
        })
      );
      router.push("/admin"); // Redirect to admin dashboard
    } else if (
      formData.email === credentials.distributor.email &&
      formData.password === credentials.distributor.password
    ) {
      // Store distributor info in localStorage
      localStorage.setItem(
        "distributorInfo",
        JSON.stringify({
          email: "distribute@gmail.com",
          type: "distributor",
        })
      );
      router.push("/distributor"); // Redirect to distributor dashboard
    } else if (
      formData.email === credentials.user.email &&
      formData.password === credentials.user.password
    ) {
      // Store user info in localStorage
      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          email: "user@gmail.com",
          type: "user",
        })
      );
      router.push("/user"); // Redirect to user dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative bg-white shadow-lg rounded-3xl p-10">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-semibold text-center">
              Welcome to LMS
            </h1>
            <p className="text-center text-[#6e6e6e] text-sm p-3">
              Please log in to continue managing your LMS
            </p>

            <div className="divide-y divide-gray-200">
              <div className="pt-4 pb-12 text-gray-700 sm:text-lg sm:leading-7">
                <label className="text-sm">Email</label>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full h-8 text-sm border-2 mt-0 pl-2 rounded-md border-neutral-100 text-gray-900 focus:outline-none focus:border-gray-200"
                />
                <label className="text-sm">Email</label>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full h-8 text-sm border-2 mt-0 pl-2 rounded-md border-neutral-100 text-gray-900 focus:outline-none focus:border-gray-200"
                />
                <label className="text-sm">Email</label>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange}
                  autoComplete="off"
                  className="w-full h-8 text-sm border-2 mt-0 pl-2 rounded-md border-neutral-100 text-gray-900 focus:outline-none focus:border-gray-200"
                />
                <label className="text-sm">Password</label>
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  className="w-full h-8 text-sm border-2 mt-0 pl-2 rounded-md border-neutral-100 text-gray-900 focus:outline-none focus:border-gray-200"
                />

                {error && (
                  <div className="flex items-center mt-3 text-sm text-red-800 rounded-lg">
                    <svg
                      className="flex-shrink-0 inline w-4 h-4 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    {error}
                  </div>
                )}

                <div className="text-right">
                  <button
                    className="bg-cyan-500 text-white rounded-md px-8 py-2 mt-5 text-sm float-right"
                    onClick={handleSubmit}
                    disabled={
                      !formData.email ||
                      !formData.password ||
                      formData.email.trim() === "" ||
                      formData.password.trim() === ""
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

"use client"; // UI manipulation or using any React hook we have to use

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter(); // To navigate to another screen
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // State to store error message

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setError(""); // Reset the error message when the user modifies the input
  };

  const handleSubmit = () => {
    // Default credentials
    const defaultEmail = "admin@gmail.com";
    const defaultPassword = "Admin@123";

    // Validate inputs
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    // Check if email and password match the default credentials
    if (
      formData.email === defaultEmail &&
      formData.password === defaultPassword
    ) {
      // Redirect to another screen (for example: dashboard)
      router.push("/distributer"); // Change "/dashboard" to your actual redirect path
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

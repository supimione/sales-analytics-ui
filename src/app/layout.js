"use client"; // This marks the file as a client component

import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

// Import metadata from the server-side file
import { metadata } from "./RootLayoutServer";

import "./globals.css";

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Define the toggle function
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // If window width is greater than 1024px, close the sidebar
      if (window.innerWidth > 1024) {
        setSidebarOpen(false);
      }
    };
    // Add event listener on component mount
    window.addEventListener("resize", handleResize);
    // Call the function on initial render to handle current window size
    handleResize();
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Sidebar sidebarOpen={sidebarOpen} />
        <Header sidebarToggle={handleSidebarToggle} />
        <main className="ml-0 lg:ml-64 px-3">
          <div className="bg-white main-min-height text-[rgba(58,53,65,0.87)] transition-shadow duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-md shadow-[0px_2px_10px_0px_rgba(58,53,65,0.1)]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

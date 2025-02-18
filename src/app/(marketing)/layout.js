"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import "@/styles/globals.css";

export default function MarketingLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
      <body>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Header sidebarToggle={handleSidebarToggle} />
        <main className="ml-0 lg:ml-60 px-3">
          <div className="bg-white main-min-height text-[rgba(58,53,65,0.87)] transition-shadow duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-md shadow-[0px_2px_10px_0px_rgba(58,53,65,0.1)]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

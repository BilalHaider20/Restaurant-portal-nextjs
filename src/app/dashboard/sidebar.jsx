"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const router = useRouter();

  const handleLogout = () => {
    // Logic for handling logout
    console.log("User logged out");
  };

  return (
    <div className="fixed bg-gray-300 ">
      <div
        className={`min-h-screen flex ${
          darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-200 text-gray-900"
        } transition-colors duration-200`}
      >
        {/* Sidebar */}
        <div className="w-64 flex flex-col h-screen fixed">
          {/* Logo / Branding */}
          <div
            className={`flex items-center justify-center h-16 ${
              darkMode ? "bg-gray-800" : "bg-gray-300"
            } transition-colors duration-200`}
          >
            <span className="text-2xl font-semibold">Admin Dashboard</span>
          </div>

          {/* Light/Dark Mode Toggle */}
          <div className="p-4 flex justify-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span
                className={`ml-3 text-sm font-medium ${
                  darkMode ? "text-white" : "text-gray-900"
                } `}
              >
                {darkMode ? "Dark Mode" : "Light Mode"}
              </span>
            </label>
          </div>
          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className={`flex items-center p-2 text-sm font-medium rounded-md ${
                    darkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-600"
                      : "text-gray-600 hover:text-black hover:bg-gray-400"
                  } transition-colors duration-200`}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7h18M3 12h18M3 17h18"
                    ></path>
                  </svg>
                  Dashboard
                </a>
              </li>
              <li>
                <Link
                  href="/dashboard/orders"
                  className={`flex items-center p-2 text-sm font-medium rounded-md ${
                    darkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-600"
                      : "text-gray-600 hover:text-black hover:bg-gray-400"
                  } transition-colors duration-200`}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Orders
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center p-2 text-sm font-medium rounded-md ${
                    darkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-600"
                      : "text-gray-600 hover:text-black hover:bg-gray-400"
                  } transition-colors duration-200`}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3"
                    ></path>
                  </svg>
                  Reports
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex items-center p-2 text-sm font-medium rounded-md ${
                    darkMode
                      ? "text-gray-400 hover:text-white hover:bg-gray-600"
                      : "text-gray-600 hover:text-black hover:bg-gray-400"
                  } transition-colors duration-200`}
                >
                  <svg
                    className="w-5 h-5 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M5 21v-4M12 3v18M19 3v4M19 21v-4"
                    ></path>
                  </svg>
                  Settings
                </a>
              </li>
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="px-4 py-4">
            <button
              onClick={handleLogout}
              className={`w-full flex items-center p-2 text-sm font-medium rounded-md ${
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-red-500"
                  : "text-gray-600 hover:text-black hover:bg-red-400"
              } transition-colors duration-200`}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                ></path>
              </svg>
              Logout
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="ml-64 flex-1 h-screen overflow-hidden">
          {/* Your main dashboard content goes here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

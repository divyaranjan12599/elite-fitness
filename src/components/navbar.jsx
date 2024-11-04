import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false); // State for toggling the dropdown

  const handleTabClick = (path) => {
    setSelectedTab(path);
    setIsOpen(false); // Close the menu on tab click
  };

  return (
    <div className="flex-row md:flex justify-between items-center w-full bg-transparent">
      <h1 className="nav-brand text-4xl font-bold text-orange-400">Logo</h1>

      {/* Hamburger Icon */}
      <button
        className="md:hidden p-2 text-gray-300 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Navigation Links */}
      <div
        className={`nav-link flex flex-row md:flex md:items-center md:p-8 bg-[#0B192C] transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        {["/", "/about", "/ourBlog", "/services", "/ourTeam"].map(
          (path) => (
            <Link
              key={path}
              to={path}
              onClick={() => handleTabClick(path)}
              className={`relative font-normal mx-10 text-xl text-gray-300 hover:text-orange-400 pb-1 transition-all ${
                selectedTab === path ? "border-b-2 border-orange-400" : ""
              }`}
            >
              {path === "/"
                ? "Home"
                : path === "/about"
                ? "About Us"
                : path === "/ourBlog"
                ? "Our Blog"
                : path === "/services"
                ? "Services"                
                : "Our Team"}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

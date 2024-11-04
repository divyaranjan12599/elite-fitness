
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../lib/utils";
import { Link, useLocation } from "react-router-dom";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname);
  const [isOpen, setIsOpen] = useState(false); // State for toggling the dropdown

  const handleTabClick = (path) => {
    setSelectedTab(path);
    setIsOpen(false); // Close the menu on tab click
  };

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.03) {
        setVisible(false);
      } else {
        if (direction != 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed backdrop-blur-3xl bg-black bg-opacity-50 top-0 inset-x-0 dark:border-white/[0.2] bg-[#1E3E62] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8  items-center justify-center",
          className
        )}
      >
        <div className="flex justify-between items-center w-full bg-transparent">
          <h1 className="nav-brand text-4xl font-bold text-orange-400">Logo</h1>

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

          <div
            className={`nav-link p-8 ${
              isOpen ? "block" : "hidden md:block"
            }`}
          >
            {[
              "/",
              "/about",
              "/ourBlog",
              "/services",
              "/ourTeam"
            ].map((path) => (
              <Link
                key={path}
                to={path}
                onClick={() => handleTabClick(path)}
                className={`relative blur-none font-normal mx-10 text-xl text-gray-300 hover:text-orange-400 pb-1 transition-all ${
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
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
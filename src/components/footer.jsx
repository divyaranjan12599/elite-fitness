import {
  faEnvelope,
  faLocation,
  faMapMarkedAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="sticky bottom-0 bg-opacity-40 flex flex-col sm:flex-row bg-black justify-center">
        <div className="group h-full p-5 sm:p-10 flex items-center justify-center">
          <div className="w-16 h-16 bg-[#222] rounded-full flex items-center justify-center group-hover:bg-orange-500 transition duration-300 ease-in-out">
            <FontAwesomeIcon
              className="text-orange-500 w-8 h-8 group-hover:text-white"
              icon={faMapMarkedAlt}
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-white mt-2">
              333 Middle Winchendon Rd,
              <br /> Rindge, NH 03461
            </p>
          </div>
        </div>
        <div className="group h-full p-5 sm:p-10 flex items-center justify-center">
          <div className="w-16 h-16 bg-[#222] rounded-full flex items-center justify-center group-hover:bg-orange-500 transition duration-300 ease-in-out">
            <FontAwesomeIcon
              className="text-orange-500 w-8 h-8 group-hover:text-white"
              icon={faMobileAlt}
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-white mt-2">125-711-811 | 125-668-886</p>
          </div>
        </div>
        <div className="group h-full p-5 sm:p-10 flex items-center justify-center">
          <div className="w-16 h-16 bg-[#222] rounded-full flex items-center justify-center group-hover:bg-orange-500 transition duration-300 ease-in-out">
            <FontAwesomeIcon
              className="text-orange-500 w-8 h-8 group-hover:text-white"
              icon={faEnvelope}
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-white mt-2">Support.gymcenter@gmail.com</p>
          </div>
        </div>
      </footer>
      <footer className="bg-black bg-opacity-100 hover:bg-opacity-40 duration-700">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-500">
                  Logo
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Working hours
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      {" "}
                      Monday – Friday: <br />
                      07:00 – 21:00
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Saturday: <br />
                      07:00 – 16:00
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Sunday Close
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Follow us
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://www.instagram.com/aman_yadav_605/"
                      className="hover:underline"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/amanyadavv605"
                      className="hover:underline"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                  Legal
                </h2>
                <ul className="text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="sm:mx-auto border-gray-700 lg:my-2" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

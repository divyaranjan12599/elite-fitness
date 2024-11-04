import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRight,
  faMapMarkedAlt,
  faMobileAlt,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {window.location.pathname == "/ourTeam" ? (
        <button
          className="group px-4 py-2 mb-2 text-white text-xl mx-auto text-center rounded-full relative mt-4"
          onClick={handleButtonClick}
        >
          <a className="group-hover:border-b-0">Join Us</a>
          <FontAwesomeIcon
            className="group-hover:opacity-0 opacity-100 duration-75"
            icon={faAngleRight}
          />
          <FontAwesomeIcon
            className="opacity-0 group-hover:opacity-100 group-hover:translate-x-3 duration-500"
            icon={faArrowRight}
          />
        </button>
      ) : window.location.pathname == "/" ? (
        <button
          className="group px-4 py-2 mb-2 text-white text-xl mx-auto flex text-center justify-center items-center relative mt-4"
          onClick={handleButtonClick}
        >
          <span className="group-hover:text-2xl md:text-xl text-sm duration-500">
            {" "}
            Explore{" "}
          </span>
          <FontAwesomeIcon
            className="group-hover:translate-x-3 text-sm duration-500"
            icon={faArrowRight}
          />
          {/* <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-500 to-transparent" /> */}
        </button>
      ) : (
        <button
          class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          onClick={handleButtonClick}
        >
          <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-600 via-white to-red-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

          <span class="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
            <div class="relative z-10 flex items-center space-x-2">
              <span class="transition-all duration-500 group-hover:translate-x-1">
                BOOK NOW
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
          </span>
        </button>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex w-full h-screen items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg w-1/2 h-1/2 text-center relative overflow-hidden">
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1521620860034-0a3430d856d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 -right-[30rem] p-5 bg-black bg-opacity-30 flex justify-center text-white">
              <h2 className="text-4xl font-bold">Welcome!</h2>
            </div>
            <div className="absolute inset-0 ml-[34rem] p-4 flex flex-col justify-center items-start text-white text-start">
              <p className="mb-4">We're excited to have you join us.</p>
              <div className="text-2xl">
                <FontAwesomeIcon icon={faPhone} />
                <span className="ml-5">125-711-811 | 125-668-886</span>
              </div>
              <div className="text-2xl mt-7">
                <FontAwesomeIcon icon={faMapMarkedAlt} />
                <span className="ml-5">333 Middle Winchendon Rd,
                <br /> Rindge, NH 03461</span>
              </div>
              <div className="text-2xl mt-7">
                <FontAwesomeIcon icon={faEnvelope} />
                <span className="ml-5">Support.gymcenter@gmail.com</span>
            </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-8 rounded"
                onClick={closeModal}
              >
                Close
              </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

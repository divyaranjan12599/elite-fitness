import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faArrowRight,
  faMapMarkedAlt,
  faMobileAlt,
  faEnvelope,
  faPhone
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white flex flex-row p-1 rounded-lg w-1/2 h-1/2 text-center">
            <div className="w-1/3">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </div>
            <div className="mx-auto">
              <h2 className="text-2xl mb-4">Welcome !</h2>
              <p className="mb-4">We're excited to have you join us.</p>
              <div className="text-2xl">
              <FontAwesomeIcon icon={faPhone} />  
              <span className="ml-5">+91 93274093***</span>
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

import React from 'react';
import {
  faBlender,
  faFireAlt,
  faGear,
  faHeartbeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeaturesSection() {
  return (
    <div className="bg-black flex flex-col justify-center items-center w-full p-10">
      <span className="text-orange-600 text-xl">WHY CHOOSE US?</span>
      <span className="text-white text-3xl font-bold mt-2 text-center">
        PUSH YOUR LIMITS FORWARD
      </span>
      <div className="flex flex-wrap justify-center px-4 gap-12 mt-12">
        <div className="group flex flex-col items-center">
          <div className="w-24 h-24 bg-[#222] rounded-full flex items-center justify-center group-hover:bg-orange-500 transition duration-300 ease-in-out">
            <FontAwesomeIcon className="text-orange-500 w-12 h-12 group-hover:text-white" icon={faGear} />
          </div>
          <p className="text-white mt-2 text-center">Modern equipment</p>
          <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="group flex flex-col items-center">
          <div className="w-24 h-24 bg-[#222] rounded-full flex items-center justify-center group-hover:bg-orange-500 transition duration-300 ease-in-out">
            <FontAwesomeIcon className="text-orange-500 w-12 h-12 group-hover:text-white" icon={faBlender} />
          </div>
          <p className="text-white mt-2 text-center">Healthy nutrition plan</p>
          <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="group flex flex-col items-center">
          <div className="w-24 h-24 bg-[#222] rounded-full flex items-center justify-center group-hover:bg-orange-500 transition duration-300 ease-in-out">
            <FontAwesomeIcon className="text-orange-500 w-12 h-12 group-hover:text-white" icon={faFireAlt} />
          </div>
          <p className="text-white mt-2 text-center">Professional training plan</p>
          <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet...</p>
        </div>

        <div className="group flex flex-col items-center">
          <div className="w-24 h-24 bg-[#222] rounded-full flex items-center justify-center group-hover:bg-orange-500 transition duration-300 ease-in-out">
            <FontAwesomeIcon className="text-orange-500 w-12 h-12 group-hover:text-white" icon={faHeartbeat} />
          </div>
          <p className="text-white mt-2 text-center">Unique to your needs</p>
          <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
    </div>
  );
}

import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React,{ useState } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";

export default function TeamSection() {
  return (
    <section class="team-section py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center flex-col lg:flex-row md:mt-20">
          <div class="w-full lg:w-1/2">
            <h2 class="font-manrope text-5xl text-orange-400 font-bold leading-[4rem] mb-7 text-center lg:text-left">
              Our leading, strong & creative team
            </h2>
            <p class="text-lg text-white mb-16 text-center lg:text-left">
              These people work on making our product best.
            </p>
            {window.location.pathname == "/" ? (
              <Link
                className="group px-4 py-2 mb-2 text-white text-xl mx-auto text-center rounded-full relative mt-4"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/ourTeam";
                }}
              >
                <span className="group-hover:border-b-0">Explore</span>
                <FontAwesomeIcon
                  className="group-hover:opacity-0 opacity-100 duration-75 ml-1"
                  icon={faAngleRight}
                />
                <FontAwesomeIcon
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 duration-500"
                  icon={faArrowRight}
                />
                {/* <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-orange-500 to-transparent" /> */}
              </Link>
            ) : (<Modal/>)}
          </div>
          <div class="team-layout w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl">
            <div class="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8">
              <img
                src="https://plus.unsplash.com/premium_photo-1664475846873-1239d5e96209?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Team tailwind section"
                class="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
              />
              <img
                src="https://images.unsplash.com/photo-1541694458248-5aa2101c77df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Team tailwind section"
                class="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1579758682665-53a1a614eea6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Team tailwind section"
                class="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
              />
              <img
                src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Team tailwind section"
                class="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1604480133435-25b86862d276?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Team tailwind section"
                class="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
              />
              <img
                src="https://images.unsplash.com/photo-1628935291759-bbaf33a66dc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGd5bSUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D"
                alt="Team tailwind section"
                class="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Banner() {
  return (
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10 mt-28">
      <img
        src="https://images.unsplash.com/photo-1517964603305-11c0f6f66012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D"
        alt="Banner Image"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <div class="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 class="sm:text-4xl text-2xl font-bold mb-6 font-serif">Explore the GYM</h2>
        <p class="sm:text-xl text-base text-center font-mono">
          BOOK YOUR APPOINTMENT WITH US, NOW!!!
        </p>

        <div class="flex items-center justify-center py-10">
          <div class="relative group">
            <a href="/appointment">
              <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

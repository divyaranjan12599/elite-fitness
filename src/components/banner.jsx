import React from "react";
import Modal from "./modal";

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

              <Modal />
      </div>
    </div>
  );
}

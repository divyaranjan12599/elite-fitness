import React, { Component } from "react";

export default function HoverCards() {
  return (
    <div className="grid grid-rows-1 flex justify-center">
    <div className="grid grid-row text-center p-8">
        <span className="text-orange-600 text-xl">OUR CLASSES</span>
        <span className="text-white text-3xl font-bold mt-2">
          WHAT WE CAN OFFER?
        </span>
      </div>
    <div className="w-full px-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 p-2 gap-12">
      {[
        { src: "https://plus.unsplash.com/premium_photo-1664298336349-5f509828df83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D", title: "Strength", text: "Weight Lifting"},
        { src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D", title: "Cardio", text: "Zumba"},
        { src: "https://images.unsplash.com/photo-1591741543032-bf439b4fd46c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D", title: "Strength", text: "Cross-Fit"},
        { src: "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGd5bXxlbnwwfHwwfHx8MA%3D%3D", title: "Cardio", text: "Calisthenics"},
        { src: "https://images.unsplash.com/photo-1591741535018-d042766c62eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGd5bXxlbnwwfHwwfHx8MA%3D%3D", title: "Strength", text: "Cycling"},
        { src: "https://images.unsplash.com/photo-1613686955273-4ac02632ae12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D", title: "Cardio", text: "Boxing"},
      ].map((card, index) => (
        <div class="relative group duration-800 cursor-pointer group overflow-hidden text-gray-50 h-[25rem] w-72  rounded-2xl hover:duration-900 duration-900">
          <div class="w-80 h-96 text-gray-800">
            <img src={card.src} alt="" />
          </div>
          <div class="absolute bg-black group-hover:bg-opacity-50 group-hover:backdrop-blur-md group-hover:h-[25rem] -bottom-24 w-full p-3 flex flex-col justify-center gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500">
            <span class="text-orange-600 font-bold text-xs">{card.title}</span>
            <span class="text-orange-300 font-bold text-3xl">{card.text}</span>
            <p class="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
}

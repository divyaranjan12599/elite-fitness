import React from "react";

export default function Comment() {
  return (
    <div className="p-16 flex flex-col items-center w-full">
      <div className="nav-link p-12">
      <a className="text-4xl text-white text-left uppercase">post a comment</a>
      </div>
      <form class="bg-opacity-20 bg-white w-[90vw] md:w-[50vw] p-6 rounded-lg shadow-md">
        <div class="mb-4">
          <label for="title" class="block text-white text-sm font-bold mb-2">
            Title
          </label>
          <input
            placeholder="Enter title"
            type="text"
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-white text-black leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="mb-4">
          <label for="content" class="block text-white text-sm font-bold mb-2">
            Comment
          </label>
          <textarea
            rows="5"
            placeholder="Enter your content"
            id="content"
            class="shadow appearance-none border-2 rounded w-full py-2 px-3 bg-white text-black leading-tight focus:border-orange-400 focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
            type="submit"
            class="bg-slate-100 text-sm hover:bg-slate-300 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

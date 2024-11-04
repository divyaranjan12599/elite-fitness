import React from "react";
import { FlipWordsUi } from "./Ui/flipWordsUi";

export default function FlipWords() {
  const words = ["Physical", "Great", "Healthy", "Mental"];

  return (
    (<div className="h-[28rem] flex justify-center items-center my-auto mt-20">
      <div
        className="text-7xl mx-auto font-normal text-neutral-200">
        Build
        <FlipWordsUi words={words} /> <br />
        Fitness with Us
      </div>
    </div>)
  );
}

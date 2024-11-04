
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { div, image } from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faImagePortrait,
  faImages,
} from "@fortawesome/free-solid-svg-icons";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="h-full grid grid-cols-2 md:grid-cols-5  mx-auto relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer absolute inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-[#FF6500] h-full w-full"
                : "bg-[#FF6500] h-full w-full"
            )}
            layoutId={`card-${card.id}`}
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            {/* <div className="group"> */}
              <div className="h-[27rem] hover:translate-x-3 hover:translate-y-3 duration-300 hover:cursor-pointer">
                <ImageComponent card={card} />
              </div>
              {/* <div className="relative text-white bg-black bg-opacity-50 rounded-full backdrop-blur-sm flex justify-center items-center h-[27rem] scale-0 duration-700 group-hover:scale-150 uppercase">
                Click To Open
              </div> */}
            {/* </div> */}
          </motion.div>
        </div>
      ))}
      <motion.div
        onClick={handleOutsideClick}
        className={cn(
          "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
          selected?.id ? "pointer-events-auto" : "pointer-events-none"
        )}
        animate={{ opacity: selected?.id ? 0.3 : 0 }}
      />
    </div>
  );
};

const ImageComponent = ({ card }) => {
  return (
    <motion.img
      layoutId={`image-${card.id}-image`}
      src={card.thumbnail}
      height="500"
      width="500"
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200"
      )}
      alt="thumbnail"
    />
  );
};

const ImageIcon = () => {
  return (
    <div className="relative flex justify-center top-96">
      <FontAwesomeIcon className="text-orange-500 w-12 h-12" icon={faImage} />
    </div>
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-screen flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-screen bg-black opacity-60 z-10"
      />
      <motion.div
        layoutId={`content-${selected?.id}`}
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};

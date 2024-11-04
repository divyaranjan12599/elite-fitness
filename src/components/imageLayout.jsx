
import React from "react";
import { LayoutGrid } from "./Ui/layout-grid";

export default function ImageLayout() {
  return (
    (<div className="w-screen">
      <LayoutGrid cards={cards} />
    </div>)
  );
}

const SkeletonOne = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House in the woods
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>)
  );
};

const SkeletonTwo = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        House above the clouds
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>)
  );
};
const SkeletonThree = () => {
    return (
        (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>)
  );
};
const SkeletonFour = () => {
    return (
        (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>)
  );
};
const SkeletonFive = () => {
    return (
        (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>)
  );
};
const SkeletonSix = () => {
  return (
    (<div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Greens all over
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>)
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
    "https://images.unsplash.com/photo-1723919560649-57a44ea38156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGd5bXxlbnwwfHwyfHx8MA%3D%3D",
},
{
    id: 2,
    content: <SkeletonTwo />,
    className: "md:col-span-1",
    thumbnail:
    "https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1649789261044-0c6a9fb528ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGd5bXxlbnwwfDB8NHx8fDA%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1556817411-58c45dd94e8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3ltfGVufDB8MHw0fHx8MA%3D%3D",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1578924608828-79a71150f711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGd5bXxlbnwwfDB8NHx8fDA%3D",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1663036880678-62ae2e87c4c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

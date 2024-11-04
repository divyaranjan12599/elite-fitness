import React from "react";

export default function Vimeo() {
  return (
    <div>
      <div className="flex flex-col p-16 justify-center items-center">
        <h1 className="text-4xl text-center font-bold text-white">
          PREPARE TO TAKE ON EVERYTHING WITH YOUR <br/>HAND.THIS SESSION STRIPS IT
          BACK.
        </h1>
        <p className="prose max-w-[70rem] p-10 text-white">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
          quam nihil. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur.
        </p>
      </div>
      <div className="relative p-56">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://player.vimeo.com/video/273032698?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          title="Canon C200 - Chandel Grace Fitness"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}

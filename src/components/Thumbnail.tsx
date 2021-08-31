import { Image } from "../utils/types";
import React from "react";

function Thumbnail({ image }: { image: Image }) {
  return (
    <button
      className="w-full border border-gray-300 rounded-md focus:border-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      style={{
        paddingTop: "100%",
      }}
    >
      <div>
        <picture>
          <img src={image.url} alt="" />
        </picture>
      </div>
    </button>
  );
}

export default Thumbnail;

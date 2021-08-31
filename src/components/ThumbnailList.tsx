import { Image } from "../utils/types";
import React from "react";
import Thumbnail from "./Thumbnail";

function ThumbnailList({ images }: { images: Image[] }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((_image) => (
        <Thumbnail key={_image.id} image={_image} />
      ))}
    </div>
  );
}

export default ThumbnailList;

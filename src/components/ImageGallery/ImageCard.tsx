import React from "react";
import { Image } from "../App/App";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  image: Image;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  return (
    <div className={s.card}>
      <img
        className={s.img}
        src={image.urls.small}
        alt={image.alt_description || "Image"}
      />
    </div>
  );
};

export default ImageCard;

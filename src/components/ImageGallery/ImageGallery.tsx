import React from "react";
import ImageCard from "./ImageCard";
import { Image } from "../App/App";
import s from "./ImageGallery.module.css";

interface ImageGalleryProps {
  images: Image[]; // Масив зображень
  onImageClick: (image: Image) => void; // Функція для обробки кліку
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  onImageClick,
}) => {
  return (
    <ul className={s.gallery}>
      {images.map((image) => (
        <li
          key={image.id}
          className={s.item}
          onClick={() => onImageClick(image)}
        >
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

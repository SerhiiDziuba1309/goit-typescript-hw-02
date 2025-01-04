import React from "react";
import Modal from "react-modal";
import s from "./ImageModal.module.css";

interface ModalImage {
  urls: {
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

interface ImageModalProps {
  modalImage: ModalImage | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ modalImage, onClose }) => {
  return (
    <>
      {modalImage && <div className={s.overlay} onClick={onClose}></div>}
      <Modal
        isOpen={!!modalImage}
        onRequestClose={onClose}
        className={s.modal}
        overlayClassName={s.overlay}
        ariaHideApp={false}
      >
        {modalImage && (
          <>
            <img
              className={s.img}
              src={modalImage.urls.regular}
              alt={modalImage.alt_description || "Image"}
            />
            <p className={s.text}>Author: {modalImage.user.name}</p>
            <p className={s.text}>Likes: {modalImage.likes}</p>
          </>
        )}
      </Modal>
    </>
  );
};

export default ImageModal;

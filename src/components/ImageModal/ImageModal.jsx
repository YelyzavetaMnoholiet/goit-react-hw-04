import ReactModal from "react-modal";
import { useEffect } from "react";
import styles from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onClose, image, onNext, onPrev }) => {
  useEffect(() => {
    ReactModal.setAppElement("#root");
  }, []);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalContent}>
        <button
          onClick={onPrev}
          className={`${styles.navigationButton} ${styles.previousButton}`}
        >
          Back
        </button>
        <img
          className={styles.modalImage}
          src={image.urls.regular}
          alt={image.alt_description || "Image"}
        />
        <button
          onClick={onNext}
          className={`${styles.navigationButton} ${styles.nextButton}`}
        >
          Next
        </button>
      </div>
      <div className={styles.modalInfo}>
        <p>Author: {image.user.name}</p>
        <p>Likes: {image.likes}</p>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
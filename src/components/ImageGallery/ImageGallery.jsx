import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <div>
      <ul className={css.images}>
        {images.map((image, index) => {
          return (
            <li key={index}>
              <ImageCard image={image} openModal={openModal} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ImageGallery;

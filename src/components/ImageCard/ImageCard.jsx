import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <div>
      <img
        className={css.picture}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() =>
          openModal(
            image.urls.regular,
            image.alt_description,
            image.description
          )
        }
      />
    </div>
  );
};
export default ImageCard;

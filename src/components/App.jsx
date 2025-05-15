import { useState, useEffect } from "react";
import "../components/App.css";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreButton/LoadMoreButton";
import Loader from "./Loader/Loader";
import ImageModal from "./ImageModal/ImageModal";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

import { getImages } from "../apiService/images";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(null);
  const [modalSrc, setModalSrc] = useState(null);
  const [modalAlt, setModalAlt] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  useEffect(() => {
    if (!query) return;

    async function fetchImages() {
      setIsLoading(true);

      try {
        const { results, total_pages } = await getImages(query, page);

        // console.log(results);

        setImages((prevImages) => [...prevImages, ...results]);

        setIsVisible(page < total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [query, page]);

  const onSubmit = (inputQuery) => {
    setQuery(inputQuery);
    setImages([]);
    setPage(1);
    setError(null);
    setIsVisible(false);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (src, alt, description) => {
    setIsOpen(true);
    setModalSrc(src);
    setModalAlt(alt);
    setModalDescription(description);
  };
  const closeModal = () => {
    setIsOpen(false);
    setModalSrc(null);
    setModalAlt("");
    setModalDescription("");
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {isVisible && <LoadMoreBtn onClick={onLoadMore} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
        description={modalDescription}
      />
    </>
  );
};

export default App;

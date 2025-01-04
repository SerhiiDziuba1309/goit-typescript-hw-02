import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import s from "./App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  user: {
    name: string;
  };
  likes: number;
}

interface ApiResponse {
  results: Image[];
}

const UNSPLASH_API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "O4CmHlBkk719CuCc7klHPeRJhobiuP_mtC-K1hus2V0";

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalImage, setModalImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    axios
      .get<ApiResponse>(UNSPLASH_API_URL, {
        params: {
          query,
          page,
          per_page: 20,
          client_id: ACCESS_KEY,
        },
      })
      .then((response) => {
        if (response.data.results.length === 0) {
          toast.error("No results found. Try a different keyword");
          return;
        }
        setImages((prevImages) => [...prevImages, ...response.data.results]);
      })
      .catch(() => {
        setError("Something went wrong. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query, page]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className={s.app}>
      <Toaster position="top-right" />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={loadMore} />}
      {modalImage && (
        <ImageModal modalImage={modalImage} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;

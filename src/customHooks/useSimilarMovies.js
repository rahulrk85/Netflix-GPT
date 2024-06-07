import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utilities/constants";

const useSimilarmovies = (id) => {
  const [movieImages, setmovieImages] = useState(null);
  const fetchMovieImages = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "/recommendations?language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => setmovieImages(response.results))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    !movieImages && fetchMovieImages();
  }, []);
  return movieImages;
};

export default useSimilarmovies;

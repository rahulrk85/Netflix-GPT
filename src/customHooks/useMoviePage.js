import { useDispatch, useSelector } from "react-redux";
import { addMovieDetailedPage } from "../utilities/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";

const useMoviePage = (id) => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getMoviePage = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addMovieDetailedPage(response)))
      .catch((err) => console.error(err));
    // dispatch(addNowPlayingMovies(json.data))
  };

  useEffect(() => {
    !nowPlayingMovies && getMoviePage();
  }, []);
};
export default useMoviePage;

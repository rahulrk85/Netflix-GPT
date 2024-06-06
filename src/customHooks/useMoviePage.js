import { useDispatch, useSelector } from "react-redux";
import { addMovieDetailedPage } from "../utilities/moviesSlice";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utilities/constants";

const useMoviePage = (id) => {
  const dispatch = useDispatch();
  const movieDetailedPage = useSelector(
    (store) => store.movies.movieDetailedPage
  );
  const [movie, setmovie] = useState(null);

  const getMoviePage = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then(
        (response) =>
          setmovie(response) && dispatch(addMovieDetailedPage(response))
      )
      .catch((err) => console.error(err));
    // dispatch(addNowPlayingMovies(json.data))
  };

  useEffect(() => {
    !movieDetailedPage && getMoviePage();
  }, []);
  return movie;
};
export default useMoviePage;

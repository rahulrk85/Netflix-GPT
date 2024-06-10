import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utilities/constants";
import { useDispatch, useSelector } from "react-redux";
import { addSearchedMovies } from "../utilities/moviesSlice";

const useSearchMovies = (name) => {
  // if (name) {
  // name = name.split().replace(" ", "%20");
  // }
  const SearchedMovies = useSelector((store) => store.movies.searchedMovies);
  const [movies, setmovies] = useState(null);
  const dispatch = useDispatch();
  const SearchMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        name +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then(
        (response) =>
          dispatch(addSearchedMovies(response.results)) &&
          setmovies(response.results)
      )
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    !SearchedMovies && SearchMovies();
  }, []);
};

export default useSearchMovies;

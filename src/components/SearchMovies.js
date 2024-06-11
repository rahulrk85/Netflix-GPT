import React, { useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addSearchedMovies } from "../utilities/moviesSlice";
import { API_OPTIONS } from "../utilities/constants";
import ListOfMovies from "./ListOfMovies";

const SearchMovies = () => {
  const movies = useSelector((store) => store.movies.searchedMovies);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const HanbleBtnClick = (name) => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        name +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => dispatch(addSearchedMovies(response.results)))
      .catch((err) => console.error(err));
  };

  return (
    <div className="bg-red-950 h-screen">
      <Header />
      <div className="pt-40 w-full ml-[500px] ">
        <input
          className="border-rose-700 border-2 p-2 rounded-full pr-40"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search your movie..."
        />
        <button
          className="m-2 text-white rounded-lg p-2 bg-red-700"
          onClick={() => HanbleBtnClick(searchText)}
        >
          Search
        </button>
      </div>
      {/* {movies.length>0 && <div>searchedMovies</div>} */}
      {movies?.length > 0 ? (
        <ListOfMovies movies={movies} searchText={searchText} />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SearchMovies;

import React, { useRef } from "react";
import Header from "./Header";
import useSearchMovies from "../customHooks/useSearchMovies";
import { useSelector } from "react-redux";

const SearchMovies = () => {
  useSearchMovies();
  const movies = useSelector((store) => store.movies.searchedMovies);
  const inputRef = useRef(null);
  console.log(inputRef);
  return (
    <div>
      <Header />
      <div className="pt-40 w-full ml-[500px]">
        <input
          className="border-rose-700 border-2 p-2 rounded-full pr-40"
          value={inputRef.current}
          type="text"
          placeholder="Search your movie..."
        />
        <button className="m-2 text-white rounded-lg p-2 bg-red-700">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchMovies;

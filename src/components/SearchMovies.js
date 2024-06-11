import React, { useState } from "react";
import Header from "./Header";
import useSearchMovies from "../customHooks/useSearchMovies";
import { useSelector } from "react-redux";

const SearchMovies = () => {
  // useSearchMovies();
  const movies = useSelector((store) => store.movies.searchedMovies);
  // console.log(movies.length());
  const [searchText, setSearchText] = useState("");

  const HanbleBtnClick = () => {
    useSearchMovies(searchText);
  };
  // let modifiedText = searchText.split().replace(" ", "%20");
  console.log(searchText);
  // console.log(movies?.length);
  return (
    <div>
      <Header />
      <div className="pt-40 w-full ml-[500px]">
        <input
          className="border-rose-700 border-2 p-2 rounded-full pr-40"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          type="text"
          placeholder="Search your movie..."
        />
        <button
          className="m-2 text-white rounded-lg p-2 bg-red-700"
          onClick={HanbleBtnClick()}
        >
          Search
        </button>
      </div>
      {/* {movies.length>0 && <div>searchedMovies</div>} */}
      {movies?.length > 0 ? <div>searchedmovies</div> : <div></div>}
    </div>
  );
};

export default SearchMovies;

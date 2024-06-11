import React from "react";
import { POSTER_PATH } from "../utilities/constants";

const ListOfMovies = ({ movies, searchText }) => {
  if (movies === null) return;
  return (
    <div className="mt-20 bg-red-950">
      <div>
        <h1 className="text-white text-2xl p-2 font-semibold font-serif">
          Results for {searchText}...{" "}
        </h1>
      </div>
      <div className="flex flex-wrap p-2">
        {movies.map((item) =>
          item.poster_path ? (
            <img
              className="w-[150px] p-2 "
              src={POSTER_PATH + item.poster_path}
              alt="poster not available"
            />
          ) : (
            <div></div>
          )
        )}
      </div>
    </div>
  );
};

export default ListOfMovies;

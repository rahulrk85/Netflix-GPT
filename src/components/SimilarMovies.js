import React from "react";
import { POSTER_PATH } from "../utilities/constants";

const SimilarMovies = ({ movieSimilar }) => {
  const { poster_path } = movieSimilar;
  return (
    <div className="w-[200px] p-2w-36 md:w-48 cursor-pointer transition-transform duration-[0.9s] mx-auto my-0 hover:scale-100 hover:px-5 hover:w-[220px] hover:mt-3 hover:opacity-65">
      <img
        className="px-2"
        src={POSTER_PATH + poster_path}
        alt="image_poster"
      />
    </div>
  );
};

export default SimilarMovies;

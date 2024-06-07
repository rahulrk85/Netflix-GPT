import React from "react";
import { POSTER_PATH } from "../utilities/constants";

const SimilarMovies = ({ movieSimilar }) => {
  console.log(movieSimilar);
  const { poster_path } = movieSimilar;
  return (
    <div className="w-[200px] p-2">
      <img src={POSTER_PATH + poster_path} alt="image_poster" />
    </div>
  );
};

export default SimilarMovies;

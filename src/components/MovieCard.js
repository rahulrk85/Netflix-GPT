import React from "react";
import { MOVIE_PATH } from "../utilities/constants";
import { useDispatch } from "react-redux";
import { addMoviePage } from "../utilities/GPTSlice";

const MovieCard = ({ poster, key }) => {
  const dispatch = useDispatch();
  const HandleClick = () => {
    dispatch(addMoviePage());
  };
  if (!poster) return null;
  return (
    <div
      onClick={() => HandleClick(key)}
      className="w-36 md:w-48 cursor-pointer transition-transform duration-[0.9s] mx-auto my-0 hover:scale-100 hover:px-5 hover:w-[220px] hover:mt-3 hover:opacity-65"
    >
      <img className="px-2" src={MOVIE_PATH + poster} alt="img" />
    </div>
  );
};

export default MovieCard;

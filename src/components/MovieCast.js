import React, { useState } from "react";
import useMovieCast from "../customHooks/useMovieCast";
import { POSTER_PATH } from "../utilities/constants";

const MovieCast = () => {
  const CastInfo = useMovieCast();
  console.log(CastInfo);
  if (!CastInfo) return;
  return (
    <div>
      <h1 className="text-3xl mx-2">Cast</h1>
      <div className="flex">
        {CastInfo?.slice(0, 9).map((item) => (
          <div className="flex">
            {item.profile_path && (
              <img
                className="w-[150px] p-2 my-2 cursor-pointer"
                src={POSTER_PATH + item.profile_path}
                alt="cast_photo"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCast;

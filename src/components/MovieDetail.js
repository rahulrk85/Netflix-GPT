import { useParams } from "react-router-dom";
import useMoviePage from "../customHooks/useMoviePage";
import { POSTER_PATH } from "../utilities/constants";
import ShimmerUi from "./ShimmerUi";
import DupliHeader from "./DupliHeader";
import useSimilarmovies from "../customHooks/useSimilarMovies";
import SimilarMovies from "./SimilarMovies";

const MovieDetail = () => {
  const { id } = useParams();
  const data = useMoviePage(id);
  const movieSimilar = useSimilarmovies(id);
  if (movieSimilar === null) return;
  // console.log(movieSimilar);
  if (data === null) return <ShimmerUi />;
  const { backdrop_path, title, overview, vote_average, release_date } = data;

  return (
    <div className="">
      <DupliHeader />
      <div className=" w-full h-[830px] absolute  bg-gradient-to-t from-black"></div>
      <div className="-z-10 relative">
        <img
          className="w-screen h-[830px] "
          src={POSTER_PATH + backdrop_path}
          alt="poster_image"
        />
      </div>
      <div className=" p-4 z-10 bg-black">
        <h1 className="text-white text-4xl py-4 pb-10">Recommended</h1>
        <div className="flex overflow-x-scroll no-scrollbar">
          <div className="flex">
            {movieSimilar.map((item) => (
              <SimilarMovies movieSimilar={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;

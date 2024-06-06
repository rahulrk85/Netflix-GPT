import { useParams } from "react-router-dom";
import useMoviePage from "../customHooks/useMoviePage";
import { useSelector } from "react-redux";
import { POSTER_PATH } from "../utilities/constants";

const MovieDetail = () => {
  const { id } = useParams();
  useMoviePage(id);
  const movieDetail = useSelector((store) => store.movies.movieDetailedPage);
  console.log(movieDetail);
  const { backdrop_path } = movieDetail;
  if (!movieDetail) return;
  return (
    <div>
      <img className="" src={POSTER_PATH + backdrop_path} alt="poster_image" />
    </div>
  );
};

export default MovieDetail;

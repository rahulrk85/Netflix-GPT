import { useParams } from "react-router-dom";
import useMoviePage from "../customHooks/useMoviePage";
import { POSTER_PATH } from "../utilities/constants";

const MovieDetail = () => {
  const { id } = useParams();
  const data = useMoviePage(id);
  if (data === null) return;
  const { backdrop_path } = data;

  return (
    <div className="w-full">
      <img
        className="w-auto"
        src={POSTER_PATH + backdrop_path}
        alt="poster_image"
      />
    </div>
  );
};

export default MovieDetail;

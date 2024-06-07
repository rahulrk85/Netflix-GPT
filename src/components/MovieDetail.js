import { useParams } from "react-router-dom";
import useMoviePage from "../customHooks/useMoviePage";
import { POSTER_PATH } from "../utilities/constants";
import ShimmerUi from "./ShimmerUi";
import Header from "./Header";
import DupliHeader from "./DupliHeader";

const MovieDetail = () => {
  const { id } = useParams();
  const data = useMoviePage(id);
  if (data === null) return <ShimmerUi />;
  console.log(data);
  const { backdrop_path, title, overview, vote_average, release_date } = data;

  return (
    <div className="w-full">
      <DupliHeader />
      <img
        className="w-auto"
        src={POSTER_PATH + backdrop_path}
        alt="poster_image"
      />
    </div>
  );
};

export default MovieDetail;

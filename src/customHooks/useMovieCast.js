import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utilities/constants";
import { useParams } from "react-router-dom";

const useMovieCast = () => {
  const { id } = useParams();
  const [Cast, setCast] = useState(null);
  const FetchCastInfo = async () => {
    fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/credits?language=en-US",
      API_OPTIONS
    )
      .then((response) => response.json())
      .then((response) => setCast(response.cast))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    !Cast && FetchCastInfo();
  }, []);
  return Cast;
};

export default useMovieCast;

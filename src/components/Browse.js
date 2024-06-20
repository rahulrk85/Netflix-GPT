import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Maincontainer from "./Maincontainer";
import Secondaryscreen from "./Secondaryscreen";
import { useSelector } from "react-redux";
import usePopularMovies from "../customHooks/usePopularMovies";
import useUpcomingMovies from "../customHooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import SearchMovies from "./SearchMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const gpt = useSelector((store) => store.gpt.gptToggle);
  const Search = useSelector((store) => store.gpt.searchBar);

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  // const num = Math.floor(Math.random() * 10);

  const main_movie = movies[9];
  const { original_title, id, overview } = main_movie;
  // console.log(main_movie);
  if (!Search) {
    return (
      <div className="no-scrollbar">
        <Header />
        {gpt ? (
          <GptSearch />
        ) : (
          <>
            <Maincontainer title={original_title} id={id} overview={overview} />
            <Secondaryscreen />
          </>
        )}

        {/* <Header/>
      
      <Maincontainer title={original_title} overview={overview} id={id} />
      <Secondaryscreen/> */}
      </div>
    );
  } else {
    return <SearchMovies />;
  }
};

export default Browse;

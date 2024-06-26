import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const Secondaryscreen = () => {
  let moviePage = useSelector((store) => store.gpt.moviePage);

  const nowPlayingMovie = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const topratedMovies = useSelector((store) => store.movies?.topratedMovies);

  return (
    <div className="bg-black no-scrollbar">
      <div className="relative md:-mt-60 z-20 no-scrollbar">
        <MovieList title={"Now Playing"} movies={nowPlayingMovie} />
        <MovieList title={"Top Rated Movies!"} movies={topratedMovies} />
        <MovieList title={"Trending"} movies={popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
        <MovieList title={"Award winnig"} movies={nowPlayingMovie} />
      </div>
    </div>
  );
};

export default Secondaryscreen;

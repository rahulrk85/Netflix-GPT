import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const Secondaryscreen = () => {

  const nowPlayingMovie = useSelector((store)=>store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store.movies?.popularMovies);
  const upcomingMovies = useSelector((store)=>store.movies?.upcomingMovies);
  const topratedMovies = useSelector((store)=>store.movies?.topratedMovies);

  // console.log(nowPlayingMovie);
  console.log(popularMovies);
  // console.log(upcomingMovies);

  return (
    <div className='bg-black '>
      <div className='relative md:-mt-60 z-20'>
      <MovieList title={"Now Playing"} movies={nowPlayingMovie}/>
      <MovieList title={"Top Rated Movies!"} movies={topratedMovies}/>
      <MovieList title={"Trending"} movies={popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies}/>
      <MovieList title={"Award winnig"} movies={nowPlayingMovie}/>
      </div>
    </div>
  )
}

export default Secondaryscreen;
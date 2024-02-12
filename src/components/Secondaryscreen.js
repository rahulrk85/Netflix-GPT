import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const Secondaryscreen = () => {

  const nowPlayingMovie = useSelector((store)=>store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store.movies?.popularMovies);
  const upcomingMovies = useSelector((store)=>store.movies?.upcomingMovies);


  return (
    <div className='bg-black '>
      <div className='relative md:-mt-60 z-20'>
      <MovieList title={"Now Playing"} movies={nowPlayingMovie}/>
      <MovieList title={"Trending"} movies={popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={upcomingMovies}/>
      <MovieList title={"Award winnig"} movies={nowPlayingMovie}/>
      <MovieList title={"Because you did watch Anything!!"} movies={nowPlayingMovie}/>
      </div>
    </div>
  )
}

export default Secondaryscreen;
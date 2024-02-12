import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptRecommendation = () => {

    const searchedText = useSelector((store)=>store.gpt.gptSearch);

    const moviesArray = useSelector((store)=>store.gpt.gptMovies);
    if(!moviesArray) return;
    let movies = [null];

    moviesArray.forEach((item)=>movies.push(...item));
    console.log(movies);
  return (
    <div className='bg-black md:mx-6 h-auto mt-[50%] md:mt-[20%] '>
        <h1 className='text-white  ml-5 md:text-3xl pt-4'>Showing Results for "{searchedText}"</h1>
        <MovieList movies={movies}/>
    </div>
  )
}

export default GptRecommendation;
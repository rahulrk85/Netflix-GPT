import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utilities/constants';
import { addTopRatedMovies } from '../utilities/moviesSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topratedMovies = useSelector((store)=>store.movies.topratedMovies);
    const getTopRatedMovies = async() =>{
      
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        .then(response => response.json())
        .then(response => dispatch(addTopRatedMovies(response.results)))
        .catch(err => console.error(err));
    }

  
    // the tmdb website is not working and the list of movies like nowplaying movies and others are not able to fetch from this website so either find another website with same api structure or build your own api i think we should use the vpn to fetch the movies of the tmdb website try once doing this and let me know if that works .dispatch(addPopularMovies(json.results));
  
    useEffect(()=>{
     !topratedMovies && getTopRatedMovies();
    },[])
}

export default useTopRatedMovies
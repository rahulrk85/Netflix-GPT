import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=>store.movies.popularMovies);
    const getPopularMovies = async() =>{
      
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        .then(response => response.json())
        .then(response => dispatch(addPopularMovies(response.results)))
        .catch(err => console.error(err));
    }

  
    // the tmdb website is not working and the list of movies like nowplaying movies and others are not able to fetch from this website so either find another website with same api structure or build your own api i think we should use the vpn to fetch the movies of the tmdb website try once doing this and let me know if that works .dispatch(addPopularMovies(json.results));
  
    useEffect(()=>{
     !popularMovies && getPopularMovies();
    },[])
};
export default usePopularMovies;
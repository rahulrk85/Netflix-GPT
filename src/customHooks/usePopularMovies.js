import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=>store.movies.popularMovies);

    const getNowPlayingMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
  
    useEffect(()=>{
     !popularMovies && getNowPlayingMovies();
    },[])
};
export default usePopularMovies;
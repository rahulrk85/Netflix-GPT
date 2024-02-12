import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);

    const getNowPlayingMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    }
  
    useEffect(()=>{
      !upcomingMovies && getNowPlayingMovies();
    },[])
};
export default useUpcomingMovies;
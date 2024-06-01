import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);

    const getNowPlayingMovies = async() =>{
      fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
      .then(response => response.json())
      .then(response => dispatch(addUpcomingMovies(response.results)))
      .catch(err => console.error(err));
      // dispatch(addUpcomingMovies(json.data));
    }
  
    useEffect(()=>{
      !upcomingMovies && getNowPlayingMovies();
    },[])
};
export default useUpcomingMovies;
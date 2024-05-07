import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store)=>store.movies.upcomingMovies);

    const getNowPlayingMovies = async() =>{
      const data = await fetch('https://sidecar.tvtime.com/sidecar/tvtcached?o=https://discover.tvtime.com/v1/discover/cgw/trending');
      const json = await data.json();
      dispatch(addUpcomingMovies(json.data));
    }
  
    useEffect(()=>{
      !upcomingMovies && getNowPlayingMovies();
    },[])
};
export default useUpcomingMovies;
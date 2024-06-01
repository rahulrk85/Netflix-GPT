import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async() =>{
      const data = await fetch('https://sidecar.tvtime.com/sidecar/tvtcached?o=https://discover.tvtime.com/v1/discover/cgw/trending');
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.data))
      // console.log(json.data);
    }
  
    useEffect(()=>{
     !nowPlayingMovies && getNowPlayingMovies();
    },[]);

};
export default useNowPlayingMovies;
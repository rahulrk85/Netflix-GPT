import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=aae31bc3cfc5ef6bab2b64cc33c22174');
      const json = await data.json();
      // console.log(json.results);
      dispatch(addNowPlayingMovies(json.results))
    }
  
    useEffect(()=>{
     !nowPlayingMovies && getNowPlayingMovies();
    },[])
};
export default useNowPlayingMovies;
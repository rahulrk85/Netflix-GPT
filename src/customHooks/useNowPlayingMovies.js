import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async() =>{
      fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
      .then(response => response.json())
      .then(response => dispatch(addNowPlayingMovies(response.results)))
      .catch(err => console.error(err));
      // dispatch(addNowPlayingMovies(json.data))
      // console.log(json.data);
    }
  
    useEffect(()=>{
     !nowPlayingMovies && getNowPlayingMovies();
    },[]);

};
export default useNowPlayingMovies;
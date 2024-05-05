import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies);

    const getNowPlayingMovies = async() =>{
      const data = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=aae31bc3cfc5ef6bab2b64cc33c22174');
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
    }
  
    useEffect(()=>{
     !nowPlayingMovies && getNowPlayingMovies1();
    },[])

    const getNowPlayingMovies1 = async() =>{
      const url = 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming?limit=20';
      const options = {
	      method: 'GET',
	      headers: {
		    'X-RapidAPI-Key': '7e321a2e3dmshf92e1f9626cf012p1bbd6ejsn442803ed61e7',
		    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	      }
      };

      try {
	      const response = await fetch(url, options);
	      const result = await response.text();
	      console.log(result);
        const json = result.json();
        dispatch(addNowPlayingMovies(json.results));
      } catch (error) {
	      console.error(error);
      }
    }
};
export default useNowPlayingMovies;
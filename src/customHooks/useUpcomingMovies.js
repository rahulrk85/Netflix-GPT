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
        dispatch(addUpcomingMovies(json.results));
      } catch (error) {
	      console.error(error);
      }
    }
  
    useEffect(()=>{
      !upcomingMovies && getNowPlayingMovies1();
    },[])
};
export default useUpcomingMovies;
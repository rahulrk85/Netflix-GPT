import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utilities/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilities/constants";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = useSelector((store)=>store.movies.popularMovies);

    const getNowPlayingMovies = async() =>{
      const data = await fetch('https://tubitv.com/oz/videos/100020038/related?limit_resolutions=h264_1080p&limit_resolutions=h265_1080p&video_resources=hlsv6_widevine_nonclearlead&video_resources=hlsv6_playready_psshv0&video_resources=hlsv6_fairplay&video_resources=hlsv6&limit=20');
      const json = await data.json();
      console.log(json);
      // dispatch(addPopularMovies(json.data));
    }
    const getNowPlayingMovies1 = async() =>{
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWUzMWJjM2NmYzVlZjZiYWIyYjY0Y2MzM2MyMjE3NCIsInN1YiI6IjY1YzdiM2UzOThmMWYxMDE4M2Q3N2VhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hFdbESYvxa2puwiDbu-vLLfkGdhqvj9LLdCqZzQY7t4'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

  
    // the tmdb website is not working and the list of movies like nowplaying movies and others are not able to fetch from this website so either find another website with same api structure or build your own api i think we should use the vpn to fetch the movies of the tmdb website try once doing this and let me know if that works .dispatch(addPopularMovies(json.results));
  
    useEffect(()=>{
     !popularMovies && getNowPlayingMovies1();
    },[])
};
export default usePopularMovies;
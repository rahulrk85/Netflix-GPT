
import { useDispatch, useSelector } from 'react-redux';
import { addMovieTrailer } from '../utilities/moviesSlice';
import { API_OPTIONS } from '../utilities/constants';
import { useEffect } from 'react';

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();
    const movieTrailer = useSelector((store)=>store.movies.trailerVideo);
    

    const fetchTrailer = async()=>{
        const data =await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', API_OPTIONS)

        const json = await data.json();
        const filterdata = json.results.filter((v)=>v.type==="Trailer");
        const trailer = filterdata.length ? filterdata[0]:json.results[0];
        dispatch(addMovieTrailer(trailer));

    }

    useEffect(()=>{
       !movieTrailer && fetchTrailer();
    },[]);
}

export default useMovieTrailer
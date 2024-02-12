import React, { useRef } from 'react'
import { API_OPTIONS, BG_IMG } from '../utilities/constants';
import openai from '../utilities/openai';
import { useDispatch } from 'react-redux';
import { addGptMovies, addGptSearchedResult } from '../utilities/GPTSlice';

const GptSearchBar = () => {

    const searchText = useRef(null);
    const dispatch = useDispatch();

    const SearchMoviesTMDB = async(movie)=>{

        const data =await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);

        const json = await data.json();

        return json.results;
    }

    const handleGptSearchClick= async()=>{

        const Query = "Act as a Movie Recommendation system and suggest some movies for the query :"+searchText.current.value+"only give me names of 5 movies, comma separated like the example given ahead. Example: gadar, sholay, golmaal, koi mil gaya, Super 30";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: Query }],
            model: 'gpt-3.5-turbo',
          });

          const gptMovies = gptResults.choices[0]?.message.content.split(",");

          const promiseArray = gptMovies.map((movie)=>SearchMoviesTMDB(movie));

          const tmdbResults = await Promise.all(promiseArray);
        //   console.log(tmdbResults);
          dispatch(addGptMovies(tmdbResults));
          dispatch(addGptSearchedResult(searchText.current.value));

    }


  return (
    <div className=''>
        <div className='flex justify-center'>
        <form className='absolute mx-2 mt-[25%] md:mt-[10%] p-6 bg-black w-full md:w-6/12 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='col-span-10 p-3 border-2 border-red-800 caret-red-800' placeholder='What would you like to watch today!?'
             />
            <button className='mx-2 p-2 text-white bg-red-700 col-span-2 rounded-md' onClick={handleGptSearchClick}>Search</button>
        </form>
        </div>
        <img className='h-screen md:h-auto object-cover absolute -z-10 opacity-90' src={BG_IMG} alt='bg'/>
    </div>
  )
}

export default GptSearchBar;
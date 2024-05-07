import Header from './Header';
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies"
import Maincontainer from './Maincontainer';
import Secondaryscreen from './Secondaryscreen';
import { useSelector } from 'react-redux';
import usePopularMovies from '../customHooks/usePopularMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import GptSearch from './GptSearch';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  const gpt = useSelector((store)=>store.gpt.gptToggle);

  const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
  if(movies===null) return;

  const main_movie = movies[6];
  const {originalTitleText, overview, id } = main_movie;
  const {original_title} = originalTitleText.text;

  return (
    <div className=''>

       <Header/>


      {gpt?<GptSearch/>:<>
      
      
      <Maincontainer title={original_title} overview={overview} id={id} />
      <Secondaryscreen/>
      </>}
      {/* <Header/>
      
      <Maincontainer title={original_title} overview={overview} id={id} />
      <Secondaryscreen/> */}
      

    </div>
  )
}

export default Browse; 
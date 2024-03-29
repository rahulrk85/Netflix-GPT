
import { useSelector } from 'react-redux';
import useMovieTrailer from '../customHooks/useMovieTrailer';

const BackgroungVideo = ({id}) => {

  const Trailer = useSelector((store)=>store.movies?.trailerVideo);
    
    useMovieTrailer(id);



  return (
    <div className='w-screen relative '>
        <iframe 
        className='w-screen relative -z-50 aspect-video'
        src={"https://www.youtube.com/embed/"+Trailer?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        >
        </iframe>
    </div>
  )
}

export default BackgroungVideo;
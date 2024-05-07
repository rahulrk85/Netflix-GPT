import React from 'react'
import { MOVIE_PATH } from '../utilities/constants'

const MovieCard = ({poster}) => {
  if(!poster) return null;
  return (
    <div className='w-36 md:w-48'>
        <img className='px-2' src={poster} alt='img'/>
    </div>
  )
}

export default MovieCard;
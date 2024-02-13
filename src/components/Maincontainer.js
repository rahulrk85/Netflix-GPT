import React from 'react'
import BackgroungVideo from './BackgroungVideo';

const Maincontainer = ({title,overview,id}) => {
  return (
    <div className='w-screen h-auto '>
        <div className='absolute bg-gradient-to-r from-black w-screen aspect-video '>
               <h1 className='text-2xl md:text-6xl p-6 pt-[37%] md:pt-80 text-white'>{title}</h1>
               <p className='hidden md:block px-7 text-xs md:text-sm w-2/3 text-white'>{overview}</p>
               <button className='bg-white bg-opacity-90 text-black p-4 px-16 ml-7 mt-4 rounded-lg text-lg hover:bg-opacity-70 hidden md:inline-block'>▶ Play</button>
               <button className='bg-gray-700 bg-opacity-30 text-white p-4 px-16 ml-7 mt-4 rounded-lg text-lg hover:bg-opacity-80 hidden md:inline-block'>More Info </button>
        </div>
        <div>
            <BackgroungVideo  id={id}/>
        </div>
        
    </div>
  )
}

export default Maincontainer;
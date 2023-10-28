import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video  pt-[20%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-lg md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-base w-1/3 leading-5'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black p-0 md:py-4 px-3 md:px-12 text-sm md:text-xl font-bold rounded-lg hover:bg-opacity-70'> <PlayArrowIcon className='text-black'/> Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-2 py-4 px-12 text-xl bg-opacity-50 rounded-lg'> <InfoIcon className='text-white'/> More info</button>
        </div>

    </div>  
  )
}

export default VideoTitle
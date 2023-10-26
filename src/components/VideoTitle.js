import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video  pt-[15%] px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-base w-1/3 leading-5'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-2 px-8 text-xl font-bold rounded-lg hover:bg-opacity-70'> <PlayArrowIcon className='text-black'/> Play</button>
            <button className=' mx-2 bg-gray-500 p-2 px-8 text-xl bg-opacity-50 rounded-lg'> <InfoIcon className='text-white'/> More info</button>
        </div>

    </div>  
  )
}

export default VideoTitle
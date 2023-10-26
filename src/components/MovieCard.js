import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-32s md:w-32 mr-8 mb-8 cursor-pointer'>
        <img  className='' alt="Movie Card" src={IMG_CDN_URL + posterPath}/>
    </div>
  );
};

export default MovieCard
import React from "react";
import Popup from "reactjs-popup";
import { IMG_CDN_URL } from "../utils/constant";
import MovieDetailsCard from "./MovieDetailsCard";

const MovieCard = ({ posterPath, movie }) => {
  if (!posterPath) return null;
  return (
    <Popup
      trigger={
        <div className="w-32 md:w-44 pr-4 hover:scale-110 hover:transition-all duration-300 ease-in-out">
          <img className="" alt="Movie Card" src={IMG_CDN_URL + posterPath} />
        </div>
      }
      modal
      nested
    >
      <MovieDetailsCard details={movie} />
    </Popup>
  );
};

export default MovieCard;

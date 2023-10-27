import React from "react";
import { IMG_CDN_URL } from "../utils/constant";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const MovieDetailsCard = ({ details }) => {
  console.log(details);
  return (
    <div className="w-96 h-96 text-black bg-white rounded-md overflow-none">
        <div>
          <img
            className="w-60 cursor-pointer ml-20 pt-12"
            alt="Movie Card"
            src={IMG_CDN_URL + details.backdrop_path}
          />
        </div>
        <div className="text-lg text-center pt-2 font-bold">
          {details.original_title}
        </div>
        <div className="text-xs pl-8 ">{details.overview}</div>
        <div className="pl-32 mt-4">
          <button className="bg-black text-white p-2 px-8 text-xl font-bold rounded-lg hover:bg-opacity-70">
            {" "}
            <PlayArrowIcon className="text-white pb-1" /> Play
          </button>
        </div>
    </div>
  );
};

export default MovieDetailsCard;

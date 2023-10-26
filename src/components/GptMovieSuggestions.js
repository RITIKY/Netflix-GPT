import React from "react";
import MovieList from "./MovieList"
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.browse);
  if (!movieNames) return null;
  return (
    <div className=" w-screen text-white pt-36 bg-black bg-opacity-70">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;

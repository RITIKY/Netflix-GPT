import React from "react";
import MovieCard from "./MovieCard";
import "./MovieListScroller.css";

const MovieList = ({ title, movies }) => {
  // console.log(movies,"movies")
  return (
    <div className="px-8">
      <h1 className="text-2xl py-2 text-white">{title}</h1>
      <div
        className="flex overflow-x-scroll hide-scrollbar-track"
      >
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

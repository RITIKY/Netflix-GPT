import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" absolute w-screen bg-black px-2 -ml-6">
      <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.upComimgMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;

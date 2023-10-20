import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    // const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_OPTIONS);
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=ae5d908c7cf18f1f1808deb1f96cecb6"
    );
    const json = await data.json();
    console.log(json);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;

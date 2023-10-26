// import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addPolularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies.popularMovies
  );
  const getPolularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=ae5d908c7cf18f1f1808deb1f96cecb6"
    );
    const json = await data.json();
    // console.log(json,"data");
    dispatch(addPolularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPolularMovies();
  }, []);
};

export default usePopularMovies;

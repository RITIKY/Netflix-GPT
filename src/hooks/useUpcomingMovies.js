import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upComimgMovies = useSelector(
    (store) => store.movies.upComimgMovies
  );
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=ae5d908c7cf18f1f1808deb1f96cecb6"
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    !upComimgMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;

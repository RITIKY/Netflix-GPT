import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector(
    (store) => store.movies.trailerVideo
  );
  const getMoiveVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?api_key=ae5d908c7cf18f1f1808deb1f96cecb6"
    );
    const json = await data.json();
    const trailer = json.results.filter((video) => video.type === "Trailer");
    const trailerData = trailer.length ? trailer[0] : json.results[0];
    dispatch(addTrailerVideo(trailerData));
  };
  useEffect(() => {
    !trailerVideo && getMoiveVideos();
  }, []);
};

export default useTrailerVideo;

import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const getMoiveVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?api_key=ae5d908c7cf18f1f1808deb1f96cecb6"
    );
    const json = await data.json();
    console.log(json);
    const trailer = json.results.filter((video) => video.type === "Trailer");
    const trailerData = trailer.length ? trailer[0] : json.results[0];
    console.log(trailerData);
    dispatch(addTrailerVideo(trailerData));
  };
  useEffect(() => {
    getMoiveVideos();
  }, []);
};

export default useTrailerVideo;

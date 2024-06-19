import { useSelector } from "react-redux";
const BackgroungVideo = () => {
  const Trailer = useSelector((store) => store.movies?.trailerVideo);

  if (Trailer === null) return;
  const { key } = Trailer;

  return (
    <div className="w-screen relative ">
      <iframe
        className="w-screen relative -z-50 aspect-video"
        src={"https://www.youtube.com/embed/" + key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default BackgroungVideo;

import { NextPage } from "next";
import CustomYouTubePlayer from "../components/CustomYouTubePlayer";

const MatzaDeCoada: NextPage = () => {
  const videoId = "_CsuwFd4r98";
  const startSeconds = 10;

  return (
    <div className="h-screen flex justify-center items-center mx-auto">
      <CustomYouTubePlayer videoId={videoId} startSeconds={startSeconds} />
    </div>
  );
};

export default MatzaDeCoada;

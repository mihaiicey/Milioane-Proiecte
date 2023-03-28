import { NextPage } from "next";
import CustomYouTubePlayer from "../components/CustomYouTubePlayer";

const AltuSaFie: NextPage = () => {
  const videoId = "1ndp3utN7eY";
  const startSeconds = 23; 

  return (
    <div className="h-screen flex justify-center items-center mx-auto">
      <CustomYouTubePlayer videoId={videoId} startSeconds={startSeconds} />
    </div>
  );
};

export default AltuSaFie;

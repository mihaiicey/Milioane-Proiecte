import { NextPage } from "next";
import CustomYouTubePlayer from "../components/CustomYouTubePlayer";

const Milion: NextPage = () => {
  const videoId = "56PwlLh6kxo";
  const startSeconds = 16; // Înlocuiește cu numărul de secunde la care dorești să înceapă videoclipul

  return (
    <div className="h-screen flex justify-center items-center mx-auto">
      <CustomYouTubePlayer videoId={videoId} startSeconds={startSeconds} />
    </div>
  );
};

export default Milion;

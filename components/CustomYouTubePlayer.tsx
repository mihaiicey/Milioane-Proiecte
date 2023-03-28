import { useState } from "react";
import YouTube from "react-youtube";

interface CustomYouTubePlayerProps {
  videoId: string;
  startSeconds: number;
}

const CustomYouTubePlayer = ({
  videoId,
  startSeconds,
}: CustomYouTubePlayerProps) => {
  const [player, setPlayer] = useState<any>(null);
  const [startTime, setStartTime] = useState(startSeconds);

  const handleReady = (event: any) => {
    setPlayer(event.target);
    event.target.seekTo(startTime);
    event.target.playVideo();
  };

  const handlePlay = (event: any) => {
    setStartTime(event.target.getCurrentTime());
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={handleReady}
      onPlay={handlePlay}
      opts={{
        playerVars: {
          start: startSeconds,
        },
      }}
    />
  );
};

export default CustomYouTubePlayer;

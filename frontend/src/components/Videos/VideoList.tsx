import { useEffect, useState } from "react";
import { Video } from "./Video";
import * as videoServer from "./VideoServer";

//Custom CSS
import "./VideoList.css";

//Components
import VideoItem from "./VideoItem";

//Material UI
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

function VideoList() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const loadVideos = async () => {
    const res = await videoServer.getVideos();

    const formatVideos = res.data
      .map((video) => {
        return {
          ...video,
          createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
          updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
        };
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    setVideos(formatVideos);
  };

  useEffect(() => {
    loadVideos();
    setIsLoaded(!isLoaded);
  }, []);

  return (
    <div className={isLoaded ? "CircularProgressContainer" : "VideoList"}>
      {isLoaded ? (
        <CircularIndeterminate />
      ) : (
        videos.map((vid) => (
          <VideoItem vid={vid} key={vid._id} loadVideos={loadVideos} />
        ))
      )}
    </div>
  );
}

export default VideoList;

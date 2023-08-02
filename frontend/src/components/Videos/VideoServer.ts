import axios from "axios";
import { Video } from "./Video";

//const api = "http://localhost:4000";
const api = "https://mern-appdevideos-production-09ca.up.railway.app";

export const getVideos = async () => {
  return await axios.get<Video[]>(`${api}/videos`);
};

export const createVideo = async (video: Video) => {
  return await axios.post(`${api}/videos`, video);
};

export const getVideo = async (id: string) => {
  return await axios.get<Video>(`${api}/videos/${id}`);
};

export const updatedVideo = async (id: string, video: Video) => {
  return await axios.put<Video>(`${api}/videos/${id}`, video);
};

export const deleteVideo = async (id: string) => {
  return await axios.delete<Video>(`${api}/videos/${id}`);
};

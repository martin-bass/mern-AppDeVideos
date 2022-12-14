import { NextFunction, RequestHandler } from "express";
import Video from "./videos";

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.json(error);
  }
};

export const createVideo: RequestHandler = async (
  req,
  res,
  next: NextFunction
) => {
  try {
    const videoFound = await Video.find({ url: req.body.url });
    if (!videoFound) {
      return res.status(400).json({ mesagge: "la URL ya existe!" });
    }

    const video = new Video(req.body);
    const savedVideo = await video.save();
    res.json(savedVideo);
  } catch (error) {
    next(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  const singleVideo = await Video.findById(req.params.id);
  if (!singleVideo) {
    return res.status(204).json();
  }
  return res.json(singleVideo);
};

export const deleteVideo: RequestHandler = async (req, res) => {
  const videoDeleted = await Video.findByIdAndDelete(req.params.id);
  if (!videoDeleted) {
    return res.status(204).json();
  }
  return res.json(videoDeleted);
};

export const updateVideo: RequestHandler = async (req, res) => {
  const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(videoUpdated);
};

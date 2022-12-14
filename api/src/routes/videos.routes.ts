import { Router } from "express";
import * as videosController from "./videos.controller";

const router = Router();

router.get("/videos", videosController.getVideos);
router.get("/videos/:id", videosController.getVideo);
router.post("/videos", videosController.createVideo);
router.delete("/videos/:id", videosController.deleteVideo);
router.put("/videos/:id", videosController.updateVideo);

export default router;

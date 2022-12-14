"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVideo = exports.deleteVideo = exports.getVideo = exports.createVideo = exports.getVideos = void 0;
const videos_1 = __importDefault(require("./videos"));
const getVideos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videos = yield videos_1.default.find();
        res.json(videos);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getVideos = getVideos;
const createVideo = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videoFound = yield videos_1.default.find({ url: req.body.url });
        if (!videoFound) {
            return res.status(400).json({ mesagge: "la URL ya existe!" });
        }
        const video = new videos_1.default(req.body);
        const savedVideo = yield video.save();
        res.json(savedVideo);
    }
    catch (error) {
        next(error);
    }
});
exports.createVideo = createVideo;
const getVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const singleVideo = yield videos_1.default.findById(req.params.id);
    if (!singleVideo) {
        return res.status(204).json();
    }
    return res.json(singleVideo);
});
exports.getVideo = getVideo;
const deleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoDeleted = yield videos_1.default.findByIdAndDelete(req.params.id);
    if (!videoDeleted) {
        return res.status(204).json();
    }
    return res.json(videoDeleted);
});
exports.deleteVideo = deleteVideo;
const updateVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const videoUpdated = yield videos_1.default.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.json(videoUpdated);
});
exports.updateVideo = updateVideo;

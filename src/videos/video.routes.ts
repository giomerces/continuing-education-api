import express from "express";
import { VideoController } from "./video.controller";

const controller = new VideoController();

const router = express.Router();

router.post("/", controller.create);
router.get("/:id", controller.findById);
router.get("/", controller.findAll);

export default router;

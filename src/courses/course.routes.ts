import express from "express";
import { CourseController } from "./course.controller";

const controller = new CourseController();

const router = express.Router();

router.post("/", controller.create);
router.get("/", controller.findAll);

export default router;

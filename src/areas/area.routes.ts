import express from "express";
import { AreaController } from "./area.controller";

const controller = new AreaController();

const router = express.Router();

router.post("/", controller.create);

export default router;

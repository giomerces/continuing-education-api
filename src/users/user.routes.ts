import express from "express";
import { UserController } from "./user.controller";

const controller = new UserController();

const router = express.Router();

router.post("/", controller.createUser);

export default router;

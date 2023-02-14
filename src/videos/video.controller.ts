import { Request, Response } from "express";
import { VideoService } from "./video.service";

export class VideoController {
  create = async (req: Request, res: Response) => {
    const service = new VideoService();
    try {
      await service.create(req.body);
      return res.json(req.body);
    } catch (error: any) {
      throw new Error("error: " + error.message);
    }
  };
  findById = async (req: Request, res: Response) => {
    const service = new VideoService();
    try {
      const id = Number(req.params.id);
      const video = await service.findById({ id });
      return res.json(video);
    } catch (error: any) {
      throw new Error("error: " + error.message);
    }
  };
  findAll = async (req: Request, res: Response) => {
    const service = new VideoService();
    try {
      if (!req.query.courseId) {
        return [];
      }
      const params = { courseId: Number(req.query.courseId) };
      const video = await service.findAll(params);
      return res.json(video);
    } catch (error: any) {
      throw new Error("error: " + error.message);
    }
  };
}

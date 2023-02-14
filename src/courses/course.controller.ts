import { Request, Response } from "express";
import { CourseService } from "./course.service";

export class CourseController {
  create = async (req: Request, res: Response) => {
    const service = new CourseService();
    try {
      service.create(req.body);
      return res.json(req.body);
    } catch (error: any) {
      throw new Error("error: " + error.message);
    }
  };
  findAll = async (req: Request, res: Response) => {
    const service = new CourseService();
    try {
      const params = {
        ...(req.query.areaId && { areaId: Number(req.query.areaId) }),
      };
      const video = await service.findAll(params);
      return res.json(video);
    } catch (error: any) {
      throw new Error("error: " + error.message);
    }
  };
}

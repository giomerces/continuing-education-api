import { Request, Response } from "express";
import { AreaService } from "./area.service";

export class AreaController {
  create = async (req: Request, res: Response) => {
    const service = new AreaService();
    try {
      service.create(req.body);
      return res.json(req.body);
    } catch (error: any) {
      throw new Error("error: " + error.message);
    }
  };
}

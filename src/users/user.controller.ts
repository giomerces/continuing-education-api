import { Request, Response } from "express";
import { UserService } from "./user.service";

export class UserController {
  createUser = async (req: Request, res: Response) => {
    const service = new UserService();
    try {
      service.createUser(req.body);
      return res.json(req.body);
    } catch (error: any) {
      throw new Error("error: " + error.message);
    }
  };
}

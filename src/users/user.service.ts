import prismaClient from "../models/prismaClient";
import { UserOutput } from "./entities/user.entity";

export class UserService {
  async createUser({ name, email }: { name: string; email: string }) {
    const user = await prismaClient.user.create({
      data: {
        createdBy: email,
        updatedBy: email,
        email: email,
        name: name,
      },
      select: {
        name: true,
        email: true,
        id: true,
      },
    });
    return new UserOutput(user);
  }
}

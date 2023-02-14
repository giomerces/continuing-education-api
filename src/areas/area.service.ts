import prismaClient from "../models/prismaClient";

export class AreaService {
  async create({ email, name }: { email: string; name: string }) {
    await prismaClient.area.create({
      data: {
        createdBy: email,
        updatedBy: email,
        name,
      },
    });
    return { name };
  }
}

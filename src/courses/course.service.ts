import { PrismaClient } from "@prisma/client";
import { CourseFilter, CourseOutput } from "./entities/course.entity";
import prismaClient from "../models/prismaClient";

function Courses(prismaCourse: PrismaClient["course"]) {
  return Object.assign(prismaCourse, {
    async findAll(filters: CourseFilter): Promise<CourseOutput[]> {
      const courseList = await prismaCourse.findMany({
        where: {
          ...filters,
        },
        select: {
          name: true,
          url: true,
          id: true,
        },
      });

      return courseList.map((course) => new CourseOutput(course));
    },
  });
}

export class CourseService {
  private courses;
  constructor() {
    this.courses = Courses(prismaClient.course);
  }

  async create({
    email,
    name,
    areaId,
    url,
  }: {
    email: string;
    name: string;
    areaId: number;
    url: string;
  }) {
    await prismaClient.course.create({
      data: {
        createdBy: email,
        updatedBy: email,
        name,
        areaId,
        url,
      },
    });
    return { name, areaId };
  }

  async findAll({ areaId }: { areaId?: number }) {
    const filters = { ...(areaId && { areaId }) };
    const videoList = await this.courses.findAll(filters);
    return videoList;
  }
}

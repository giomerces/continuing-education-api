import prismaClient from "../models/prismaClient";
import { FindById } from "../commonEntities/basic";
import { VideoFilter, VideoOutput } from "./entities/video.entity";
import { PrismaClient } from "@prisma/client";

function Videos(prismaVideo: PrismaClient["video"]) {
  return Object.assign(prismaVideo, {
    async findById(data: FindById): Promise<VideoOutput | {}> {
      const video = await prismaVideo.findUnique({
        where: {
          id: data.id,
        },
        select: {
          name: true,
          url: true,
          id: true,
        },
      });

      if (!video) {
        return {};
      }

      return new VideoOutput(video);
    },
    async findAll(filters: VideoFilter): Promise<VideoOutput[]> {
      const videoList = await prismaVideo.findMany({
        where: {
          ...filters,
        },
        select: {
          name: true,
          url: true,
          id: true,
        },
      });

      return videoList.map((video) => new VideoOutput(video));
    },
  });
}

export class VideoService {
  private videos;

  constructor() {
    this.videos = Videos(prismaClient.video);
  }

  async create({
    email,
    name,
    url,
    courseId,
  }: {
    email: string;
    name: string;
    url: string;
    courseId: number;
  }) {
    await this.videos.create({
      data: {
        createdBy: email,
        updatedBy: email,
        name,
        url,
        courseId,
      },
    });
    return { name, url, courseId };
  }
  async findById({ id }: { id: number }) {
    const video = await this.videos.findById({ id });
    return video;
  }
  async findAll({ courseId }: { courseId?: number }) {
    const filters = { ...(courseId && { courseId }) };
    const videoList = await this.videos.findAll(filters);
    return videoList;
  }
}

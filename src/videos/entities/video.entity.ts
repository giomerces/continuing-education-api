export class VideoOutput {
  name: string;
  url: string;
  id: Number;

  constructor(data: { name: string; url: string; id: number }) {
    this.name = data.name;
    this.url = data.url;
    this.id = data.id;
  }
}

export type VideoFilter = {
  id?: number;
  name?: string;
  courseId?: number;
};

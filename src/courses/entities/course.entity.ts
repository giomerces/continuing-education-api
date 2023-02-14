export class CourseOutput {
  name: string | null;
  url: string | null;
  id: number;

  constructor({
    name,
    url,
    id,
  }: {
    name: string;
    url: string | null;
    id: number;
  }) {
    this.name = name;
    this.url = url;
    this.id = id;
  }
}

export type CourseFilter = {
  id?: number;
  name?: string;
  areaId?: number;
};

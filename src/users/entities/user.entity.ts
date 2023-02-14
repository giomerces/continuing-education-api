export class UserOutput {
  id: number;
  name: string | null;
  email: string;

  constructor({
    id,
    name,
    email,
  }: {
    id: number;
    name: string | null;
    email: string;
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

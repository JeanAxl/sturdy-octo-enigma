export class Project {
  public id: number;
  public name: string;

  constructor(x: { name: string }) {
    this.name = x.name;
    this.id = new Date().getTime();
  }
}

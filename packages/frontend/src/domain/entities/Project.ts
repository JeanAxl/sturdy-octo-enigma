interface IProjectData {
  id: number;
  name: string;
}

interface IProjectEntity {
  id: number;
  name: string;
}

class Project implements IProjectEntity {
  public id: number;
  public name: string;

  constructor(params: IProjectData) {
    this.name = params.name;
    this.id = params.id;
  }
}

export { Project, IProjectEntity, IProjectData };

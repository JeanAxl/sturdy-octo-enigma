type ProjectData = {
  id: number;
  name: string;
};

type ProjectEntity = {
  id: number;
  name: string;
};

class Project implements ProjectEntity {
  public id: number;
  public name: string;

  constructor(params: ProjectData) {
    this.name = params.name;
    this.id = params.id;
  }
}

class ProjectsState {
  readonly projects: Project[];

  constructor(projects: Project[]) {
    this.projects = projects;
  }

  findByName(nameToFind: string): Project | null {
    const found = this.projects.find((project) => project.name === nameToFind);

    if (found) {
      return new Project(found);
    }

    return null;
  }

  getAll(): Project[] {
    return this.projects;
  }
}

export { Project, ProjectEntity, ProjectData, ProjectsState };

import { IProjectData, IProjectEntity, Project } from '$src/domain/entities/Project';

interface IRepository<A> {
  getAll: () => Array<A>;
  findByName: (name: string) => A | null;
}

class ProjectsRepository implements IRepository<IProjectEntity> {
  readonly state: Array<IProjectEntity>;

  constructor(state: Array<IProjectEntity>) {
    this.state = state;
  }

  getAll() {
    return this.state.map((project) => new Project(project));
  }

  findByName(nameToFind: string) {
    const found = this.state.find((project) => project.name === nameToFind);

    if (found) {
      return new Project(found);
    }

    return null;
  }
}

class AddProjectUseCase {
  private projectsRepository: IRepository<IProjectEntity>;

  constructor(projectsRepository: IRepository<IProjectEntity>) {
    this.projectsRepository = projectsRepository;
  }

  execute(params: IProjectData): Array<Project> {
    let updatedProjects = this.projectsRepository.getAll();
    const newProject = new Project(params);
    const withSameName = this.projectsRepository.findByName(newProject.name);

    if (!withSameName) {
      updatedProjects = [...updatedProjects, { ...newProject }];
    }

    return updatedProjects;
  }
}

export { AddProjectUseCase, ProjectsRepository };

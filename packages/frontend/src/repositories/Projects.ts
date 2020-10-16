import { IProjectEntity, Project } from '$src/domain/entities/Project';
import { IRepository } from '$src/repositories/IRepository';

class ProjectsRepository implements IRepository<IProjectEntity> {
  readonly state: IProjectEntity[];

  constructor(state: IProjectEntity[]) {
    this.state = state;
  }

  getAll(): Project[] {
    return this.state.map((project) => new Project(project));
  }

  findByName(nameToFind: string): null | Project {
    const found = this.state.find((project) => project.name === nameToFind);

    if (found) {
      return new Project(found);
    }

    return null;
  }
}

export { ProjectsRepository };

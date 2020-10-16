import { IProjectEntity, Project } from '$src/domain/entities/Project';
import { IRepository } from '$src/repositories/IRepository';

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

export { ProjectsRepository };

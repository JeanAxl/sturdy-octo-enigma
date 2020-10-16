import { IProjectData, IProjectEntity, Project } from '$src/domain/entities/Project';
import { IRepository } from '$src/repositories';

class AddProjectUseCase {
  private projectsRepository: IRepository<IProjectEntity>;

  constructor(projectsRepository: IRepository<IProjectEntity>) {
    this.projectsRepository = projectsRepository;
  }

  execute(params: IProjectData): Project[] {
    let updatedProjects = this.projectsRepository.getAll();
    const newProject = new Project(params);

    const withSameName = this.projectsRepository.findByName(newProject.name);

    if (!withSameName) {
      updatedProjects = [...updatedProjects, { ...newProject }];
    }

    return updatedProjects;
  }
}

export { AddProjectUseCase };

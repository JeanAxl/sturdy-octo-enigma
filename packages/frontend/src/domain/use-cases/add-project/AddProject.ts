import { Project } from '$src/domain/entities';
import { ProjectData, ProjectsState } from '$src/domain/entities/Project';

class AddProjectUseCase {
  private projectsState: ProjectsState;

  constructor(projectsState: ProjectsState) {
    this.projectsState = projectsState;
  }

  execute(params: ProjectData): Project[] {
    let updatedProjects = this.projectsState.getAll();
    const newProject = new Project(params);

    const withSameName = this.projectsState.findByName(newProject.name);

    if (!withSameName) {
      updatedProjects = [...updatedProjects, { ...newProject }];
    }

    return updatedProjects;
  }
}

const makeAddProjectUseCase = (projects: Project[]) => {
  const projectsState = new ProjectsState(projects);
  return new AddProjectUseCase(projectsState);
};

export { makeAddProjectUseCase };

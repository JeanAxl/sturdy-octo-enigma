import { ProjectsStateType } from '$src/frameworks/redux/projects/index';
import { ProjectsActionTypes } from '$src/frameworks/redux/projects/actions';
import { AddProjectUseCase, ProjectsRepository } from '$src/domain/use-cases/add-project/AddProject';

const addProject = (state: ProjectsStateType, action: ProjectsActionTypes): ProjectsStateType => {
  const { payload } = action;

  const projectsRepository = new ProjectsRepository(state);
  const addProjectUseCase = new AddProjectUseCase(projectsRepository);

  const updatedProjects = addProjectUseCase.execute(payload);

  return [...updatedProjects];
};

export { addProject };

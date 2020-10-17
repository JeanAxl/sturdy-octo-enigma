import { ProjectsStateType } from '$src/state/projects/index';
import { ProjectsActionTypes } from '$src/state/projects/actions';
import { makeAddProjectUseCase } from '$src/domain/use-cases/add-project/AddProject';

const addProject = (state: ProjectsStateType, action: ProjectsActionTypes): ProjectsStateType => {
  const { payload } = action;

  const addProjectUseCase = makeAddProjectUseCase(state);

  const updatedProjects = addProjectUseCase.execute(payload);

  return [...updatedProjects];
};

export { addProject };

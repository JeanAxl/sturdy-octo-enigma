import { Project } from '$src/domain/entities/Project';
import { ProjectsStateType } from '$src/frameworks/redux/projects/index';
import { ProjectsActionTypes } from '$src/frameworks/redux/projects/actions';
import { getByName } from './selectors';

const addProject = (state: ProjectsStateType, action: ProjectsActionTypes): ProjectsStateType => {
  const { payload } = action;

  const newProject = new Project(payload);

  const similarProject = getByName(state, newProject.name);
  if (similarProject) {
    return state;
  }

  return [...state, { ...newProject }];
};

export { addProject };

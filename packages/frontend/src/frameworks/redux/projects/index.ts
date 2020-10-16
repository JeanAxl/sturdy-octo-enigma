import { IProjectEntity, Project } from '$src/domain/entities/Project';
import { ADD_PROJECT, ProjectsActionTypes } from '$src/frameworks/redux/projects/actions';
import { addProject } from '$src/frameworks/redux/projects/cases';

type ProjectsStateType = Array<IProjectEntity>;
const initialState: ProjectsStateType = [];

const projects = (state = initialState, action: ProjectsActionTypes) => {
  const { type } = action;

  switch (type) {
    case ADD_PROJECT:
      return addProject(state, action);

    default:
      return state;
  }
};

export default projects;
export { ProjectsStateType };

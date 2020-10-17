import { ADD_PROJECT, ProjectsActionTypes } from '$src/state/projects/actions';
import { addProject } from '$src/state/projects/cases';
import { ProjectEntity } from '$src/domain/entities/Project';

type ProjectsStateType = ProjectEntity[];
const initialState: ProjectsStateType = [];

const projects = (state = initialState, action: ProjectsActionTypes): ProjectsStateType => {
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

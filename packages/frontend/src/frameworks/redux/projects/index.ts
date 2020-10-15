import { IProjectEntity, Project } from '$src/domain/entities/Project';
import { ADD_PROJECT, ProjectsActionTypes } from '$src/frameworks/redux/projects/actions';

const initialState: Array<IProjectEntity> = [];

const projects = (state = initialState, action: ProjectsActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_PROJECT:
      return [...state, new Project(payload)];

    default:
      return state;
  }
};

export default projects;

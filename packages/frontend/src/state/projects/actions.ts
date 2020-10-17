import { ProjectData } from '$src/domain/entities/Project';

const ADD_PROJECT = 'ADD_PROJECT';

type AddProjectAction = {
  type: string;
  payload: ProjectData;
};

const addProjectActionCreator = (payload: ProjectData) => ({
  type: ADD_PROJECT,
  payload,
});

type ProjectsActionTypes = AddProjectAction;

export { ProjectsActionTypes, addProjectActionCreator, ADD_PROJECT };

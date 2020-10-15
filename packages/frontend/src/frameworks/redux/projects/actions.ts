import { IProjectData } from '$src/domain/entities/Project';
const ADD_PROJECT = 'ADD_PROJECT';

type AddProjectAction = {
  type: string;
  payload: IProjectData;
};

const addProjectActionCreator = (payload: IProjectData) => ({
  type: ADD_PROJECT,
  payload,
});

type ProjectsActionTypes = AddProjectAction;

export { ProjectsActionTypes, addProjectActionCreator, ADD_PROJECT };

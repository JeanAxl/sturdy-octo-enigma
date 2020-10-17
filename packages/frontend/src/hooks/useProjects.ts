import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '$src/state';
import { addProjectActionCreator } from '$src/state/projects/actions';
import { getAll } from '$src/state/projects/selectors';
import { Project, ProjectData } from '$src/domain/entities/Project';

type Type = {
  getProjects: () => Project[];
  addProject: (params: ProjectData) => void;
};

const useProjects = (): Type => {
  const dispatch = useDispatch();

  const addProject = useCallback((params: ProjectData) => dispatch(addProjectActionCreator(params)), []);
  const getProjects = useCallback(() => useSelector((state: RootState) => getAll(state.projects)), []);

  return { getProjects, addProject };
};

export { useProjects };

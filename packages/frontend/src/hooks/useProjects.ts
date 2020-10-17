import { useDispatch, useSelector } from 'react-redux';
import { addProjectActionCreator } from '$src/state/projects/actions';
import { RootState } from '$src/state';
import { getAll } from '$src/state/projects/selectors';
import { ProjectData } from '$src/domain/entities/Project';

const useProjects = () => {
  const dispatch = useDispatch();

  const addProject = (params: ProjectData) => dispatch(addProjectActionCreator(params));
  const getProjects = () => useSelector((state: RootState) => getAll(state.projects));

  return { getProjects, addProject };
};

export { useProjects };

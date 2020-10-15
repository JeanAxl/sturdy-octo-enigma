import { useDispatch, useSelector } from 'react-redux';
import { addProjectActionCreator } from '$src/frameworks/redux/projects/actions';
import { IProjectData } from '$src/domain/entities/Project';
import { RootState } from '$src/frameworks/redux';

const useProjects = () => {
  const dispatch = useDispatch();
  const addProject = (params: IProjectData) => dispatch(addProjectActionCreator(params));
  const getProjects = () => useSelector((state: RootState) => state.projects);

  return { getProjects, addProject };
};

export { useProjects };

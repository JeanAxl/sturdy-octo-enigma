import { Project } from '$src/domain/entities';
import { IProjectEntity } from '$src/domain/entities/Project';
import { ProjectsStateType } from '$src/frameworks/redux/projects/index';

const getAll = (state: ProjectsStateType): Array<Project> =>
  state.map((project: IProjectEntity) => new Project(project));

const getByName = (state: ProjectsStateType, nameToFind: string): Project | null => {
  const found = state.find((project) => project.name === nameToFind);

  if (found) {
    return new Project(found);
  }

  return null;
};

export { getAll, getByName };

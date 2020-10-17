import { ProjectsStateType } from '$src/state/projects/index';
import { Project } from '$src/domain/entities';
import { ProjectEntity } from '$src/domain/entities/Project';

const getAll = (state: ProjectsStateType): Project[] => state.map((project: ProjectEntity) => new Project(project));

const getByName = (state: ProjectsStateType, nameToFind: string): Project | null => {
  const found = state.find((project) => project.name === nameToFind);

  if (found) {
    return new Project(found);
  }

  return null;
};

export { getAll, getByName };

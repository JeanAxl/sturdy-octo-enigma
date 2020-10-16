import React, { useCallback, useContext, useState } from 'react';
import { IProjectData, IProjectEntity } from '$src/domain/entities/Project';
import { AddProjectUseCase, ProjectsRepository } from '$src/domain/use-cases/add-project/AddProject';

type ContextType = {
  addProject: (project: IProjectData) => void;
  getProjects: () => Array<IProjectEntity>;
};

type Props = {
  children: React.ReactNode;
};

const context = React.createContext<ContextType>({ getProjects: () => [], addProject: () => ({}) });
const Provider = context.Provider;

const ProjectsContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [projects, setProjects] = useState<Array<IProjectEntity>>([]);

  const addProject = useCallback(
    (project: IProjectData) => {
      const projectsRepository = new ProjectsRepository(projects);
      const addProjectUseCase = new AddProjectUseCase(projectsRepository);

      const updatedProjects = addProjectUseCase.execute(project);

      setProjects(updatedProjects);
    },
    [projects],
  );

  const getProjects = useCallback(() => {
    return projects;
  }, [projects]);

  return <Provider value={{ getProjects, addProject }}>{children}</Provider>;
};

const useProjects = () => useContext(context);

export { ProjectsContextProvider, useProjects };

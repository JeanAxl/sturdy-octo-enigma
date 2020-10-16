import React, { useCallback, useContext, useState } from 'react';
import { Project } from '$src/domain/entities';
import { IProjectData, IProjectEntity } from '$src/domain/entities/Project';

type ContextType = {
  addProject: (project: IProjectData) => void;
  getProjects: () => Array<IProjectEntity>;
};

type Props = {
  children: React.ReactNode;
};

const context = React.createContext<ContextType>({ getProjects: () => [], addProject: () => ({}) });
const Provider = context.Provider;

const ProjectsContextProvider = ({ children }: Props) => {
  const [projects, setProject] = useState<Array<IProjectEntity>>([]);

  const getByName = (projects: Array<IProjectEntity>, nameToFind: string) => {
    const found = projects.find((project) => project.name === nameToFind);

    if (found) {
      return new Project(found);
    }

    return null;
  };

  const addProject = useCallback(
    (project: IProjectData) => {
      const newProject = new Project(project);
      const similarProject = getByName(projects, newProject.name);
      if (!similarProject) {
        setProject([...projects, { ...newProject }]);
      }
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

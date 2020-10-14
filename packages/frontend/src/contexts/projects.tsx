import React, { useCallback, useContext, useState } from 'react';
import { ProjectView } from '$src/components/projects/Projects';
import { ProjectWrite } from '$src/components/add-project/AddProjectContainer';
import { Project } from '$src/entities';

type ContextType = {
  projects: Array<ProjectView>;
  addProject: (project: ProjectWrite) => void;
};

type Props = {
  children: React.ReactNode;
};

const context = React.createContext<ContextType>({ projects: [], addProject: () => ({}) });
const Provider = context.Provider;

const ProjectsContextProvider = ({ children }: Props) => {
  const [projects, setProject] = useState<Array<ProjectView>>([]);

  const addProject = useCallback(
    (project: ProjectWrite) => {
      const newProject = new Project(project);
      setProject([...projects, newProject]);
    },
    [projects],
  );

  return <Provider value={{ projects, addProject }}>{children}</Provider>;
};

const useProjects = () => useContext(context);

export { ProjectsContextProvider, useProjects };

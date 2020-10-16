import React from 'react';
import { useProjects } from '$src/frameworks/contexts/projects';
import { AddProjectContainer } from '$src/frameworks/components/add-project/AddProjectContainer';

const AddProjectContainerWithContext: React.FC = () => {
  const { addProject } = useProjects();

  return <AddProjectContainer addProject={addProject} />;
};

export { AddProjectContainerWithContext };

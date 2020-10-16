import React from 'react';
import { useProjects } from '$src/frameworks/redux/projects/hook';
import { AddProjectContainer } from '$src/frameworks/components/add-project/AddProjectContainer';

const AddProjectContainerWithRedux: React.FC = () => {
  const { addProject } = useProjects();

  return <AddProjectContainer addProject={addProject} />;
};

export { AddProjectContainerWithRedux };

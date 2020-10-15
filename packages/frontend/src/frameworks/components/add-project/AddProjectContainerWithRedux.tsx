import React, { useState } from 'react';
import { AddProject } from '$src/frameworks/components/add-project/AddProject';
import { useProjects } from '$src/frameworks/redux/projects/hook';

const AddProjectContainerWithRedux: React.FC = () => {
  const [name, setName] = useState('Project default name');
  const { addProject } = useProjects();

  const handleAddProjectClick = () => {
    addProject({ name, id: new Date().getTime() });
  };

  return <AddProject name={name} setName={setName} handleAddProjectClick={handleAddProjectClick} />;
};

export { AddProjectContainerWithRedux };

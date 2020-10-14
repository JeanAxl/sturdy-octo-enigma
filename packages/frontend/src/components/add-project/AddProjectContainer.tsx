import React, { useState } from 'react';
import { AddProject } from '$src/components/add-project/AddProject';
import { useProjects } from '$src/contexts/projects';

type ProjectWrite = {
  name: string;
};

const AddProjectContainer = () => {
  const [name, setName] = useState('Energy lab');
  const { addProject } = useProjects();
  const handleAddProjectClick = (project: ProjectWrite) => {
    addProject(project);
  };

  // TODO  : use hook to inject presenters and interactors
  // TODO : find way to have a pure function
  return <AddProject name={name} setName={setName} handleAddProjectClick={() => handleAddProjectClick({ name })} />;
};

export { ProjectWrite, AddProjectContainer };

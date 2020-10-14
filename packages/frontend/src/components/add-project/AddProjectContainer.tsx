import React, { useState } from 'react';
import { AddProject } from '$src/components/add-project/AddProject';

type ProjectWrite = {
  name: string;
};

const AddProjectContainer = () => {
  const [name, setName] = useState('Energy lab');
  const handleAddProjectClick = (project: ProjectWrite) => {
    console.log(project);
  };

  // TODO : find way to have a pure function
  return <AddProject name={name} setName={setName} handleAddProjectClick={() => handleAddProjectClick({ name })} />;
};

export { ProjectWrite, AddProjectContainer };

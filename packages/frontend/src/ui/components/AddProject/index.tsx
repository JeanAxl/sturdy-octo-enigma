import React, { useState } from 'react';
import { AddProject } from '$src/ui/components/AddProject/AddProject';
import { useProjects } from '$src/hooks/useProjects';

const AddProjectContainer: React.FC = () => {
  // Local state
  const [name, setName] = useState('Project default name');

  // Wiring to global state
  const { addProject } = useProjects();

  // UI Events binding
  const handleAddProjectClick = () => {
    addProject({ name, id: new Date().getTime() });
  };

  return <AddProject handleAddProjectClick={handleAddProjectClick} name={name} setName={setName} />;
};

export { AddProjectContainer };

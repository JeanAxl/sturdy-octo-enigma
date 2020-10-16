import React, { useState } from 'react';
import { AddProject } from '$src/frameworks/components/add-project/AddProject';
import { IProjectData } from '$src/domain/entities/Project';

type Props = {
  addProject: (project: IProjectData) => void;
};

const AddProjectContainer: React.FC<Props> = ({ addProject }: Props) => {
  const [name, setName] = useState('Project default name');

  const handleAddProjectClick = () => {
    addProject({ name, id: new Date().getTime() });
  };

  return <AddProject name={name} setName={setName} handleAddProjectClick={handleAddProjectClick} />;
};

export { AddProjectContainer };

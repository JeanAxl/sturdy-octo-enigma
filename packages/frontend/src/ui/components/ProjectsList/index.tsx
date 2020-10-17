import React from 'react';
import { useProjects } from '$src/hooks/useProjects';
import { ProjectsList } from '$src/ui/components/ProjectsList/ProjectsList';

const ProjectListContainer = () => {
  const { getProjects } = useProjects();
  const projects = getProjects();

  return <ProjectsList projects={projects} />;
};

export { ProjectListContainer };

import React from 'react';

import { Projects } from '$src/frameworks/components/projects/Projects';
import { useProjects } from '$src/frameworks/contexts/projects';

const ProjectsContainerWithContext: React.FC = () => {
  const { getProjects } = useProjects();
  const projects = getProjects();

  return <Projects projects={projects} />;
};

export { ProjectsContainerWithContext };

import React from 'react';

import { Projects } from '$src/components/projects/Projects';
import { useProjects } from '$src/contexts/projects';

const ProjectsContainer = () => {
  const { projects } = useProjects();

  return <Projects projects={projects} />;
};

export { ProjectsContainer };

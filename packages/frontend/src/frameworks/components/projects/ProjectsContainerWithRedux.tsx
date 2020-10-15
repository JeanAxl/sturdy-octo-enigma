import React from 'react';

import { Projects } from '$src/frameworks/components/projects/Projects';
import { useProjects } from '$src/frameworks/redux/projects/hook';

const ProjectsContainerWithRedux: React.FC = () => {
  const { getProjects } = useProjects();
  const projects = getProjects();

  return <Projects projects={projects} />;
};

export { ProjectsContainerWithRedux };

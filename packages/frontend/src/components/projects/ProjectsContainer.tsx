import React from 'react';

import { Projects, ProjectView } from '$src/components/projects/Projects';

const getProjects = (): Array<ProjectView> => [];

const ProjectsContainer = () => {
  const projects = getProjects();

  return <Projects projects={projects} />;
};

export { ProjectsContainer };

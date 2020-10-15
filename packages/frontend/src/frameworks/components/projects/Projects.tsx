import React from 'react';

export type ProjectView = {
  name: string;
  id: number;
};

type ProjectsProps = {
  projects: Array<ProjectView>;
};

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
};

export { Projects };

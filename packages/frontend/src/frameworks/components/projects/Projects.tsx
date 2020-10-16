import React from 'react';

export type ProjectView = {
  name: string;
  id: number;
};

type ProjectsProps = {
  projects: ProjectView[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }: ProjectsProps) => {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          {project.id} - {project.name}
        </div>
      ))}
    </div>
  );
};

export { Projects };

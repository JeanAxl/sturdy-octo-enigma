import React, { FC } from 'react';

type ProjectView = {
  id: number;
  name: string;
};

type Props = {
  projects: ProjectView[];
};

const ProjectsList: FC<Props> = ({ projects }: Props) => {
  if (projects.length === 0) {
    return <div>No project</div>;
  }
  return (
    <div>
      {projects.map(({ name, id }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};

export { ProjectsList };

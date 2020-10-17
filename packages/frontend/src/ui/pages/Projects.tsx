import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { ProjectsList } from '$src/ui/components/ProjectsList/ProjectsList';
import { AddProjectContainer } from '$src/ui/components/AddProject';
import { ProjectListContainer } from '$src/ui/components/ProjectsList';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  border-right: 2px solid darkgrey;
  margin-right: 10em;
`;

const ProjectsPage: FC = () => {
  return (
    <Container>
      <LeftContainer>
        <AddProjectContainer />
        <ProjectListContainer />
      </LeftContainer>
      <div>Project details</div>
    </Container>
  );
};

export { ProjectsPage };

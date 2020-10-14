import React from 'react';
import styled from 'styled-components';

import { ProjectsContainer } from '$src/components/projects/ProjectsContainer';
import { AddProjectContainer } from '$src/components/add-project/AddProjectContainer';

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const App = () => (
  <Div>
    <ProjectsContainer />
    <AddProjectContainer />
  </Div>
);

export { App };

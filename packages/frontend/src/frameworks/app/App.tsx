import React from 'react';
import styled from 'styled-components';

import { ProjectsContainerWithContext } from '$src/frameworks/components/projects/ProjectsContainerWithContext';
import { AddProjectContainerWithContext } from '$src/frameworks/components/add-project/AddProjectContainerWithContext';
import { ProjectsContextProvider } from '$src/frameworks/contexts/projects';
import { ProjectsContainerWithRedux } from '$src/frameworks/components/projects';
import { AddProjectContainerWithRedux } from '$src/frameworks/components/add-project';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => (
  <Div>
    <h1>With context</h1>
    <ProjectsContextProvider>
      <div>
        <ProjectsContainerWithContext />
        <AddProjectContainerWithContext />
      </div>
    </ProjectsContextProvider>
    <h1>With redux</h1>
    <div>
      <ProjectsContainerWithRedux />
      <AddProjectContainerWithRedux />
    </div>
  </Div>
);

export { App };

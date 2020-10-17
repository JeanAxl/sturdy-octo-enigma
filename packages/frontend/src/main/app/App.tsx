import React from 'react';
import styled from 'styled-components';
import { ProjectsPage } from '$src/ui/pages';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => (
  <Div>
    <ProjectsPage />
  </Div>
);

export { App };

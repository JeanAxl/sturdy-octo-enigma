import React from 'react';
import styled from 'styled-components';
import { ProjectsPage } from '$src/ui/pages';
import { Provider } from 'react-redux';
import store from '$src/state';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => (
  <Div>
    <Provider store={store}>
      <ProjectsPage />
    </Provider>
  </Div>
);

export { App };

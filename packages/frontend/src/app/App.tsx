import React from 'react';
import styled from 'styled-components';
import SummaryInput from '$src/components/summary-input';
import Summary from '$src/components/summary/Summary';

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const App = () => (
  <Div>
    <SummaryInput />
    <Summary summary={'Hello'} />
  </Div>
);

export { App };

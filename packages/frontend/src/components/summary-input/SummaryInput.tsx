import React from 'react';
import styled from 'styled-components';
import Input from '$src/components/shared/input';
import Label from '$src/components/shared/label';

const Div = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 4px;
`;

const SummaryInput = () => {
  return (
    <Div>
      <Label label={'summary'} htmlFor="summary" />
      <Input id={'summary'} name={'summary'} />
    </Div>
  );
};

export { SummaryInput };

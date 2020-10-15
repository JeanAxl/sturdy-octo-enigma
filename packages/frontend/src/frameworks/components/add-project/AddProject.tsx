import React from 'react';
import styled from 'styled-components';

type AddProjectProps = {
  name: string;
  setName: (name: string) => void;
  handleAddProjectClick: () => void;
};

const StyledInput = styled.input`
  border-bottom: 2px solid black !important;
  border-radius: 0px;
  font-weight: bolder;
  padding: 8px 8px;
  :focus {
    outline: 0;
  }
`;

const AddProject = ({ name, setName, handleAddProjectClick }: AddProjectProps) => {
  return (
    <div>
      <StyledInput type={'text'} value={name} name={'name'} onChange={(ev) => setName(ev.target.value)} />
      <button onClick={handleAddProjectClick}>Add</button>
    </div>
  );
};

export { AddProject };

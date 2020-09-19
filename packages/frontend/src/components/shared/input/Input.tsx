import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border-bottom: 2px solid black !important;
  border-radius: 0px;
  font-weight: bolder;
  padding: 8px 8px;
  :focus {
    outline: 0;
  }
`;

type InputProps = { type?: string; name?: string; id: string; placeholder?: string };

const Input = ({ type = 'text', name, id, placeholder }: InputProps) => {
  return <StyledInput type={type} id={id} name={name} placeholder={placeholder} />;
};

export { Input };

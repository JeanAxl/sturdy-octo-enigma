import React from 'react';
import styled from 'styled-components';

const StylesLabel = styled.label`
  font-size: 0.75em;
  color: dimgray;
`;

type LabelProps = {
  label: string;
  htmlFor: string;
};

const Label = ({ label, htmlFor }: LabelProps) => {
  return <StylesLabel htmlFor={htmlFor}>{label}</StylesLabel>;
};

export { Label };

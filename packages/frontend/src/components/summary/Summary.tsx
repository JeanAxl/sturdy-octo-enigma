import React from 'react';
import styled from 'styled-components';

type SummaryProps = {
  summary: string;
};

const H2 = styled.h2`
  font-weight: bold;
`;

const Summary = ({ summary }: SummaryProps) => {
  return <H2>{summary}</H2>;
};

export default Summary;

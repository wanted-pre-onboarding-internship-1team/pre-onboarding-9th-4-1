import MockList from '../component/MockListContent';
import { useMockList } from '../hooks';
import React from 'react';
import styled from 'styled-components';
import MockListContent from '../component/MockListContent';

export default function Mainpage() {
  const test = useMockList();
  return (
    <Container>
      <MockListContent >
        <MockListContent />
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 4rem;
  background: ${({ theme }) => theme.color.backgroundSemiDark};
`;

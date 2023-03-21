import { useMockList } from '../hooks';
import React from 'react';
import styled from 'styled-components';

export default function Mainpage() {
  const test = useMockList();
  return <Container>Mainpage</Container>;
}

const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 4rem;
  background: ${({ theme }) => theme.color.background};
`;

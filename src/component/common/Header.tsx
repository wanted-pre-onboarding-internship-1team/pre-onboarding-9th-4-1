import { COLORS } from '../../constants/colors';
import { TODAY } from '../../constants/orders';
import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>SWITCHWON</Title>
      <SubTitle>TODAY ORDER LIST(in {TODAY})</SubTitle>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: ${COLORS.orange};
  margin-bottom: 0;
`;

const SubTitle = styled.div`
  color: gray;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

import MockList from '../component/MockListContent';
import MockListContent from '../component/MockListContent';
import { useMockList, usePagenation } from '../hooks';
import React, { Suspense } from 'react';
import styled from 'styled-components';

export default function Mainpage() {
  const test = useMockList();
  const aa = usePagenation();
  return (
    <Container>
      <MockListContent>
        <MockListContent.Header />
        <Suspense fallback={<div>로딩중</div>}>
          <MockListContent.List />
        </Suspense>
      </MockListContent>
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem;
  min-height: 0;
`;

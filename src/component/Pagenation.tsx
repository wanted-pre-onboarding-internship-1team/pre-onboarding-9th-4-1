import { usePagenation } from '../hooks/usePagenation';
import React from 'react';
import styled from 'styled-components';

type PagenationProps = {
  total: number;
  size: number;
};

export default function Pagenation({ total, size }: PagenationProps) {
  const [, pageNumbers, { goPrev, goNext, move }] = usePagenation({
    total,
    size,
  });

  return (
    <PageDiv>
      <PageBtn onClick={goPrev}>{'<'}</PageBtn>
      {pageNumbers.map(pn => {
        return (
          <PageBtn key={pn} onClick={() => move(pn)}>
            {pn + 1}
          </PageBtn>
        );
      })}
      <PageBtn onClick={goNext}>{'>'}</PageBtn>
    </PageDiv>
  );
}

const PageDiv = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const PageBtn = styled.button`
  margin: 0.15rem;
  background-color: white;
  font-size: large;

  width: 2.5rem;
`;

import { OrderContext } from '../../contexts/OrderContext';
import React, { useContext } from 'react';
import styled from 'styled-components';

export default function PageNavigator() {
  const { onChangePage, lastPage, currentPage } = useContext(OrderContext);
  const SHOW_PAGE = 3;
  const goToFirstPage = () => {
    onChangePage(1);
  };

  const goToLastPage = () => {
    onChangePage(lastPage);
  };

  const goToPrevPage = () => {
    onChangePage(currentPage - 1);
  };

  const goToNextPage = () => {
    onChangePage(currentPage + 1);
  };

  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < lastPage;
  const startPage = Math.floor((currentPage - 1) / SHOW_PAGE) * SHOW_PAGE + 1;
  const pages = Array.from({ length: SHOW_PAGE }, (_, i) => i + startPage);
  return (
    <Div>
      <span onClick={goToFirstPage}>{`<<`}</span>
      {hasPrevPage && <span onClick={goToPrevPage}>{`<`}</span>}
      {pages.map(page => (
        <span
          key={page}
          className={`${currentPage === page && 'isCurrent'}`}
          onClick={() => onChangePage(page)}>
          {page}
        </span>
      ))}
      {hasNextPage && <span onClick={goToNextPage}>{`>`}</span>}
      <span onClick={goToLastPage}>{`>>`}</span>
    </Div>
  );
}

const Div = styled.div`
  background-color: white;
  display: inline-flex;
  justify-content: center;
  padding: 1rem;

  span {
    padding: 0.5rem;
    margin-right: 0.5rem;
    cursor: pointer;
    border: 1px solid #e2e2e2;
  }

  .isCurrent {
    border: 1px solid #ff5c5c;
    color: #ff5c5c;
  }
`;

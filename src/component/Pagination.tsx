import { COLORS } from '../constants/colors';
import usePageData from '../hooks/usePageData';
import usePagination from '../hooks/usePagination';
import styled from 'styled-components';

export default function Pagination() {
  const { handlePage, handleLeftPage, handleRightPage } = usePagination();
  const { page, numPages } = usePageData();

  return (
    <PaginationWrapper>
      <button onClick={() => handleLeftPage(page)} disabled={page === 1}>
        Prev
      </button>
      {Array(numPages)
        .fill(0)
        .map((_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePage(i + 1)}
            aria-current={page === i + 1 ? 'page' : undefined}>
            {i + 1}
          </button>
        ))}
      <button onClick={() => handleRightPage(page)}>Next</button>
    </PaginationWrapper>
  );
}

const PaginationWrapper = styled.div`
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  & button {
    background-color: white;
    border: 1px solid lightgray;
    color: gray;
    border-radius: 5px;
    padding: 8px 16px;
  }
  & button:hover:not([aria-current]):not([disabled]) {
    background-color: ${COLORS.orangeBG};
    cursor: pointer;
  }
  & [disabled] {
    background: ${COLORS.lightGray};
    color: lightgray;
    cursor: revert;
    transform: revert;
  }
  & [aria-current] {
    background-color: ${COLORS.orange};
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

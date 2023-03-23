import usePage from './../../hooks/usePage';
import usePagination from './../../hooks/usePagination';
import Button from './Button';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';

type PaginationProps = {
  maxPage: number;
};

const Pagination = ({ maxPage }: PaginationProps) => {
  const { currentPage, setPage } = usePage();
  const {
    goNext,
    goPrev,
    setCurrent,
    numList = [],
  } = usePagination(maxPage, currentPage, setPage);

  return (
    <PaginationWrapper>
      <Button onClick={goPrev} isDisabled={numList[0] <= 1}>
        <MdKeyboardArrowLeft size='20' />
      </Button>

      {numList.map(num => (
        <Button
          key={num}
          isSelected={num === currentPage}
          onClick={() => setCurrent(num)}
          styleType='ghost'>
          {num + 1}
        </Button>
      ))}

      <Button
        onClick={goNext}
        isDisabled={(numList[numList.length - 1] ?? 0) >= maxPage - 1}>
        <MdKeyboardArrowRight size='20' />
      </Button>
    </PaginationWrapper>
  );
};

const PaginationWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

export default Pagination;

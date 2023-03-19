import Button from './Button';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';

type PaginationProps = {
  maxPage: number;
};

const Pagination = ({ maxPage }: PaginationProps) => {
  const currentPage = 1;

  const start = currentPage - (currentPage % 5);
  const end = start + 4 > maxPage - 1 ? maxPage - 1 : start + 4;

  const numList = new Array(end - start + 1)
    .fill(0)
    .map((_, idx) => idx + start);

  return (
    <PaginationWrapper>
      <Button isDisabled={start <= 1}>
        <MdKeyboardArrowLeft size='20' />
      </Button>

      {numList.map(num => (
        <Button key={num} isSelected={num === currentPage} styleType='ghost'>
          {num + 1}
        </Button>
      ))}

      <Button isDisabled={end >= maxPage - 1}>
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

import { useSearchParams } from 'react-router-dom';

type usePagenationProps = {
  total: number;
  size: number;
};

const usePagenation = ({ total, size }: usePagenationProps) => {
  const [searchParam, setSearchParam] = useSearchParams();
  const pageNumber = Number(searchParam.get('page')) || 0;
  const pageNumbers: Array<number> = [];
  const pageLimit = Math.ceil(total / size);

  for (let i = 0; i < 5; i++) {
    const index = Math.floor(pageNumber / 5);
    if (index * 5 + i >= pageLimit) {
      break;
    }
    pageNumbers.push(index * 5 + i);
  }

  const setPageNumber = (n: number): void => {
    searchParam.set('page', String(n));
    setSearchParam(searchParam);
  };

  const goPrev = (): void => {
    if (pageNumber <= 0) return;
    setPageNumber(pageNumber - 1);
  };

  const goNext = (): void => {
    if (pageNumber > pageLimit) return;
    setPageNumber(pageNumber + 1);
  };

  const move = (n: number): void => {
    if (n < 0 || n > pageLimit) return;
    setPageNumber(n);
  };

  return [pageNumber, pageNumbers, { goPrev, goNext, move }] as const;
};

export { usePagenation };

const usePagination = (
  maxPage: number,
  currentPage: number,
  setPage: (v: number) => void
) => {
  const start = currentPage - (currentPage % 5);
  const end = start + 4 >= maxPage ? maxPage - 1 : start + 4;

  const goPrev = () => {
    setPage(start - 1);
  };

  const goNext = () => {
    setPage(end + 1);
  };

  const setCurrent = (num: number) => {
    setPage(num);
  };

  const numList = new Array(Math.max(end - start, start - end) + 1)
    .fill(0)
    .map((_, idx) => idx + start);

  return { goNext, goPrev, setCurrent, numList };
};

export default usePagination;

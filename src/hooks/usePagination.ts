const usePagination = (
  maxPage: number,
  currentPage: number,
  setPage: (v: number) => void
) => {
  const start = currentPage - (currentPage % 5);
  const end = start + 4 > maxPage - 1 ? maxPage - 1 : start + 4;

  const goPrev = () => {
    setPage(start - 1);
  };

  const goNext = () => {
    setPage(end + 1);
  };

  const setCurrent = (num: number) => {
    setPage(num);
  };

  const numList = new Array(end - start + 1)
    .fill(0)
    .map((_, idx) => idx + start);

  return { goNext, goPrev, setCurrent, numList };
};

export default usePagination;

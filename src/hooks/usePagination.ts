import usePageData from './usePageData';

const usePagination = () => {
  const { numPages, searchParams, setSearchParams } = usePageData();

  const handlePage = (page: number) => {
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
  };
  const handleLeftPage = (page: number) => {
    if (page === 1) return;
    searchParams.set('page', String(page - 1));
    setSearchParams(searchParams);
  };
  const handleRightPage = (page: number) => {
    if (page === numPages) return;
    searchParams.set('page', String(page + 1));
    setSearchParams(searchParams);
  };
  return {
    handlePage,
    handleLeftPage,
    handleRightPage,
  };
};

export default usePagination;

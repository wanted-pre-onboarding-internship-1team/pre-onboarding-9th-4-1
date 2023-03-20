import { PAGESIZE } from '../constants/orders';
import useOrderData from './useOrderData';
import { useSearchParams } from 'react-router-dom';

const usePageData = () => {
  const { pageList } = useOrderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const numPages = Math.ceil(pageList.length / PAGESIZE);

  const start = (page - 1) * PAGESIZE;
  const end = start + PAGESIZE;
  const paginatedData = pageList.slice(start, end);

  return {
    page,
    numPages,
    searchParams,
    setSearchParams,
    paginatedData,
  };
};

export default usePageData;

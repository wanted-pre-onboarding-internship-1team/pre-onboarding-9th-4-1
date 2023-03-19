import { useSearchParams } from 'react-router-dom';

export default function usePageQuery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const setQuery = (pageNum: number) => {
    searchParams.set('offset', pageNum.toString());
    setSearchParams(searchParams);
  };

  return { setQuery };
}

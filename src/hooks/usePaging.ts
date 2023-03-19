import { useSearchParams } from 'react-router-dom';

export default function usePaging() {
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePage = (idx: number) => {
    searchParams.set('page', idx.toString());
    setSearchParams(searchParams);
  };

  return handlePage;
}

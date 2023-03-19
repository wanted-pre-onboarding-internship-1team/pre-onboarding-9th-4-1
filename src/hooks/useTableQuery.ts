import { getTodayDataApi } from '../api/dataApi';
import { MAX_NUM, TODAY } from '../constants/orders';
import usePage from './usePage';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

const useTableQuery = () => {
  const { currentPage, maxPage } = usePage();
  const queryClient = useQueryClient();

  const {
    isLoading,
    error,
    data: getData,
  } = useQuery(
    ['data', currentPage],
    () => {
      console.log('fetching...👻');
      return getTodayDataApi(currentPage, MAX_NUM, TODAY);
    },
    {
      staleTime: 5000,
      refetchInterval: 5000,
    }
  );

  useEffect(() => {
    if (currentPage <= maxPage - 2) {
      const nextPage = currentPage + 1;

      queryClient.prefetchQuery(['data', nextPage], () =>
        getTodayDataApi(nextPage, MAX_NUM, TODAY)
      );
    }
  }, [currentPage, queryClient]);

  return { getData, error, isLoading };
};

export default useTableQuery;

import { getTodayDataApi } from '../api/dataApi';
import { TODAY } from '../constants/orders';
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
      return getTodayDataApi(currentPage, 50, TODAY);
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
        getTodayDataApi(nextPage, 50, TODAY)
      );
    }
  }, [currentPage, queryClient]);

  return { getData, error, isLoading };
};

export default useTableQuery;

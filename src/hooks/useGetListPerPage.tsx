import { httpClient } from '../apis/HttpClient';
import { LIMIT, TODAY } from '../datas';
import useFetch from './useFetch';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useGetListPerPage() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('offset') as string;

  const {
    data: todaySliceOrders = [],
    isLoading,
    isError,
    isPreviousData,
    refetch,
  } = useQuery(
    ['sliceorders'],
    async () => {
      return await httpClient()
        .then(res => {
          const { data } = res;
          const todayData = data
            .filter(order => order.transaction_time.split(' ')[0] === TODAY)
            .slice(parseInt(page) * LIMIT, (parseInt(page) + 1) * LIMIT);
          return todayData;
        })
        .catch(err => {
          if (err instanceof Error) throw err;
        });
    },
    {
      staleTime: 5000,
      refetchInterval: 5000,
      refetchOnWindowFocus: true,
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    refetch();
  }, [searchParams]);

  return { todaySliceOrders, isLoading, isError, isPreviousData };
}

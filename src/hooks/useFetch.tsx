import { httpClient } from '../apis/HttpClient';
import { LIMIT } from './useGetListPerPage';
import { useQuery } from '@tanstack/react-query';

const TODAY = '2023-03-08';
export default function useFetch() {
  const {
    data: todayOrders = [],
    isLoading,
    isError,
    isPreviousData,
  } = useQuery(
    ['orders'],
    async () => {
      return await httpClient()
        .then(res => {
          const { data } = res;
          const todayData = data.filter(
            order => order.transaction_time.split(' ')[0] === TODAY
          );
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
  const maxPage =
    todayOrders?.length !== 0 ? Math.ceil(todayOrders?.length / LIMIT) : 1;
  return { todayOrders, isLoading, isError, isPreviousData, maxPage };
}

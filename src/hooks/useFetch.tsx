import { httpClient } from '../apis/HttpClient';
import { LIMIT, TODAY } from '../datas/';
import { useQuery } from '@tanstack/react-query';

export default function useFetch() {
  const {
    data: todayAllOrders = [],
    isLoading,
    isError,
    isPreviousData,
  } = useQuery(
    ['orders'],
    async () => {
      return await httpClient()
        .then(res => {
          const { data } = res;
          const todayAllData = data.filter(
            order => order.transaction_time.split(' ')[0] === TODAY
          );
          return todayAllData;
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
    todayAllOrders?.length !== 0
      ? Math.ceil(todayAllOrders?.length / LIMIT)
      : 1;
  return { todayAllOrders, isLoading, isError, isPreviousData, maxPage };
}

import { Api } from '../interfaces/Api';
import { isSameDate } from '../utils/isSameDate';
import { useQuery } from '@tanstack/react-query';

const useOrderData = (api: Api, targetDate: Date) => {
  const { data } = useQuery({
    queryKey: ['orderData'],
    queryFn: () => api.getData(),
    staleTime: 5 * 1000,
    refetchInterval: 5 * 1000,
  });

  const orderData = data?.filter(({ transaction_time }) => {
    return isSameDate(transaction_time, targetDate);
  });

  return [orderData];
};
export { useOrderData };

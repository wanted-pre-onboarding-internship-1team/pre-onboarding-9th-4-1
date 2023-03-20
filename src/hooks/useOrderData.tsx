import { Api } from '../api/Api';
import { useQuery } from '@tanstack/react-query';

const useOrderData = (api: Api, targetDate: Date) => {
  const { data } = useQuery({
    queryKey: ['orderData'],
    queryFn: () => api.getData(),
    staleTime: 5 * 60 * 1000,
  });

  const orderData = data?.filter(({ transaction_time }) => {
    return checkDate(transaction_time, targetDate);
  });

  return [orderData];
};

function checkDate(date1: Date, date2: Date): boolean {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  if (year1 !== year2) {
    return false;
  }

  if (month1 !== month2) {
    return false;
  }

  if (day1 !== day2) {
    return false;
  }

  return true;
}

export { useOrderData };

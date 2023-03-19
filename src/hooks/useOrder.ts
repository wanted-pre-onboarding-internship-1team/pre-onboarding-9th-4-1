import { fetchOrders } from '../apis/fetchOrders';
import { CheckFilters } from '../types/CheckFilters';
import { Order } from '../types/Order';
import { useQuery } from '@tanstack/react-query';

function getFilterData(data: Order[], filters: CheckFilters) {
  let returnData = data;
  if (filters.isOnlyToday) {
    const TODAY = '2023-03-08';
    returnData = returnData.filter(
      item => item.transaction_time.split(' ')[0] === TODAY
    );
  }
  return returnData;
}

export default function useOrder({
  currentPage = 1,
  limit,
  checkFilters,
}: {
  currentPage: number;
  limit: number;
  checkFilters: CheckFilters;
}) {
  const { data } = useQuery<Order[]>(['fetchOrderList'], () => fetchOrders(), {
    useErrorBoundary: false,
    retryDelay: 5000,
  });
  const filterData = getFilterData(data ?? [], checkFilters);
  return {
    data:
      filterData?.slice((currentPage - 1) * limit, currentPage * limit) ?? [],
    lastPage: Math.ceil(filterData?.length / limit) ?? 0,
  };
}

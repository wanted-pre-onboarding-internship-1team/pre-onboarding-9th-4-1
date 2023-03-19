import { fetchOrders } from '../apis/fetchOrders';
import { Order } from '../types/Order';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function useOrder({
  currentPage = 1,
  limit,
}: {
  currentPage: number;
  limit: number;
}) {
  const { data } = useQuery<Order[]>(['fetchOrderList'], () => fetchOrders(), {
    useErrorBoundary: false,
    retryDelay: 5000,
  });
  console.log('currentPage', currentPage);
  const TODAY = '2023-03-08';
  const todayData = data?.filter(
    item => item.transaction_time.split(' ')[0] === TODAY
  );
  return {
    data: todayData?.slice((currentPage - 1) * limit, currentPage * limit),
  };
}

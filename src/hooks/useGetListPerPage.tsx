import useFetch from './useFetch';
import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const LIMIT = 50;

export default function useGetListPerPage() {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('offset') as string;

  const { todayOrders } = useFetch();
  useEffect(() => {
    console.log('slice');
    console.log(page);
    todayOrders.slice(parseInt(page) * LIMIT, (parseInt(page) + 1) * LIMIT);
  }, [searchParams]);

  return { todayOrders };
}

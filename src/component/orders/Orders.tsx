import useOrder from '../../hooks/useOrder';
import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function OrderList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') ?? '1';
  const { data } = useOrder({
    currentPage: parseInt(page),
    limit: 50,
  });
  //useSearchParams
  console.log(data);
  return (
    <div
      onClick={() => {
        setSearchParams({ page: (parseInt(page) + 1).toString() });
      }}>
      OrderList
    </div>
  );
}

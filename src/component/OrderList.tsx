import { MockApi } from '../api/MockApi';
import { useOrderData } from '../hooks/useOrderData';
import React from 'react';

export default function OrderList() {
  const api = new MockApi();
  const checkDate = new Date('2023-03-08');

  const [data] = useOrderData(api, checkDate);

  console.log(data);
  return <div>OrderList</div>;
}

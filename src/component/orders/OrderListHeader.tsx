import { Order } from '../../types/Order';
import React from 'react';

/**
 * 주문 목록 표 헤더
 * @returns
 */
export default function OrderListHeader({
  id,
  transaction_time,
  status,
  customer_id,
  customer_name,
  currency,
}: {
  id: string;
  transaction_time: string;
  status: string;
  customer_id: string;
  customer_name: string;
  currency: string;
}) {
  return (
    <li className='list-header'>
      <span className='id'>{id}</span>
      <span className='transaction_time'>{transaction_time}</span>
      <span className='status'>{status}</span>
      <span className='customer_id'>{customer_id}</span>
      <span className='customer_name'>{customer_name}</span>
      <span className='currency'>{currency}</span>
    </li>
  );
}

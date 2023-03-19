import { OrderContext } from '../../contexts/OrderContext';
import { Order } from '../../types/Order';
import OrderItem from './OrderItem';
import OrderListHeader from './OrderListHeader';
import React, { useContext } from 'react';
import styled from 'styled-components';

/**
 * 주문 목록 리스트
 * @props list: Order[]
 * @returns
 */
export default function OrderList() {
  const { data }: { data: Order[] } = useContext(OrderContext);
  return (
    <List>
      <OrderListHeader
        id='주문번호'
        transaction_time='거래시간'
        status='주문처리상태'
        customer_id='고객번호'
        customer_name='고객이름'
        currency='가격'
      />
      {data.map(order => {
        return <OrderItem key={order.id} {...order} />;
      })}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    border-top: 1px solid #686666;
    background-color: white;
  }

  li:nth-child(2) {
    border-top: none;
  }

  li.list-header {
    font-weight: 600;
    border-top: 2px solid #686666;
    border-bottom: 2px solid #686666;
  }

  .id {
    flex: 10%;
  }

  .transaction_time {
    flex: 30%;
  }

  .status {
    flex: 10%;
  }

  .customer_id {
    flex: 10%;
  }

  .customer_name {
    flex: 30%;
  }

  .currency {
    flex: 10%;
  }
`;

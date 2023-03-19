import { Order } from '../../types/Order';
import OrderItem from './OrderItem';
import React from 'react';
import styled from 'styled-components';

/**
 * 주문 목록 리스트
 * @props list: Order[]
 * @returns
 */
export default function OrderList({ list = [] }: { list: Order[] }) {
  return (
    <List>
      {list.map(order => {
        return <OrderItem key={order.id} {...order} />;
      })}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

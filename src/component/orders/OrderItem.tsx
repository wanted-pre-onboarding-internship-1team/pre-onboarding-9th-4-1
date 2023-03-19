import { Order } from '../../types/Order';
import React from 'react';
import styled from 'styled-components';

/**
 * 주문 목록 컴포넌트
 * @props order: Order
 * @returns
 */
function OrderItem(props: Order) {
  return <Item>{props?.customer_name}</Item>;
}

const Item = styled.li``;

export default OrderItem;

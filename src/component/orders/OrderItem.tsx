import { Order } from '../../types/Order';
import React from 'react';
import styled from 'styled-components';

/**
 * 주문 목록 컴포넌트
 * @props order: Order
 * @returns
 */
function OrderItem(props: Order) {
  const status = props?.status ? '처리완료' : '처리중';
  return (
    <Item>
      <span className='id'>{props?.id}</span>
      <span className='transaction_time'>{props?.transaction_time}</span>
      <span className='status'>{status}</span>
      <span className='customer_id'>{props?.customer_id}</span>
      <span className='customer_name'>{props?.customer_name}</span>
      <span className='currency'>{props?.currency}</span>
    </Item>
  );
}

const Item = styled.li`
  width: 100%;
`;

export default OrderItem;

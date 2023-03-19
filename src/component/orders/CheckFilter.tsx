import { OrderContext } from '../../contexts/OrderContext';
import OrderContextData from '../../types/OrderContextData';
import CheckFilterItem from './CheckFilterItem';
import React, { useContext } from 'react';
import styled from 'styled-components';

/**
 * 체크 필터
 * @returns
 */
function CheckFilter() {
  const { checkFilter } = useContext<OrderContextData>(OrderContext);
  const checkItems: { name: string; text: string; value: boolean }[] = [
    {
      name: 'isOnlyToday',
      text: '오늘거래만 표시',
      value: checkFilter.isOnlyToday,
    },
  ];
  return (
    <Ul>
      {checkItems.map((item, index) => (
        <CheckFilterItem
          key={index}
          name={item.name}
          text={item.text}
          value={item.value}
        />
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  display: inline-flex;
`;

export default CheckFilter;

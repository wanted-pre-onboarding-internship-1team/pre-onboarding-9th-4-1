import React from 'react';
import styled from 'styled-components';

export default function CheckFilterItem({
  name,
  text,
  value,
}: {
  name: string;
  text: string;
  value: boolean;
}) {
  return (
    <Item>
      <input type='checkbox' />
      <b>오늘거래만 표시</b>
    </Item>
  );
}

const Item = styled.li`
  display: inline-flex;
  align-items: center;
  b {
    font-size: 0.7rem;
  }
`;

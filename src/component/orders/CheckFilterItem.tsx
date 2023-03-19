import React from 'react';
import styled from 'styled-components';

export default function CheckFilterItem({
  name,
  text,
  value,
  onChange,
}: {
  name: string;
  text: string;
  value: boolean;
  onChange: (name: string, value: boolean) => void;
}) {
  return (
    <Item>
      <input
        type='checkbox'
        onClick={() => {
          onChange(name, !value);
        }}
        checked={value}
      />
      <b>{text}</b>
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

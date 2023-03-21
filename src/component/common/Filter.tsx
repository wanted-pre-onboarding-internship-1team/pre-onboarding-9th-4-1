import { Column, Table } from '@tanstack/react-table';
import React from 'react';
import styled from 'styled-components';

export default function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>;
  table: Table<any>;
}) {
  const footer = column.columnDef.footer;
  if (footer === 'status') {
    return (
      <Select
        onChange={({ currentTarget: { value } }) => {
          return column.setFilterValue(JSON.parse(value));
        }}>
        {Array.from(column.getFacetedUniqueValues().keys()).map(value => (
          <option key={value}>{value ? 'true' : 'false'}</option>
        ))}
      </Select>
    );
  }
  if (footer === 'customer_name') {
    return (
      <input
        placeholder='Search'
        style={{ width: '70%' }}
        type='text'
        onChange={({ currentTarget: { value } }) => {
          return column.setFilterValue(value);
        }}
      />
    );
  }

  return <div />;
}

const Select = styled.select`
  background: none;
`;

import { FilterProps } from '../../types/style.types';
import { Column } from '@tanstack/react-table';
import React from 'react';
import styled from 'styled-components';

export default function StatusFilter({
  column,
  isFilterOpen,
}: {
  column: Column<any, any>;
  isFilterOpen: boolean;
}) {
  const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    if (value === '') {
      column.setFilterValue(null);
    } else {
      column.setFilterValue(JSON.parse(value));
    }
  };

  return (
    <StatusContainer isFilterOpen={isFilterOpen}>
      <select onChange={onFilterChange}>
        <option value=''>선택 안함</option>
        <option value='true'>처리</option>
        <option value='false'>미처리</option>
      </select>
    </StatusContainer>
  );
}

const StatusContainer = styled.div<FilterProps>`
  width: 100%;
  margin-top: 5px;
  display: ${({ isFilterOpen }) => {
    return isFilterOpen ? 'true' : 'none';
  }};
`;

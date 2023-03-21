import NameFilter from './NameFilter';
import StatusFilter from './StatusFilter';
import { Column } from '@tanstack/react-table';
import React, { useState } from 'react';
import { RiFilter2Fill } from 'react-icons/ri';
import styled from 'styled-components';

export default function Filter({
  column,
  type,
}: {
  column: Column<any, any>;
  type: string;
}) {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const FILTERS = [
    {
      type: 'customer_name',
      content: <NameFilter isFilterOpen={isFilterOpen} column={column} />,
    },
    {
      type: 'status',
      content: <StatusFilter isFilterOpen={isFilterOpen} column={column} />,
    },
  ];

  return (
    <>
      <FilterButton onClick={() => setIsFilterOpen(!isFilterOpen)}>
        <RiFilter2Fill />
      </FilterButton>
      {FILTERS.filter(filter => filter.type === type)[0]?.content}
    </>
  );
}

const FilterButton = styled.button`
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;

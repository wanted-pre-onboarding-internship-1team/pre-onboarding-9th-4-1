import { FilterProps } from '../types/style.types';
import { Column } from '@tanstack/react-table';
import React, { useState } from 'react';
import { RiFilter2Fill } from 'react-icons/ri';
import styled from 'styled-components';

export default function NameFilter({ column }: { column: Column<any, any> }) {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    column.setFilterValue(event.target.value);
  };

  return (
    <>
      <FilterButton onClick={() => setIsFilterOpen(!isFilterOpen)}>
        <RiFilter2Fill />
      </FilterButton>
      <SearchContainer isFilterOpen={isFilterOpen}>
        <SearchInput
          type='text'
          name='filter'
          value={(column.getFilterValue() ?? '') as string}
          onChange={handleFilter}
          placeholder='고객이름을 검색하세요.'
        />
      </SearchContainer>
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

const SearchContainer = styled.div<FilterProps>`
  width: 100%;
  margin-top: 5px;
  display: ${({ isFilterOpen }) => {
    return isFilterOpen ? 'true' : 'none';
  }};
`;
const SearchInput = styled.input``;

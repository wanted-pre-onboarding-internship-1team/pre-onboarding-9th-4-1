import { FilterProps } from '../../types/style.types';
import { Column } from '@tanstack/react-table';
import React from 'react';
import styled from 'styled-components';

export default function NameFilter({
  column,
  isFilterOpen,
}: {
  column: Column<any, any>;
  isFilterOpen: boolean;
}) {
  console.log(isFilterOpen);
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    column.setFilterValue(event.target.value);
  };

  return (
    <SearchContainer isFilterOpen={isFilterOpen}>
      <SearchInput
        type='text'
        name='filter'
        value={(column.getFilterValue() ?? '') as string}
        onChange={handleFilter}
        placeholder='고객이름을 검색하세요.'
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.div<FilterProps>`
  width: 100%;
  margin-top: 5px;
  display: ${({ isFilterOpen }) => {
    return isFilterOpen ? 'true' : 'none';
  }};
`;
const SearchInput = styled.input``;

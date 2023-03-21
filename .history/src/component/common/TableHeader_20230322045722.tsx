import { COMMON_COLOR } from '../../constants/colors';
import allowSortKey from '../../utill/sortKey';
import { SortDirection, Header } from '@tanstack/react-table';
import { useState } from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import styled, { css } from 'styled-components';

export default function TableHeader<T extends object>({
  header,
}: {
  header: Header<T, unknown>;
}) {
  //console.log(header.column.getFacetedUniqueValues().keys());
  const filterStatus = useState(header.column.getFilterValue());
  console.log(header.column.getFilterValue());
  const onChange = () => {
    header.column.getFilterValue()
      ? header.column.setFilterValue(false)
      : header.column.setFilterValue(true);
  };
  return (
    <Th
      key={header.id}
      onClick={
        allowSortKey(header.id)
          ? header.column.getToggleSortingHandler()
          : undefined
      }>
      <Div>
        {header.column.columnDef.header as string}
        {typeof header.column.getIsSorted() !== 'boolean' &&
          {
            asc: <FaSortUp />,
            desc: <FaSortDown />,
          }[header.column.getIsSorted() as SortDirection]}
        {header.column.getCanSort() && !header.column.getIsSorted() ? (
          <FaSort />
        ) : null}
        {header.column.getCanFilter() ? (
          <span onClick={onChange}>123</span>
        ) : null}
      </Div>
    </Th>
  );
}
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    margin-left: 4px;
  }
`;

export const Cell = css`
  height: 60px;
  margin: 0;
  padding: 5px;
  border-bottom: 1px solid ${COMMON_COLOR.border};
  vertical-align: middle;
  font-size: 1.4rem;

  :last-child {
    padding-right: 36px;
    border-right: 0;
  }

  :first-child {
    padding-left: 36px;
  }
`;

const Th = styled.th`
  ${Cell}
  position: sticky;
  top: 0;
  white-space: nowrap;
  background-color: ${COMMON_COLOR.backgroundSection};
  font-weight: 700;
`;

const FilterBtn = styled.button``;

import { COMMON_COLOR } from '../../constants/colors';
import { useSearchContext } from '../../context/SearchContext';
import allowSortKey from '../../utill/sortKey';
import { SortDirection, Header } from '@tanstack/react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import styled, { css } from 'styled-components';

export default function TableHeader<T extends object>({
  header,
}: {
  header: Header<T, unknown>;
}) {
  const onChange = () => {
    switch (header.column.getFilterValue()) {
      case true:
        return header.column.setFilterValue(false);
      case false:
        return header.column.setFilterValue(undefined);
      case undefined:
        return header.column.setFilterValue(true);
    }
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
          <FilterBtn
            onClick={onChange}
            tagValue={header.column.getFilterValue() as undefined | boolean}
          />
        ) : null}
      </Div>
    </Th>
  );
}
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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

const FilterBtn = styled.button<{ tagValue: undefined | boolean }>`
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  ::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    ${({ tagValue }) => {
      if (tagValue === undefined) return;
      return tagValue
        ? 'background-color: #42a6ce'
        : 'background-color: #e2687c';
    }};

    border: 1px solid black;
  }
`;

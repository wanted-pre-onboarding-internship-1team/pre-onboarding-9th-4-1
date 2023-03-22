import { COMMON_COLOR } from './../../constants/colors';
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  ColumnDef,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';
import styled, { css } from 'styled-components';

interface TableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
}

const Table = <T extends object>({ data, columns }: TableProps<T>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const handleFilterStatus = (header: any) => {
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
    <TableWrapper>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <Th key={header.id}>
                <div
                  {...{
                    isCanSort: header.column.getCanSort(),
                    isCanFilter: header.column.getCanFilter(),
                    onClick: header.column.getToggleSortingHandler(),
                  }}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  {{
                    asc: <FaSortUp />,
                    desc: <FaSortDown />,
                  }[header.column.getIsSorted() as string] ?? null}
                  {header.column.getCanSort() &&
                  !header.column.getIsSorted() ? (
                    <FaSort />
                  ) : null}
                </div>
                {header.column.getCanFilter() ? (
                  <FilterBtn
                    onClick={() => handleFilterStatus(header)}
                    tagValue={
                      header.column.getFilterValue() as undefined | boolean
                    }
                  />
                ) : null}
              </Th>
            ))}
          </TableRow>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map(cell => (
              <Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </TableRow>
        ))}
      </tbody>
    </TableWrapper>
  );
};

const TableWrapper = styled.table`
  table-layout: fixed;
  width: 100%;
  border-spacing: 0;
  border-collapse: separate;

  thead {
    position: sticky;
  }
`;

const TableRow = styled.tr`
  :last-child {
    td {
      border-bottom: 0;
    }
  }

  :hover {
    background-color: ${COMMON_COLOR.hover};
  }
`;

const Cell = css`
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

const Td = styled.td`
  ${Cell}

  text-align: center;
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
      if (tagValue === undefined) return '    border: 1px solid gray;';
      return tagValue
        ? 'background-color: #42a6ce'
        : 'background-color: #e2687c';
    }};
  }
`;
export default Table;

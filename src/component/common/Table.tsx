/* eslint-disable prettier/prettier */
import { COMMON_COLOR } from './../../constants/colors';
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  ColumnDef,
  getSortedRowModel,
  getFilteredRowModel,
  getFacetedUniqueValues,
} from '@tanstack/react-table';
import styled, { css } from 'styled-components';
import { TbSortAscending, TbSortDescending, TbArrowsSort } from 'react-icons/tb';


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
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <TableWrapper>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              return (
                <Th key={header.id}
                  isSortEnabledColum={header.column.getCanSort()}
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  }
                  {{
                    asc: <TbSortAscending />,
                    desc: <TbSortDescending />,
                  }[header.column.getIsSorted() as string] ?? null}
                  {header.column.getCanSort() && !header.column.getIsSorted() ? (
                    <TbArrowsSort />
                  ) : null}
                  {header.column.getCanFilter() ? (
                    <select
                      onChange={({ currentTarget: { value } }) => {
                        return header.column.setFilterValue(JSON.parse(value))
                      }}
                    >

                      {Array.from(header.column.getFacetedUniqueValues().keys()).map((value) => (
                        <option key={value}>{value ? "true" : "false"}</option>
                      ))}

                    </select>
                  ) : null}
                </Th>
              );
            })}
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
    </TableWrapper >
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

const Th = styled.th<{ isSortEnabledColum: boolean }>`
  ${Cell}
  cursor: ${({ isSortEnabledColum }) => isSortEnabledColum ? 'pointer' : 'default'};
  position: sticky;
  top: 0;
  white-space: nowrap;
  background-color: ${COMMON_COLOR.backgroundSection};
  font-weight: 700;
  &:hover {
    color :  ${({ isSortEnabledColum }) => isSortEnabledColum ? "blue" : ""};  
  }
`;

const Td = styled.td`
  ${Cell}

  text-align: center;
`;

export default Table;

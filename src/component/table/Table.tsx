import { TableContext } from '../../contexts/TableContext';
import { COMMON_COLOR } from './../../constants/colors';
import usePage from './../../hooks/usePage';
import TableFilter from './TableFilter';
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  ColumnDef,
  getSortedRowModel,
  getFilteredRowModel,
  getFacetedUniqueValues,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { useEffect, useContext, useImperativeHandle } from 'react';
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import styled, { css } from 'styled-components';

interface TableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  pageSize?: number;
  searchKeyword?: string;
}

const Table = <T extends object>({
  data,
  columns,
  pageSize,
}: TableProps<T>) => {
  const { currentPage } = usePage();
  const instanceRef = useContext(TableContext);

  const table = useReactTable({
    data,
    columns,
    initialState: { pagination: { pageSize } },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    if (!pageSize) return;
    table.setPageIndex(currentPage);
  }, [currentPage]);

  useImperativeHandle(instanceRef, () => table);

  return (
    <TableWrapper>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <Th key={header.id}>
                <ThInner
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
                    asc: <BsFillCaretUpFill size={14} />,
                    desc: <BsFillCaretDownFill size={14} />,
                  }[header.column.getIsSorted() as string] ?? null}
                </ThInner>
                {header.column.getCanFilter() ? (
                  <TableFilter column={header.column} />
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
    border-right: 0;
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

const ThInner = styled.span<{ isCanSort: boolean }>`
  position: relative;
  user-select: none;

  ${({ isCanSort }) => isCanSort && `cursor: pointer;`}

  svg {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
  }
`;

const Td = styled.td`
  ${Cell}

  text-align: center;
`;

export default Table;

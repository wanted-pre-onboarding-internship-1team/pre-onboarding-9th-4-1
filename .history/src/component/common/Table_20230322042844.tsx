import allowSortKey from '../../utill/sortKey';
import { COMMON_COLOR } from './../../constants/colors';
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  ColumnDef,
  getSortedRowModel,
  SortDirection,
  getFilteredRowModel,
  getFacetedUniqueValues,
  Header,
} from '@tanstack/react-table';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { HeaderProps } from 'react-table';
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
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <TableWrapper>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map(header => {
              return <CustomHeader key={header.id} header={header} />;
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
    </TableWrapper>
  );
};

function CustomHeader<T extends object>({
  header,
}: {
  header: Header<T, unknown>;
}) {
  return (
    <Th
      key={header.id}
      onClick={
        allowSortKey(header.id)
          ? header.column.getToggleSortingHandler()
          : undefined
      }>
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}
      {header.column.columnDef.header}
      {typeof header.column.getIsSorted() !== 'boolean' &&
        {
          asc: <FaSortUp />,
          desc: <FaSortDown />,
        }[header.column.getIsSorted() as SortDirection]}
      {header.column.getCanSort() && !header.column.getIsSorted() ? (
        <FaSort />
      ) : null}
      {header.column.getCanFilter() ? <span>123</span> : null}
    </Th>
  );
}

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

  & > svg {
    margin-left: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Td = styled.td`
  ${Cell}

  text-align: center;
`;

export default Table;

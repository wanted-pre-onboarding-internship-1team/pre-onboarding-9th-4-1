import { Header } from '@tanstack/react-table';
import {
  TbArrowsSort,
  TbSortAscending,
  TbSortDescending,
} from 'react-icons/tb';

export default function TableHeaderSort<T extends object>({
  header,
}: {
  header: Header<T, unknown>;
}) {
  return (
    <div
      {...{
        isCanSort: header.column.getCanSort(),
        isCanFilter: header.column.getCanFilter(),
        onClick: header.column.getToggleSortingHandler(),
      }}>
      {{
        asc: <TbSortAscending size='17' />,
        desc: <TbSortDescending size='17' />,
      }[header.column.getIsSorted() as string] ?? null}
      {header.column.getCanSort() && !header.column.getIsSorted() ? (
        <TbArrowsSort size='17' />
      ) : null}
    </div>
  );
}

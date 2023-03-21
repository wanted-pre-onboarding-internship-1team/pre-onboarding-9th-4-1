import allowSortKey from '../../utill/sortKey';
import { Header } from '@tanstack/react-table';

export default function CustomHeader<T extends object>({
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
      <TestDiv>
        {header.column.columnDef.header as string}
        {typeof header.column.getIsSorted() !== 'boolean' &&
          {
            asc: <FaSortUp />,
            desc: <FaSortDown />,
          }[header.column.getIsSorted() as SortDirection]}
        {header.column.getCanSort() && !header.column.getIsSorted() ? (
          <FaSort />
        ) : null}
        {header.column.getCanFilter() ? <span>123</span> : null}
      </TestDiv>
    </Th>
  );
}
const TestDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > svg {
    margin-left: 4px;
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

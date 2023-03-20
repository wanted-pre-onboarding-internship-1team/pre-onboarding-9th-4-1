import { COLORS } from '../constants/colors';
import usePageData from '../hooks/usePageData';
import { DataType } from '../types/data.types';
import styled from 'styled-components';

export default function Table() {
  const { paginatedData } = usePageData();

  return (
    <TableWrapper>
      <TableHead>
        <tr>
          <th>주문번호</th>
          <th>거래시간</th>
          <th>주문처리상태</th>
          <th>고객번호</th>
          <th>고객이름</th>
          <th>가격</th>
        </tr>
      </TableHead>
      <TableBody>
        {paginatedData.map((order: DataType) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.transaction_time}</td>
            <td
              style={
                order.status
                  ? { color: `${COLORS.blue}` }
                  : { color: `${COLORS.red}` }
              }>
              {order.status ? 'O' : 'X'}
            </td>
            <td>{order.customer_id}</td>
            <td>{order.customer_name}</td>
            <td>{order.currency}</td>
          </tr>
        ))}
      </TableBody>
    </TableWrapper>
  );
}

const TableWrapper = styled.table`
  width: 100%;

  td,
  th {
    padding: 1em 0.5em;
  }
`;

const TableHead = styled.thead`
  position: sticky;
  fornt-weight: bold;
  background-color: ${COLORS.orange};
  color: white;

  & th:first-child {
    border-top-left-radius: 8px;
  }
  & th:last-child {
    border-top-right-radius: 8px;
  }
`;

const TableBody = styled.tbody`
  text-align: center;
  & tr:nth-child(odd) {
    background-color: white;
  }
`;

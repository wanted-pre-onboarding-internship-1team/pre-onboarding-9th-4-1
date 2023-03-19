import { TX } from '../../interface/Transaction';
import { parseDate } from '../../utils/date';
import styled from 'styled-components';

export default function Transaction({ tx }: { tx: TX }) {
  //   console.log();
  return (
    <TableRow>
      <RowColumn>{tx.id}</RowColumn>
      <RowColumn>{tx.customer_id}</RowColumn>
      <RowColumn>{tx.customer_name}</RowColumn>
      <RowColumn>{tx.currency}</RowColumn>
      <RowColumn>{parseDate(tx.transaction_time)}</RowColumn>
      <RowColumn>{tx.status ? '주문 완료' : '주문 전'}</RowColumn>
    </TableRow>
  );
}
const TableRow = styled.tr`
  width: 100%;
`;
const RowColumn = styled.td``;

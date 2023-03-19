import { TX } from '../../interface/Transaction';
import { parseDate } from '../../utils/date';
import styled from 'styled-components';

export default function Transaction({ tx }: { tx: TX }) {
  return (
    <>
      <TableRow>
        <RowColumn>{tx.id}</RowColumn>
        <RowColumn>{tx.customer_id}</RowColumn>
        <RowColumn>{tx.customer_name}</RowColumn>
        <RowColumn>{tx.currency}</RowColumn>
        <RowColumn>{parseDate(tx.transaction_time)}</RowColumn>
        <RowColumn>{tx.status ? '주문 완료' : '주문 전'}</RowColumn>
      </TableRow>
      <RowSpacer>
        <Spacer />
      </RowSpacer>
    </>
  );
}
const TableRow = styled.tr`
  width: 100%;
  background-color: white;
`;
const RowColumn = styled.td`
  text-align: center;
  padding: 20px 12px;
  padding: 10px;
`;

const RowSpacer = styled.tr``;
const Spacer = styled.td`
  height: 10px;
`;
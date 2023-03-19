import usePagedTables from '../../hooks/usePagedTables';
import { TX } from '../../interface/Transaction';
import Transaction from './Transaction';
import styled from 'styled-components';

export default function TransactionTableBody() {
  const { isLoading, error, txList } = usePagedTables();
  if (isLoading) return null;

  if (error) return null;

  return (
    <TableBody>
      {txList?.map((tx: TX) => {
        return <Transaction tx={tx} key={tx.id} />;
      })}
    </TableBody>
  );
}

const TableBody = styled.tbody`
  width: 100%;
  background-color: #efefef;
`;
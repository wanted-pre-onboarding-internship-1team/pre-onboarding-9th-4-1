import { TX } from '../../interface/Transaction';
import Transaction from './Transaction';
import { fetchTx } from './TransactionList';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

export default function TransactionTableBody() {
  const {
    isLoading,
    error,
    data: txList,
  } = useQuery<TX[], Error>(['transactionList'], fetchTx);

  if (isLoading) return <>'Loading...'</>;

  if (error) return <>'An error has occurred: ' + error</>;

  return (
    <TableBody>
      {txList.map((tx: TX) => {
        return <Transaction tx={tx} key={tx.id} />;
      })}
    </TableBody>
  );
}

const TableBody = styled.tbody`
  border-collapse: collapse;
  width: 100%;
`;

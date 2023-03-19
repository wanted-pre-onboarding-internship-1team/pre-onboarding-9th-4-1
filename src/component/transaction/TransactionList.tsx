import { TX_LIST } from '../../consts/api';
import { TX } from '../../interface/Transaction';
import Transaction from './Transaction';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export async function fetchTx() {
  return await axios.get(TX_LIST).then(res => res.data);
}

export default function TransactionList() {
  const {
    isLoading,
    error,
    data: txList,
  } = useQuery<TX[], Error>(['transactionList'], fetchTx);

  if (isLoading) return <>'Loading...'</>;

  if (error) return <>'An error has occurred: ' + error</>;

  return (
    <ul>
      {txList.map((tx: TX) => {
        return <Transaction tx={tx} key={tx.id} />;
      })}
    </ul>
  );
}

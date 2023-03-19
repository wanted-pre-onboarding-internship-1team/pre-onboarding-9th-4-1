import { TX_LIST } from '../../consts/api';
import { TX, TxResponse } from '../../interface/Transaction';
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

  if (txList === undefined) {
    return <></>;
  }
  return (
    <ul>
      {txList.map((tx: TX) => {
        return <>{tx.id}</>;
      })}
    </ul>
  );
}

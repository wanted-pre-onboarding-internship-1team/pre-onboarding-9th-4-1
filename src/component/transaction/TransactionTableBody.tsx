import { TX } from '../../interface/Transaction';
import Transaction from './Transaction';
import { fetchTx } from './TransactionList';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function TransactionTableBody() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(0);

  useEffect(() => {
    const page = Number.parseInt(searchParams.get('page') ?? '0');
    setPage(page >= 0 ? Math.floor(page) : 0);
  });

  const {
    isLoading,
    error,
    data: txList,
  } = useQuery<TX[], Error>(['transactionList', page], () => fetchTx(page));

  if (isLoading) return null;

  if (error) return null;

  return (
    <TableBody>
      {txList.map((tx: TX) => {
        return <Transaction tx={tx} key={tx.id} />;
      })}
    </TableBody>
  );
}

const TableBody = styled.tbody`
  width: 100%;
  background-color: #efefef;
`;

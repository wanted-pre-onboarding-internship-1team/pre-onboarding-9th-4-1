import { fetchTx } from '../component/transaction/TransactionList';
import { TX } from '../interface/Transaction';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function usePagedTables() {
  const [searchParams, _] = useSearchParams();
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
  return { isLoading, error, txList };
}

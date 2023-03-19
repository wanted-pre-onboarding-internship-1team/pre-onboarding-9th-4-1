import TransactionList from '../component/transaction/TransactionList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

const queryClient = new QueryClient();

export default function Mainpage() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>주문 목록</div>
      <TransactionList />
    </QueryClientProvider>
  );
}

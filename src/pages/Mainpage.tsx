import Center from '../component/common/Center';
import TransactionList from '../component/transaction/TransactionList';
import { queryClient } from '../utils/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';

export default function Mainpage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Center height='100vh'>
        <div>주문 목록</div>
        <TransactionList />
      </Center>
    </QueryClientProvider>
  );
}

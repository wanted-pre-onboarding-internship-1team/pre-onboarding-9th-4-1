import Center from '../component/common/Center';
import TransactionList from '../component/transaction/TransactionList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

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

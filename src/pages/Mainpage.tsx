import Center from '../component/common/Center';
import TransactionList from '../component/transaction/TransactionList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
      cacheTime: 5 * 1000,
    },
  },
});

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

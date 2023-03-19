import Center from '../component/common/Center';
import TransactionList from '../component/transaction/TransactionList';
import { queryClient } from '../utils/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import styled from 'styled-components';

export default function Mainpage() {
  return (
    <QueryClientProvider client={queryClient}>
      <Center height='100vh'>
        <Head>주문 목록</Head>
        <TransactionList />
      </Center>
    </QueryClientProvider>
  );
}

const Head = styled.div`
  font-weight: bold;
  font-size: 34px;
  padding-bottom: 20px;
`;

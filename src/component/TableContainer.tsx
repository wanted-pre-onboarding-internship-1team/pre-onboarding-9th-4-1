import { COLORS } from '../constants/colors';
import Pagination from './Pagination';
import Table from './Table';
import { QueryClient, QueryClientProvider } from 'react-query';
import styled from 'styled-components';

export default function TableContainer() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TableWrapper>
        <Table />
      </TableWrapper>
      <Pagination />
    </QueryClientProvider>
  );
}

const TableWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: calc(100vh - 300px);
  border: 1px solid lightgray;
  border-radius: 10px;
  overflow: auto;
  margin: 0 auto;
  background-color: ${COLORS.lightGray};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

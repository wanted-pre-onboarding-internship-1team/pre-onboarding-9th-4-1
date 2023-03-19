import Center from '../common/Center';
import Pagination from './Pagination';
import TransactionTableBody from './TransactionTableBody';
import TransactionTableHeader from './TransactionTableHeader';
import styled from 'styled-components';

// 스타일 참고 : https://preview.colorlib.com/theme/bootstrap/css-table-14/
export default function TransactionList() {
  return (
    <Center>
      <ScrollBodyWrapper>
        <Table>
          <TransactionTableHeader />
          <TransactionTableBody />
        </Table>
      </ScrollBodyWrapper>
      <Pagination />
    </Center>
  );
}

const Table = styled.table`
  width: 800px;
  background-color: #efefef;
  color: #212529;
`;

const ScrollBodyWrapper = styled.div`
  height: 500px;
  overflow: auto;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  ::-webkit-scrollbar {
    /* 크롬 엣지 등 */
    display: none;
  }
`;

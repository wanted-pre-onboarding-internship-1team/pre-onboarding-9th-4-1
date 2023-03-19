import { TX_LIST } from '../../consts/api';
import Center from '../common/Center';
import TransactionTableBody from './TransactionTableBody';
import TransactionTableHeader from './TransactionTableHeader';
import axios from 'axios';
import styled from 'styled-components';

export async function fetchTx() {
  return await axios.get(TX_LIST).then(res => res.data);
}

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
    </Center>
  );
}

const Table = styled.table`
  width: 800px;
  background-color: #efefef;
  color: #212529;
  box-sizing: border-box;
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

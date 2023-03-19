import { TX_LIST } from '../../consts/api';
import { TX } from '../../interface/Transaction';
import Center from '../common/Center';
import Transaction from './Transaction';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import styled from 'styled-components';

export async function fetchTx() {
  return await axios.get(TX_LIST).then(res => res.data);
}

// 스타일 참고 : https://preview.colorlib.com/theme/bootstrap/css-table-14/
export default function TransactionList() {
  const {
    isLoading,
    error,
    data: txList,
  } = useQuery<TX[], Error>(['transactionList'], fetchTx);

  if (isLoading) return <>'Loading...'</>;

  if (error) return <>'An error has occurred: ' + error</>;

  return (
    <Center height=''>
      <ScrollBodyWrapper>
        <Table>
          <TableHeader>
            <HeaderColumn>주문번호</HeaderColumn>
            <HeaderColumn>고객번호</HeaderColumn>
            <HeaderColumn>고객명</HeaderColumn>
            <HeaderColumn>가격</HeaderColumn>
            <HeaderColumn>거래시간</HeaderColumn>
            <HeaderColumn>주문 처리 상태</HeaderColumn>
          </TableHeader>
          <TableBody>
            {txList.map((tx: TX) => {
              return <Transaction tx={tx} key={tx.id} />;
            })}
          </TableBody>
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
const TableHeader = styled.thead`
  position: sticky;
  top: 0;
  background-color: #efefef;
`;
const HeaderColumn = styled.th``;
const TableBody = styled.tbody`
  width: 100%;
`;
const ScrollBodyWrapper = styled.div`
  height: 500px;
  overflow: auto;
`;

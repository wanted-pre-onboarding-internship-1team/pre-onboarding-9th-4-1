import styled from 'styled-components';

export default function TransactionTableHeader() {
  return (
    <TableHeader>
      <HeaderColumn>주문번호</HeaderColumn>
      <HeaderColumn>고객번호</HeaderColumn>
      <HeaderColumn>고객명</HeaderColumn>
      <HeaderColumn>가격</HeaderColumn>
      <HeaderColumn>거래시간</HeaderColumn>
      <HeaderColumn>주문 처리 상태</HeaderColumn>
    </TableHeader>
  );
}

const TableHeader = styled.thead`
  position: sticky;
  top: 0;
  background-color: #efefef;
`;
const HeaderColumn = styled.th`
  padding: 12px;
  font-weight: bold;
  font-size: 1.3rem;
`;

import { useMockList } from '../hooks';
import { ReactNode } from 'react';
import styled from 'styled-components';

export default function MockListContent({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}

MockListContent.Header = Header;
MockListContent.List = List;

const Container = styled.section`
  height: 100%;
  width: 100%;
  min-height: 400px;
  background: white;
`;

//주문번호 고객번호 처리상태 가격 거래시간 이름
function Header() {
  return (
    <HeaderContainer>
      <HeaderItem>주문번호</HeaderItem>
      <HeaderItem>고객번호</HeaderItem>
      <HeaderItem>처리상태</HeaderItem>
      <HeaderItem>가격</HeaderItem>
      <HeaderItem>거래 시간</HeaderItem>
      <HeaderItem>이름</HeaderItem>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: center;
  background: #ffebd4;
  color: #333333;
`;

const HeaderItem = styled.li`
  padding: 1rem 0;
`;

function List() {
  const list = useMockList()!;
  return <ListContainer>{list.map(item)}</ListContainer>;
}

const ListContainer = styled.ul`
  display: grid;
  grid-auto-rows: minmax(100px, 100px);
`;

const ListItem = styled.li``;
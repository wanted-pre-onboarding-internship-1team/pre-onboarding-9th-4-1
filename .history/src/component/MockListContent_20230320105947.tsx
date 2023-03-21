import { useMockList } from '../hooks';
import MockItem from './MockItem';
import { ReactNode } from 'react';
import styled from 'styled-components';

export default function MockListContent({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}

MockListContent.Header = Header;
MockListContent.List = List;

const Container = styled.section`
  width: 100%;
  min-height: 300px;
  background: ${({ theme }) => theme.color.backgroundSemiDark};
  height: auto;
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
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr 1fr;
  justify-items: center;
  background: #fdf2e4;
  color: #333333;
`;

const HeaderItem = styled.li`
  padding: 0.8rem 0;
`;

function List() {
  const list = useMockList();
  return (
    <ListContainer>
      {list.map(item => (
        <MockItem key={item.id + item.customer_id} item={item} />
      ))}
    </ListContainer>
  );
}

const ListContainer = styled.ul`
  width: 100%;
`;

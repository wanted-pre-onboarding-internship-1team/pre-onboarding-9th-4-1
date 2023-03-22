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
  return <div>나는 헤더</div>;
}

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

function List() {
  return <div>나는 리스트</div>;
}
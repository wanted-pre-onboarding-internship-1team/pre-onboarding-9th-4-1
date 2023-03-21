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

function Header() {
  return <div>나는 헤더</div>;
}

function List() {
  return <div>나는 리스트</div>;
}

import { MockResponse } from '../api/types/mock';
import styled from 'styled-components';

interface Props {
  item: MockResponse;
}
export default function MockItem({ item }: Props) {
  const { id, transaction_time, status, customer_id, customer_name, currency } =
    item;

  return (
    <Container>
      <Item>{id}</Item>
      <Item>{customer_id}</Item>
      <Item>{status ? '처리됨' : '안됨'}</Item>
      <Item>{currency}</Item>
      <Item>{transaction_time}</Item>
      <Item>{customer_name}</Item>
    </Container>
  );
}

const Container = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 2fr 1fr;
  grid-auto-rows: minmax(40px, 40px);
  grid-row-gap: 0.1rem;
  margin-top: 0.1rem;
  font-size: 0.8rem;
  background-color: white;

  &:hover {
    background: #fbe3cba2;
    color: white;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

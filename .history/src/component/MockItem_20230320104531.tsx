import { MockResponse } from '../api/types/mock';
import styled from 'styled-components';

interface Props {
  item: MockResponse;
}
export default function MockItem({ item }: Props) {
  const { id, transaction_time, status, customer_id, customer_name, currency } =
    item;

  return (
    <>
      <Item>{item.id}</Item>
    </>
  );
}

const Item = styled.li`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

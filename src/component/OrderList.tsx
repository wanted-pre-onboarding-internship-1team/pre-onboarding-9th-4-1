import { OrderItem } from './OrderItem';
import styled from 'styled-components';

type OrderListProps = {
  data: OrderItem[];
};

const OrderList = ({ data }: OrderListProps) => {
  return (
    <Table>
      <caption>OrderList</caption>
      <thead>
        <tr>
          <th>주문 ID</th>
          <th>고객 ID</th>
          <th>고객명</th>
          <th>상태</th>
          <th>주문 시간</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        {data.map(orderItem => {
          return (
            <Tr key={orderItem.id}>
              <Td>{orderItem.id}</Td>
              <Td>{orderItem.customer_id}</Td>
              <Td>{orderItem.customer_name}</Td>
              <Td>{orderItem.status ? '성공' : '실패'}</Td>
              <Td>{orderItem.transaction_time.toLocaleString()}</Td>
              <Td>${orderItem.currency}</Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export { OrderList };

const Tr = styled.tr`
  align-items: center;
  background-color: white;
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
`;

const Td = styled.td`
  border: solid 1px black;
  margin: 2px;
  padding: 4px;
`;

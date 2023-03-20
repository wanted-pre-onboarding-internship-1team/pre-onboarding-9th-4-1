import { OrderData } from '../interfaces/OrderItem';
import styled from 'styled-components';

type OrderListProps = {
  data: OrderData[];
};

const OrderList = ({ data }: OrderListProps) => {
  return (
    <Table>
      <caption>주문 내역</caption>
      <thead>
        <tr>
          <Th>주문 ID</Th>
          <Th>고객 ID</Th>
          <Th>고객명</Th>
          <Th>상태</Th>
          <Th>주문 시간</Th>
          <Th>가격</Th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map(orderItem => {
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
  text-align: center;
  border: 1px #a39485 solid;
  font-size: 0.9em;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  width: 100%;
  border-collapse: collapse;
  border-radius: 5px;
  overflow: hidden;
`;

const Td = styled.td`
  width: 300px;
  height: 100;
  word-break: break-all;
  border: solid 1px black;
  margin: 2px;
  padding: 4px;
`;

const Th = styled.th`
  font-weight: bold;
  color: #fff;
  background: #73685d;
`;

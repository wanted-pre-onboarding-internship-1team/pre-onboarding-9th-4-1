import { OrderData } from '../interfaces/OrderItem';
import styled from 'styled-components';

type OrderListProps = {
  data: OrderData[];
};

const OrderList = ({ data }: OrderListProps) => {
  return (
    <TableDiv>
      <Table>
        <Tcaption>주문 내역</Tcaption>
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
                  <Td>{orderItem.status ? 'O' : 'X'}</Td>
                  <Td>{orderItem.transaction_time.toLocaleString()}</Td>
                  <Td>${orderItem.currency}</Td>
                </Tr>
              );
            })}
        </tbody>
      </Table>
    </TableDiv>
  );
};

export { OrderList };

const TableDiv = styled.div`
  width: 100%;
  height: 90%;
  overflow: auto;
`;

const Tcaption = styled.caption`
  width: 100%;
  padding: 0.5rem;
  color: white;
  background: #73685d;
  font-size: xx-large;
  font-weight: 800;
`;

const Tr = styled.tr`
  align-items: center;
  background-color: white;
`;

const Table = styled.table`
  width: 100%;
  overflow: hidden;
  table-layout: fixed;
  border: 1px #a39485 solid;
  font-size: 0.9em;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  border-collapse: collapse;
  border-radius: 5px;
`;

const Td = styled.td`
  width: 300px;
  height: 100;
  word-break: break-all;
  border: solid 1px black;
  margin: 2px;
  padding: 10px;
`;

const Th = styled.th`
  border: solid 1px white;
  padding: 0.5rem;
  color: #fff;
  font-size: larger;
  background: #73685d;
  font-weight: bold;
`;

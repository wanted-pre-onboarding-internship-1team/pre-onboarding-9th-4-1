import { OrderItem } from './OrderItem';
import styled from 'styled-components';

type OrderListProps = {
  data: OrderItem[];
};

const OrderList = ({ data }: OrderListProps) => {
  return (
    <Table>
      <caption>OrderList</caption>
      <thead />
      <tbody>
        {data.map(orderItem => {
          return (
            <Tr key={orderItem.id}>
              <td>{orderItem.id}</td>
              <td>{orderItem.customer_id}</td>
              <td>{orderItem.customer_name}</td>
              <td>{orderItem.status}</td>
              <td>{orderItem.transaction_time.toLocaleString()}</td>
              <td>${orderItem.currency}</td>
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
`;

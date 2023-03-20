import { OrderItem, OrderItemDTO } from '../component/OrderItem';
import { Api } from './Api';

class MockApi implements Api {
  async getData(): Promise<OrderItem[]> {
    const response = await fetch('/data/mockData.json');
    const data = await response.json();

    const proccessedData = data.map((orderItemDTO: OrderItemDTO) => {
      return {
        ...orderItemDTO,
        transaction_time: new Date(orderItemDTO.transaction_time),
        currency: Number(orderItemDTO.currency.replace('$', '')),
      };
    });
    return proccessedData;
  }
}

export { MockApi };

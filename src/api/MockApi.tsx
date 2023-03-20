import { Api } from '../interfaces/Api';
import { OrderData, OrderResponse } from '../interfaces/OrderItem';

class MockApi implements Api {
  async getData(): Promise<OrderData[]> {
    const response = await fetch('/data/mockData.json');
    const data = await response.json();

    const proccessedData = data.map((orderItemDTO: OrderResponse) => {
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

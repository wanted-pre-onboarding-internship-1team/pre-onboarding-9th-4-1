import { OrderItem } from '../component/OrderItem';
import { Api } from './Api';

class MockApi implements Api {
  async getData(): Promise<OrderItem[]> {
    const response = await fetch('/data/mockData.json');
    const data = await response.json();

    return data;
  }

  async refetch(): Promise<OrderItem[]> {
    const response = await fetch('/data/mockData.json');
    const data = await response.json();

    console.log('refetch called');
    return data;
  }
}

export { MockApi };

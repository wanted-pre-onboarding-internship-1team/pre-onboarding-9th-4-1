import { Order } from '../types/Order';
import httpClient from '../utils/httpClient';

export function fetchOrders(): Promise<Order[]> {
  return httpClient({
    url: '/data/mockData.json',
    method: 'GET',
  }).then(res => res.data);
}

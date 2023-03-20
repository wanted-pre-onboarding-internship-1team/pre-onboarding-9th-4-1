import { OrderItem } from '../component/OrderItem';

interface Api {
  getData(): Promise<OrderItem[]>;
}

export type { Api };

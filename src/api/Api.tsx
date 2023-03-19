import { OrderItem } from '../component/OrderItem';

interface Api {
  getData(): Promise<OrderItem[]>;
  refetch(): Promise<OrderItem[]>;
}

export type { Api };

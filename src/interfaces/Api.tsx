import { OrderData } from './OrderItem';

interface Api {
  getData(): Promise<OrderData[]>;
}

export type { Api };

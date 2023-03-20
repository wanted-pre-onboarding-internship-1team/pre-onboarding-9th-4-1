type OrderItem = {
  id: number;
  transaction_time: Date;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: number;
};

type OrderItemDTO = {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
};

export type { OrderItem, OrderItemDTO };

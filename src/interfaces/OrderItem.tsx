type OrderData = {
  id: number;
  transaction_time: Date;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: number;
};

type OrderResponse = {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
};

export type { OrderData, OrderResponse };

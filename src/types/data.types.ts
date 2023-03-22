export interface DataType {
  [key: string]: string | number | boolean;
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

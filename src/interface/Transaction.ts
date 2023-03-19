export interface TxResponse {
  data: TX[];
  status: number;
  statusText: string;
}

export interface TX {
  id: number;
  transaction_time: Date;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

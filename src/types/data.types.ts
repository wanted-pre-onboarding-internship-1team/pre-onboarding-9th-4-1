interface DataType {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

type DataTypeKey = keyof DataType;

export type { DataTypeKey, DataType };

export interface TxResponse {
  data: TX[];
  status: number;
  statusText: string;
}

// - 데이터 스키마
//     - `id(주문번호)`: `number`
//     - `transaction_time(거래시간)`: `string`
//     - `status(주문처리상태)`: `boolean`
//     - `customer_id(고객번호)`: `number`
//     - `customer_name(고객이름)`: `string`
//     - `currency(가격)`: `string`
export interface TX {
  id: number;
  transaction_time: Date;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

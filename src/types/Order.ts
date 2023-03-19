/**
 * Order interface
 * @property {number} id - 주문번호
 * @property {string} transaction_time - 거래시간
 * @property {boolean} status - 주문처리상태
 * @property {number} customer_id - 고객번호
 * @property {string} customer_name - 고객명
 * @property {string} currency - 가격
 */
export interface Order {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

import { TX } from '../../interface/Transaction';
import { parseDate } from '../../utils/date';

export default function Transaction({ tx }: { tx: TX }) {
  //   console.log();
  return (
    <li>
      <span>주문번호 : {tx.id}</span>
      <span>고객번호 : {tx.customer_id}</span>
      <span>거래시간 : {parseDate(tx.transaction_time)}</span>
      <span>고객명 : {tx.customer_name}</span>
      <span>가격 : {tx.currency}</span>
      <span>주문 처리 상태 : {tx.status ? '주문 완료' : '주문 전'}</span>
    </li>
  );
}

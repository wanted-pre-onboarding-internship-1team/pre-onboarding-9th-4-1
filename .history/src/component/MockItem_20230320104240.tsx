import { MockResponse } from '../api/types/mock';

interface Props {
  item: MockResponse;
}
export default function MockItem({ item }: Props) {
  const { id, transaction_time, status, customer_id, customer_name, currency } =
    item;
  return <div></div>;
}

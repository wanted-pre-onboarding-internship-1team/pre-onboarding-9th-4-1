import { MockResponse } from '../api/types/mock';

interface Props {
  item: MockResponse;
}
export default function MockItem(data: Props) {
  return <div></div>;
}

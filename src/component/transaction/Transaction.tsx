import { TX } from '../../interface/Transaction';

export default function Transaction({ tx }: { tx: TX }) {
  return <>{tx.id}</>;
}

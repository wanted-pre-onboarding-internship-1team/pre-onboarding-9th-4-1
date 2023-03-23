export default function allowSortKey(key: string) {
  return key === 'id' || key === 'transaction_time';
}

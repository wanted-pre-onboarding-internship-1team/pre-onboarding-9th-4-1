export default function allowSortKey(key: string) {
  return key === ('id' || 'transaction_time');
}

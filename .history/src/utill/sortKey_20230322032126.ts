export default function allowSortKey(key: string) {
  console.log(key, key === ('id' || 'transaction_time'));
  return key === ('id' || 'transaction_time');
}

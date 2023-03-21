export default function allowSortKey(key: string) {
  console.log(key, key === ('id' || 'transaction_time'));
  console.log('trans', 'transaction_time' === key);
  return key === ('id' || 'transaction_time');
}

export default function allowSortKey(key: string) {
  console.log('a' === ('b' || 'a'));

  return key === ('id' || 'transaction_time');
}

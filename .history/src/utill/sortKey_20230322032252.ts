export default function allowSortKey(key: string) {
  return key === ('id' || 'transaction_time');
}

console.log('a' === ('b' || 'a'));

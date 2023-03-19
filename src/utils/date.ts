export const parseDate = (transactionTime: Date) => {
  return new Date(transactionTime).toLocaleDateString('ko-KR', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
};

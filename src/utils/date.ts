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

export const createToday = () => {
  return new Date('2023-03-08');
};

export const datesAreOnSameDay = (first: Date, second: Date) =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();

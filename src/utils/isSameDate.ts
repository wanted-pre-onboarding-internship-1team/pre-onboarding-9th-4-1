function isSameDate(date1: Date, date2: Date): boolean {
  const year1 = date1.getFullYear();
  const month1 = date1.getMonth();
  const day1 = date1.getDate();

  const year2 = date2.getFullYear();
  const month2 = date2.getMonth();
  const day2 = date2.getDate();

  if (year1 !== year2) {
    return false;
  }

  if (month1 !== month2) {
    return false;
  }

  if (day1 !== day2) {
    return false;
  }

  return true;
}

export { isSameDate };

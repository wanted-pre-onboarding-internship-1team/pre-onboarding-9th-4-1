function splitArray<T extends object>(
  arr: T[] | undefined,
  chunk: number
): T[][] {
  if (arr === undefined) {
    return [];
  }

  const result: T[][] = [];

  for (let index = 0; index < arr.length; index += chunk) {
    const tempArray = arr.slice(index, index + chunk);
    result.push(tempArray);
  }

  return result;
}

export { splitArray };

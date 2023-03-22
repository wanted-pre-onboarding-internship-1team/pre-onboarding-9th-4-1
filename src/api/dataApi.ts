import { TODAY } from '../constants/orders';
import { DataType } from '../types/data.types';
import axios from 'axios';

export const getTodayDataApi = async () => {
  const response = await axios.get('/data/mockData.json');

  const filtered = response.data.filter((item: DataType) =>
    item.transaction_time.includes(TODAY)
  );

  return filtered;
};

export const getSearchDataApi = async (keyword: string) => {
  const response = await axios.get('/data/mockData.json');

  const filtered = response.data.filter(
    (item: DataType) =>
      item.transaction_time.includes(TODAY) &&
      item.customer_name
        .toLocaleUpperCase()
        .includes(keyword.toLocaleUpperCase())
  );

  return filtered;
};

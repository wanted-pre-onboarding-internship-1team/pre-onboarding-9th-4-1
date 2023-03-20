import { TODAY } from '../constants/orders';
import { DataType } from '../types/data.types';
import axios from 'axios';

export const getTodayDataApi = async () => {
  const response = await axios.get('/data/mockData.json');
  const data = response.data;

  const filteredData = data.filter((data: DataType) =>
    data.transaction_time.includes(TODAY)
  );

  return filteredData;
};

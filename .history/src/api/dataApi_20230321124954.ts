import { DataType } from '../types/data.types';
import axios from 'axios';

export const getDataApi = async (skip: number, limit: number) => {
  const response = await axios.get('/data/mockData.json');
  const begin = skip * limit;
  const end = skip * limit + limit;

  return response.data.slice(begin, end);
};

export const getTodayDataApi = async (
  skip: number,
  limit: number,
  today: string
) => {
  const response = await axios.get('/data/mockData.json');
  const begin = skip * limit;
  const end = skip * limit + limit || undefined;

  const filterd = response.data.filter((item: DataType) =>
    item.transaction_time.includes(today)
  );

  return filterd.slice(begin, end);
};

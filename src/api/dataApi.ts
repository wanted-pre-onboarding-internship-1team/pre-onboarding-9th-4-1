import { DataType } from '../types/data.types';
import axios from 'axios';

export const getTodayDataApi = async (start: number, e: number, s: string) => {
  const response = await axios.get('/data/mockData.json');
  return response.data;
};

export const getDataApi = async (): Promise<DataType[]> => {
  const response = await axios.get('/data/mockData.json');
  return response.data;
};

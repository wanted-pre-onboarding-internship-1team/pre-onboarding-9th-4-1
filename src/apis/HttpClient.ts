import { IResponse } from '../types/IResponse';
import { BASE_URL } from './config';
import axios, { AxiosResponse } from 'axios';

export const httpClient = async (): Promise<AxiosResponse<IResponse[]>> => {
  return await axios.get(BASE_URL);
};

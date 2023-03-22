import { DataType } from '../types/data.types';
import { getTodayDataApi } from './../api/dataApi';

const getFilteredData = async (filterField: string, filterOrder: string) => {
  const orderData = await getTodayDataApi();

  const filteredData = orderData.filter((data: DataType) => {
    return data[filterField] + '' === filterOrder;
  });

  return filteredData;
};

export default getFilteredData;

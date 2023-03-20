import axios from 'axios';

interface DataType {
  currency: string;
  customer_id: number;
  customer_name: string;
  id: number;
  status: boolean;
  transaction_time: string;
}

export async function GetData(
  pageNumber = 1,
  pageSize = 50
): Promise<DataType[]> {
  const { data } = await axios.get<DataType[]>('/data/mockData.json');
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;

  return data.slice(startIndex, endIndex);
}

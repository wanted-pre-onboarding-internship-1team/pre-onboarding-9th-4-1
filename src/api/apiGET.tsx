import axios from 'axios';

interface DataType {
  currency: string;
  customer_id: number;
  customer_name: string;
  id: number;
  status: boolean;
  transaction_time: string;
}
interface ApiResponse {
  data: DataType[];
  total_pages: number;
}

export async function GetData(
  pageNumber = 1,
  pageSize = 50
): Promise<ApiResponse> {
  const { data } = await axios.get<DataType[]>('/data/mockData.json');
  const filterData = data.filter(
    data => data.transaction_time.slice(0, 10) === '2023-03-08'
  );
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = pageNumber * pageSize;

  const total_pages = Math.ceil(filterData.length / pageSize);

  return {
    data: filterData.slice(startIndex, endIndex),
    total_pages,
  };
}

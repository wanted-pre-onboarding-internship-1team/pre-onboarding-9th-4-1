import { MockResponse } from '../api/types/mock';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const TODAY = '2023-03-08';

async function fetchMock(page: number) {
  const { data } = await axios.get<MockResponse[]>('/data/mockData.json');
  const filteredData = data
    .filter(item => item.transaction_time.split(' ')[0] === TODAY)
    .sort((a, b) => a.id - b.id);

  return filteredData;
}

export function useMockList() {
  //const use
  //const { data } = useQuery(['mockList'], ()=> fetchMock(), { suspense: true });

  return 123; //data;
}

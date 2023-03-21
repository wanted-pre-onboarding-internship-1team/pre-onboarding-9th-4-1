import { MockResponse } from '../api/types/mock';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const TODAY = '2023-03-08';

async function fetchMock() {
  const { data } = await axios.get<MockResponse[]>('/data/mockData.json');

  return data;
}

export function useMockList() {
  const [s, ss] = useSearchParams();
  console.log(s.get(test));
  const { data } = useQuery(['mockList'], () => fetchMock(), {
    suspense: true,
  });

  return 123; //data;
}

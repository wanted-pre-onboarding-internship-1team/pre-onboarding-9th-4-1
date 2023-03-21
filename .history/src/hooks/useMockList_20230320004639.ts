import { MockResponse } from '../api/types/mock';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function useMockList() {
  const { data } = useQuery(['mockList'], () =>
    axios.get<MockResponse>('/data/mockData.json')
  );

  return 123;
}

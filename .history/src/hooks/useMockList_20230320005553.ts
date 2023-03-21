import { MockResponse } from '../api/types/mock';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

async function fetchMock() {
  const data = axios.get<MockResponse>('/data/mockData.json');
  console.log(data);
}

export default function useMockList() {
  // const { data } = useQuery(['mockList'], () =>
  //   axios.get<MockResponse>('/data/mockData.json')
  // );
  // console.log(data);
  fetchMock();
  return 123;
}

import { MockResponse } from '../api/types/mock';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const TODAY = '2023-03-08';

async function fetchMock() {
  const { data } = await axios.get<MockResponse>('/data/mockData.json');

  return data;
}

export default function useMockList() {
  // const { data } = useQuery(['mockList'], () =>
  //   axios.get<MockResponse>('/data/mockData.json')
  // );
  // console.log(data);
  fetchMock();
  return 123;
}

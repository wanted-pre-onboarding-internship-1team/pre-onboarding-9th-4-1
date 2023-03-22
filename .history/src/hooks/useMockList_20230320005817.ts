import { MockResponse } from '../api/types/mock';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const TODAY = '2023-03-08';

async function fetchMock() {
  const { data } = await axios.get<MockResponse[]>('/data/mockData.json');
  const filteredData = data.filter(
    item => item.transaction_time.split(' ')[0] === TODAY
  );
  console.log(filteredData);
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
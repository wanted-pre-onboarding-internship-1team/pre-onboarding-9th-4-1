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
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page'));
  console.log(page);
  const { data: originList } = useQuery(['mockList'], () => fetchMock(), {
    suspense: true,
  });

  let filteredList = null;
  if (page)
    filteredList = originList?.slice((page - 1) * 50, (page - 1) * 50 + 50);
  console.log(filteredList);
  return filteredList || originList; //data;
}

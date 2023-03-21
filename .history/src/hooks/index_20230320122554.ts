import { MockResponse } from '../api/types/mock';
import { useQuery, useQueryClient } from '@tanstack/react-query';
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
  const { data: originList } = useQuery(['mockList'], fetchMock, {
    suspense: true,
  });

  let pagedList = originList
    ?.filter(item => item.transaction_time.split(' ')[0] === TODAY)
    .sort((a, b) => a.id - b.id)
    .slice(0, 50);

  if (page)
    pagedList = originList
      ?.filter(item => item.transaction_time.split(' ')[0] === TODAY)
      .sort((a, b) => a.id - b.id)
      .slice((page - 1) * 50, (page - 1) * 50 + 50);

  return pagedList!; //data;
}

const PAGES_COUNT_PER_GROUP = 5;
const COUNT_PER_PAGE = 50;

export function usePagenation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const data = queryClient
    .getQueryData<MockResponse[]>(['mockList'])!
    .filter(item => item.transaction_time.split(' ')[0] === TODAY);

  const currentPage = Number(searchParams.get('page'));
  const totalPageCount = Math.ceil(data.length / COUNT_PER_PAGE);
  const totalGroupCount = Math.ceil(totalPageCount / PAGES_COUNT_PER_GROUP);
  const currentGroup = Math.ceil(currentPage / PAGES_COUNT_PER_GROUP);
  const startPage = (currentGroup - 1) * PAGES_COUNT_PER_GROUP + 1;
  const endPage = Math.min(
    startPage + PAGES_COUNT_PER_GROUP - 1,
    totalPageCount
  );

  const onClickPage = (e: React.MouseEvent) => {};
  return { totalGroupCount, startPage, endPage };
}

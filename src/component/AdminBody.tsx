import { getTodayDataApi } from '../api/dataApi';
import { COMMON_COLOR } from './../constants/colors';
import { TODAY } from './../constants/orders';
import useAdminParams from './../hooks/useAdminParams';
import Table from './common/Table';
import Tag from './common/Tag';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';
import { useEffect, useMemo } from 'react';
import styled from 'styled-components';

type Item = {
  name: string;
  price: number;
  quantity: number;
};

const AdminBody = () => {
  const { currentParams } = useAdminParams('page');
  const queryClient = useQueryClient();

  const MAX_PAGE = 10;
  const currentPage = Number(currentParams);

  const { isLoading, error, data } = useQuery(
    ['data', currentPage],
    () => {
      console.log('fetching...👻');
      return getTodayDataApi(currentPage, 50, TODAY);
    },
    {
      staleTime: 5000,
      refetchInterval: 5000,
    }
  );

  const columnsMemo = useMemo<ColumnDef<Item>[]>(() => {
    if (!data) return [];

    return Object.keys(data[0]).map(key => ({
      header: key,
      accessorKey: key,
      cell: info => {
        const value = info.getValue() as string | number;
        return key === 'status' ? <Tag value={value} /> : value;
      },
    }));
  }, [data]);

  const dataMemo = useMemo(() => data, [data]);

  useEffect(() => {
    if (currentPage <= MAX_PAGE - 2) {
      const nextPage = currentPage + 1;

      queryClient.prefetchQuery(['data', nextPage], () =>
        getTodayDataApi(nextPage, 50, TODAY)
      );
    }
  }, [currentPage, queryClient]);

  if (isLoading) return <AdminBodyWrapper>로딩 중입니다⏳</AdminBodyWrapper>;

  if (error) return <AdminBodyWrapper>오류가 발생했습니다🚨</AdminBodyWrapper>;

  return (
    <AdminBodyWrapper>
      <Table data={dataMemo} columns={columnsMemo} />
    </AdminBodyWrapper>
  );
};

const AdminBodyWrapper = styled.div`
  flex: 1 1 auto;
  margin: 0 -32px;
  border-top: 1px solid ${COMMON_COLOR.border};
  border-bottom: 1px solid ${COMMON_COLOR.border};
  overflow-y: auto;
`;

export default AdminBody;

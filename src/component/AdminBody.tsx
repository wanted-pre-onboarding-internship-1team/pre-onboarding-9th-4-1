import { TODAY } from '../constants/orders';
import usePage from '../hooks/usePage';
import { usePageDataProcessor } from '../hooks/usePageDataProcessor';
import { COMMON_COLOR } from './../constants/colors';
import useTableData from './../hooks/useTableData';
import useTableQuery from './../hooks/useTableQuery';
import Table from './common/Table';
import styled from 'styled-components';

const AdminBody = () => {
  const { response, error, isLoading } = useTableQuery();
  const [pageDatas, maxPage] = usePageDataProcessor(response, TODAY);
  const { columns, data } = useTableData(pageDatas[0]);

  if (isLoading) return <AdminBodyWrapper>로딩 중입니다⏳</AdminBodyWrapper>;

  if (error) return <AdminBodyWrapper>오류가 발생했습니다🚨</AdminBodyWrapper>;

  return (
    <AdminBodyWrapper>
      <Table data={data} columns={columns} />
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

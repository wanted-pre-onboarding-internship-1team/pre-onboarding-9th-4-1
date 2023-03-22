import { useAdminContext } from '../context/AdminContext';
import { COMMON_COLOR } from './../constants/colors';
import useTableData from './../hooks/useTableData';
import Table from './common/Table';
import styled from 'styled-components';

const AdminBody = () => {
  const { status, data: pageDatas, page } = useAdminContext();
  const { error, isLoading } = status;
  const { currentPage } = page;

  const { columns, data } = useTableData(pageDatas[currentPage]);
  const handleChange = () => {
    const a = 1;
  };

  if (isLoading) return <AdminBodyWrapper>로딩 중입니다⏳</AdminBodyWrapper>;

  if (error) return <AdminBodyWrapper>오류가 발생했습니다🚨</AdminBodyWrapper>;

  return (
    <AdminBodyWrapper>
      <input />
      <Table data={data} columns={columns} onHeaderClick={handleChange} />
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

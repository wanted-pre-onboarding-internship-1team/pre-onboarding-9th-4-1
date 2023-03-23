import useSearchQuery from '../hooks/useSearchQuery';
import { COMMON_COLOR } from './../constants/colors';
import useTableData from './../hooks/useTableData';
import useTableQuery from './../hooks/useTableQuery';
import Table from './common/Table';
import styled from 'styled-components';

const AdminBody = () => {
  const { getData } = useTableQuery();
  const { getData: searchData } = useSearchQuery();

  const { columns, data } = useTableData(
    searchData && searchData.length > 0 ? searchData : getData
  );

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

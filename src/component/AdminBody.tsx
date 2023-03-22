import { MAX_NUM } from '../constants/orders';
import { COMMON_COLOR } from './../constants/colors';
import useTableData from './../hooks/useTableData';
import useTableQuery from './../hooks/useTableQuery';
import Table from './table/Table';
import styled from 'styled-components';

const AdminBody = () => {
  const { getData } = useTableQuery();
  const { columns, data } = useTableData(getData);

  return (
    <AdminBodyWrapper>
      <Table data={data} columns={columns} pageSize={MAX_NUM} />
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

import { COMMON_COLOR } from './../constants/colors';
import Table from './common/Table';
import styled from 'styled-components';

const AdminBody = () => {
  return <AdminBodyWrapper>table</AdminBodyWrapper>;
};

const AdminBodyWrapper = styled.div`
  flex: 1 1 auto;
  margin: 0 -32px;
  border-top: 1px solid ${COMMON_COLOR.border};
  border-bottom: 1px solid ${COMMON_COLOR.border};
  overflow-y: auto;
`;

export default AdminBody;

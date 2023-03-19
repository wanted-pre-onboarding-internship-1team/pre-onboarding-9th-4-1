import { COMMON_COLOR } from './../constants/colors';
import Pagination from './common/Pagination';
import styled from 'styled-components';

const AdminFooter = () => {
  const MAX_PAGE = 10;
  const currentPage = 1;

  return (
    <AdminFooterWrapper>
      <Pagination maxPage={MAX_PAGE} />
      <Text>
        {currentPage + 1} of {MAX_PAGE} pages
      </Text>
    </AdminFooterWrapper>
  );
};

const AdminFooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  margin-top: 24px;
  flex: 0 0 auto;
`;

const Text = styled.footer`
  margin-left: auto;
  color: ${COMMON_COLOR.textSub};
  font-size: 1.2rem;
`;

export default AdminFooter;

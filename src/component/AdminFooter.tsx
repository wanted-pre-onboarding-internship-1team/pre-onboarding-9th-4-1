import usePage from '../hooks/usePage';
import { COMMON_COLOR } from './../constants/colors';
import Pagination from './common/Pagination';
import styled from 'styled-components';

const AdminFooter = () => {
  const { currentPage, maxPage } = usePage();

  return (
    <AdminFooterWrapper>
      <Pagination maxPage={maxPage} />
      <Text>
        {currentPage + 1} of {maxPage} pages
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

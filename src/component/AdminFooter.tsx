import { MAX_NUM } from '../constants/orders';
import { useSearchContext } from '../context/SearchContext';
import usePage from '../hooks/usePage';
import { COMMON_COLOR } from './../constants/colors';
import Pagination from './common/Pagination';
import styled from 'styled-components';

const AdminFooter = () => {
  const { currentPage, maxPage, length } = usePage();
  const { keyword } = useSearchContext();

  const from = currentPage * MAX_NUM + 1;
  const to = from + MAX_NUM < length ? from + MAX_NUM : length;

  if (keyword !== '') return null;

  return (
    <AdminFooterWrapper>
      <Pagination maxPage={maxPage} />
      <Text>
        {from} - {to} of {length} result
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

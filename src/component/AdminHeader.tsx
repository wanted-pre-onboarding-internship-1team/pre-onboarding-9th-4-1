import { useSearchContext } from '../context/SearchContext';
import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';

const AdminHeader = () => {
  const { handleChange, keyword } = useSearchContext();
  return (
    <AdminHeaderWrapper>
      <Title>Today's Orders</Title>
      <HeaderRight>
        <InputBar
          data-testid='admin-search-bar'
          value={keyword}
          onChange={handleChange}
        />
        <AiOutlineSearch className='icon' />
      </HeaderRight>
    </AdminHeaderWrapper>
  );
};

const AdminHeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  flex: 0 0 auto;
`;

const Title = styled.h2`
  margin-right: auto;
  font-size: 2rem;
  font-weight: 700;
`;

//마진라이트 주는 이유가 뭐지?

const HeaderRight = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 2rem;
  overflow: hidden;
  padding: 0.4rem 0.8rem;

  .icon {
    font-size: 2rem;
  }
`;

const InputBar = styled.input`
  width: 100%;
  outline: none;
  border: none;
`;

export default AdminHeader;

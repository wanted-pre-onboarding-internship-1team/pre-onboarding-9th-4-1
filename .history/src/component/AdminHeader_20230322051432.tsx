import { AiOutlineSearch } from 'react-icons/ai';
import styled from 'styled-components';

const AdminHeader = () => {
  return (
    <AdminHeaderWrapper>
      <Title>Today's Orders</Title>
      <HeaderRight>
        <InputBar />
        <AiOutlineSearch />
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
  .icon {
    font-size: 2rem;
  }
`;

const InputBar = styled.input`
  width: 100%;
`;

export default AdminHeader;

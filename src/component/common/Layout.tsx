import { COMMON_COLOR } from './../../constants/colors';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  min-height: 100vh;
  padding: 0 40px;
  background-color: ${COMMON_COLOR.background};
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  max-width: 1280px;
  height: calc(100vh - 200px);
  padding: 24px 32px;
  border: 1px solid ${COMMON_COLOR.border};
  border-radius: 8px;
  background-color: ${COMMON_COLOR.backgroundSection};
  overflow: hidden;
`;

export default Layout;

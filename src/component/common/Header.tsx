import { COMMON_COLOR } from './../../constants/colors';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <Tilte>Switchwon</Tilte>
      <Text>2023-03-08, 수요일</Text>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 1280px;
`;

const Tilte = styled.h1`
  text-align: left;
  font-size: 3rem;
  font-weight: 700;
`;

const Text = styled.p`
  margin-top: 8px;
  font-size: 1.4rem;
  color: ${COMMON_COLOR.textSub};
`;

export default Header;

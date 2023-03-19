// import styled, { keyframes } from 'styled-components';
import MoonLoader from 'react-spinners/MoonLoader';
import styled from 'styled-components';

export default function Spinner() {
  return (
    <LoaderWrapper>
      <MoonLoader color='#244ad0' size={100} />
    </LoaderWrapper>
  );
}
const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

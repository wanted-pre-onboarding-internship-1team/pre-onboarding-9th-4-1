import { COMMON_COLOR } from '../../constants/colors';
import styled from 'styled-components';

interface LoadingType {
  text: string;
}
export default function Loading({ text }: LoadingType) {
  return <AdminBodyWrapper>{text}</AdminBodyWrapper>;
}

const AdminBodyWrapper = styled.div`
  flex: 1 1 auto;
  margin: 0 -32px;
  border-top: 1px solid ${COMMON_COLOR.border};
  border-bottom: 1px solid ${COMMON_COLOR.border};
  overflow-y: auto;
`;

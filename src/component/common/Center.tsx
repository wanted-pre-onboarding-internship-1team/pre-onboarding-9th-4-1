import { ReactNode } from 'react';
import styled from 'styled-components';

export default function Center({
  children,
  height,
}: {
  children: ReactNode;
  height: string;
}) {
  const CenterDiv = styled.div`
    width: 100%;
    height: ${height};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  return <CenterDiv>{children}</CenterDiv>;
}

import { ReactNode } from 'react';
import styled from 'styled-components';

export default function TableRow({
  children,
  color = '',
}: {
  children: ReactNode;
  color?: string;
}) {
  const TR = styled.tr`
    background-color: ${color};
  `;
  return <TR>{children}</TR>;
}

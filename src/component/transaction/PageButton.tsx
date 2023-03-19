import usePaging from '../../hooks/usePaging';
import styled from 'styled-components';

export default function PageButton({ idx }: { idx: number }) {
  const handlePage = usePaging();
  return (
    <PageNumberButton onClick={() => handlePage(idx)}>
      {idx + 1}
    </PageNumberButton>
  );
}

const PageNumberButton = styled.button``;

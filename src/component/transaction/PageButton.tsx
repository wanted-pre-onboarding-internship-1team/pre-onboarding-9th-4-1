import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

export default function PageButton({ idx }: { idx: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handlePage = (idx: number) => {
    searchParams.set('page', idx.toString());
    setSearchParams(searchParams);
  };
  return (
    <PageNumberButton onClick={() => handlePage(idx)} key={idx}>
      {idx + 1}
    </PageNumberButton>
  );
}

const PageNumberButton = styled.button``;

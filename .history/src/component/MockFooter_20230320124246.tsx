import { usePagenation } from '../hooks';
import styled from 'styled-components';

export default function MockFooter() {
  const { onClickPage, pageList } = usePagenation();
  console.log(pageList);

  return (
    <Container>
      <List>
        {pageList.map(page => (
          <Item key={page} onClick={onClickPage}>
            {page}
          </Item>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.4rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  background: white;
  border-radius: 1rem;
  padding: 0 0.4rem;
`;

const Item = styled.li`
  padding: 0.4rem;
`;

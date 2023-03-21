import { usePagenation } from '../hooks';
import styled from 'styled-components';

export default function MockFooter() {
  const {} = usePagenation();

  return (
    <Container>
      <List>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
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
`;

const Item = styled.li`
  padding: 0.4rem;
`;

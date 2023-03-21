import styled from 'styled-components';

export default function MockFooter() {
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
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
`;

const Item = styled.li``;

import styled from 'styled-components';

export default function MockFooter() {
  return (
    <Container>
      <Item>1</Item>
    </Container>
  );
}

const Container = styled.ul`
  display: flex;
  justify-content: center;
  background: black;
`;

const Item = styled.li``;

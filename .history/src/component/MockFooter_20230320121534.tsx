import styled from 'styled-components';

export default function MockFooter() {
  return (
    <Container>
      <Item>1</Item>
    </Container>
  );
}

const Container = styled.ul`
  margin: 0 auto;
  display: flex;
`;

const Item = styled.li``;
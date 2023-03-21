import { usePagenation } from '../hooks';
import styled from 'styled-components';

export default function MockFooter() {
  const { onClickPage, pageList, onClickNextGroup, onClickPrevGroup } =
    usePagenation();
  console.log(pageList);

  return (
    <Container>
      <List>
        <Item>&lt;</Item>
        {pageList.map(page => (
          <Item key={page} onClick={() => onClickPage(page)}>
            {page}
          </Item>
        ))}
        <Item onClick={onClickNextGroup}>&gt;</Item>
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
  cursor: pointer;
  display: flex;
  justify-content: center;
  background: white;
  border-radius: 1rem;
  padding: 0 0.4rem;
`;

const Item = styled.li`
  padding: 0.4rem;
`;

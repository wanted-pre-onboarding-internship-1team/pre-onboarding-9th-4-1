import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ListName = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-left: 5px;
`;

export const ContentContainer = styled.div`
  width: 900px;
  display: flex;
  margin-left: 86px;
  /* background-color: black; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  padding: 3px;
  .id {
    width: 30px;
    text-align: center;
  }
  .name {
    width: 150px;
    margin-left: 92px;
    text-align: center;
  }
  .price {
    width: 70px;
    margin-left: 78px;
    text-align: center;
  }
  .status {
    width: 70px;
    text-align: center;
    margin-left: 119px;
  }
  .cal {
    margin-left: 92px;
  }
`;

export const Id = styled.div`
  display: flex;
  flex-direction: column;
`;

import {
  Container,
  Content,
  ContentContainer,
  ListName,
} from './DataList.styled';

interface DataType {
  currency: string;
  customer_id: number;
  customer_name: string;
  id: number;
  status: boolean;
  transaction_time: string;
}

interface DataListProps {
  data: DataType[];
}

const Today = '2023-03-08';

export default function DataList({ data }: DataListProps) {
  return (
    <Container>
      <ListName>
        <div>ID</div>
        <div>이름</div>
        <div>가격</div>
        <div>상태</div>
        <div>거래시간</div>
      </ListName>

      {data?.map((data: DataType) => {
        if (data.transaction_time.slice(0, 10) === Today) {
          return (
            <div key={data.id}>
              <ContentContainer>
                <Content>
                  <div className='id'>{data.customer_id}</div>
                  <div className='name'>{data.customer_name}</div>
                  <div className='price'>{data.currency}</div>
                  <div className='status'>{String(data.status)}</div>
                  <div className='cal'>{data.transaction_time}</div>
                </Content>
              </ContentContainer>
            </div>
          );
        } else return null;
      })}
    </Container>
  );
}

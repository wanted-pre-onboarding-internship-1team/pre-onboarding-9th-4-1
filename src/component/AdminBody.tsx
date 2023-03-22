import { COMMON_COLOR } from './../constants/colors';
import useTableData from './../hooks/useTableData';
import useTableQuery from './../hooks/useTableQuery';
import Table from './common/Table';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface ColumnDef<T extends object> {
  header: string;
  cell: (data: T) => JSX.Element | null;
  sortBy?: keyof T;
  sortDir?: 'asc' | 'desc';
}

const AdminBody = () => {
  const { getData, error, isLoading } = useTableQuery();
  const { columns, data: initialData } = useTableData(getData);
  const [data, setData] = useState(initialData);
  const [inputName, setInputName] = useState('');
  const [sortState, setSortState] = useState({
    state: false,
    id: false,
    time: false,
  });

  useEffect(() => {
    if (inputName === '') {
      setData(initialData);
    } else {
      setData(
        initialData.filter(item =>
          item.customer_name.toLowerCase().includes(inputName.toLowerCase())
        )
      );
    }
  }, [inputName, initialData]);

  if (isLoading) return <AdminBodyWrapper>로딩 중입니다⏳</AdminBodyWrapper>;

  if (error) return <AdminBodyWrapper>오류가 발생했습니다🚨</AdminBodyWrapper>;

  const onchangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputName(event.target.value);
  };

  const sortData = (state: string) => {
    if (state === '주문번호' && sortState.id === false) {
      setSortState({ ...sortState, id: !sortState.id });
      setData([...data].sort((a, b) => b.customer_id - a.customer_id));
    } else if (state === '주문번호' && sortState.id === true) {
      setSortState({ ...sortState, id: !sortState.id });
      setData([...data].sort((a, b) => a.id - b.id));
    } else if (state === '거래시간' && sortState.time === false) {
      setSortState({ ...sortState, time: !sortState.time });
      setData(
        [...data].sort((a, b) => {
          const dateA = new Date(a.transaction_time).getTime();
          const dateB = new Date(b.transaction_time).getTime();
          return dateB - dateA;
        })
      );
    } else if (state === '거래시간' && sortState.time === true) {
      setSortState({ ...sortState, time: !sortState.time });
      setData([...data].sort((a, b) => a.id - b.id));
    }
  };

  const onSort = () => {
    setSortState({ ...sortState, state: !sortState.state });
  };

  return (
    <>
      {data && initialData ? (
        <>
          <SortBox sortstate={sortState.state}>
            <div className='sort' onClick={onSort}>
              정렬
            </div>
            {sortState.state === true ? (
              <>
                <SortContent
                  sortstate={sortState.id}
                  onClick={() => sortData('주문번호')}>
                  주문번호
                </SortContent>
                <SortContent
                  sortstate={sortState.time}
                  onClick={() => sortData('거래시간')}>
                  거래시간
                </SortContent>
              </>
            ) : null}
          </SortBox>
          <InputBox>
            <div className='text'>검색 : </div>
            <input onChange={onchangeName} />
          </InputBox>
          <AdminBodyWrapper>
            <Table data={data} columns={columns} />
          </AdminBodyWrapper>
        </>
      ) : null}
    </>
  );
};

export default AdminBody;

const AdminBodyWrapper = styled.div`
  flex: 1 1 auto;
  margin: 0 -32px;
  border-top: 1px solid ${COMMON_COLOR.border};
  border-bottom: 1px solid ${COMMON_COLOR.border};
  overflow-y: auto;
`;

const SortBox = styled.div<{ sortstate: boolean }>`
  display: flex;
  cursor: pointer;
  .sort {
    font-size: 20px;
    color: ${({ sortstate }) => (sortstate === false ? 'black' : 'blue')};
  }
`;

const SortContent = styled.div<{ sortstate: boolean }>`
  margin-left: 20px;
  font-size: 20px;
  color: ${({ sortstate }) => (sortstate === false ? 'black' : 'blue')};
  cursor: pointer;
`;

const InputBox = styled.div`
  margin-top: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  .text {
    font-size: 20px;
    margin-right: 5px;
  }
  .input {
  }
`;

import { Header } from '@tanstack/react-table';
import { BiSearchAlt } from 'react-icons/bi';
import styled from 'styled-components';

export default function TableHeaderSort<T extends object>({
  header,
}: {
  header: Header<T, unknown>;
}) {
  const handleFilterStatus = (header: any) => {
    switch (header.column.getFilterValue()) {
      case true:
        return header.column.setFilterValue(false);
      case false:
        return header.column.setFilterValue(undefined);
      case undefined:
        return header.column.setFilterValue(true);
    }
  };
  const handleSearchName =
    (header: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
      header.column.setFilterValue(e.target.value);
    };

  return (
    <div>
      {header.column.getCanFilter() ? (
        header.id === 'status' ? (
          <FilterBtn
            onClick={() => handleFilterStatus(header)}
            tagValue={header.column.getFilterValue() as undefined | boolean}
          />
        ) : header.id === 'customer_name' ? (
          <FilterInput>
            <InputBar
              type='text'
              placeholder='고객 이름 검색'
              onChange={handleSearchName(header)}
            />
            <BiSearchAlt size='17' />
          </FilterInput>
        ) : null
      ) : null}
    </div>
  );
}
const FilterInput = styled.div`
  width: 62%;
  display: flex;
  margin: 0 auto;
  border: 1px solid gray;
  border-radius: 2rem;
  padding: 0.3rem 0.7rem;
`;
const InputBar = styled.input`
  width: 100%;
  outline: none;
  border: none;
`;
const FilterBtn = styled.button<{ tagValue: undefined | boolean }>`
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
  ::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    ${({ tagValue }) => {
      if (tagValue === undefined) return '    border: 1px solid gray;';
      return tagValue
        ? 'background-color: #42a6ce'
        : 'background-color: #e2687c';
    }};
  }
`;

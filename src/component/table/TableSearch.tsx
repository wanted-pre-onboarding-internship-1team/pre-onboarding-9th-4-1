import { COMMON_COLOR } from '../../constants/colors';
import { TableContext } from './../../contexts/TableContext';
import usePage from './../../hooks/usePage';
import { useContext, ChangeEvent } from 'react';
import { FiSearch } from 'react-icons/fi';
import styled from 'styled-components';

const TableSearch = () => {
  const instanceRef = useContext(TableContext);
  const { setPage } = usePage();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value = '' } = e.target;

    if (value.length < 2) {
      setPage(0);
    }

    const targetColumn =
      instanceRef.current.getHeaderGroups()[0].headers[4].column;
    targetColumn.setFilterValue(value);
  };

  return (
    <SearchbarWrapper>
      <Label htmlFor='searchBar'>
        <FiSearch size={18} />
      </Label>
      <Input
        onChange={onChangeHandler}
        id='searchBar'
        type='text'
        placeholder='고객이름 검색'
      />
    </SearchbarWrapper>
  );
};

const SearchbarWrapper = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 8px;
  transform: translateY(-50%);
`;

const Input = styled.input`
  max-width: 180px;
  height: 32px;
  padding: 0 8px 0 32px;
  border: 1px solid ${COMMON_COLOR.border};
  border-radius: 8px;
  color: ${COMMON_COLOR.textMain};
  font-size: 1.4rem;
  background-color: ${COMMON_COLOR.background};

  ::placeholder {
    color: ${COMMON_COLOR.textSub};
  }
`;

export default TableSearch;

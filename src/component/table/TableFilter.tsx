import { COMMON_COLOR } from './../../constants/colors';
import useAdminParams from './../../hooks/useAdminParams';
import { Column } from '@tanstack/react-table';
import { useMemo } from 'react';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

const TableFilter = ({ column }: { column: Column<any, unknown> }) => {
  const sortedUniqueValues = useMemo(() => {
    return Array.from(column.getFacetedUniqueValues().keys());
  }, [column.getFacetedUniqueValues()]);

  const { setParams } = useAdminParams('filter', 'true');

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (!value.length) return;
    column.setFilterValue(JSON.parse(value));
    setParams(JSON.parse(value));
  };

  return (
    <Select name={column.id + 'List'} onChange={onChangeHandler}>
      <option value=''>선택</option>
      {sortedUniqueValues.map((value: string, idx: number) => (
        <option value={value} key={idx}>
          {String(value)}
        </option>
      ))}
    </Select>
  );
};

const Select = styled.select`
  height: 24px;
  margin: 0 2px;
  border: none;
  border: 1px solid ${COMMON_COLOR.border};
  border-radius: 8px;
  font-size: 1.4rem;
`;

export default TableFilter;

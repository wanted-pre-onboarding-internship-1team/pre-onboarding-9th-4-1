import { COMMON_COLOR } from './../../constants/colors';
import styled from 'styled-components';

type TagProps = {
  value: string | number;
};

const Tag = ({ value }: TagProps) => {
  const tagValue = value.toString();

  return <TagWrapper tagValue={tagValue}>{tagValue}</TagWrapper>;
};

const TagWrapper = styled.span<{ tagValue: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 28px;
  padding: 0 8px;
  border: 1px solid ${COMMON_COLOR.border};
  border-radius: 8px;
  font-size: 1.4rem;
  background-color: transparent;

  ::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    ${({ tagValue }) => {
      return tagValue === 'true'
        ? 'background-color: #42a6ce'
        : 'background-color: #e2687c';
    }};
  }
`;

export default Tag;

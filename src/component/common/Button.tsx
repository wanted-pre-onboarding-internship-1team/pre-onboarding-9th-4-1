import { COMMON_COLOR } from './../../constants/colors';
import { ReactNode, MouseEvent } from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  children?: ReactNode;
  styleType?: 'outline' | 'ghost';
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  onClick,
  styleType = 'outline',
  isSelected,
  isDisabled,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      styleType={styleType}
      isSelected={isSelected}
      disabled={isDisabled}
      onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

const STYLE = {
  outline: css`
    border: 1px solid ${COMMON_COLOR.border};
  `,
  ghost: css`
    border: none;
  `,
};

const ButtonWrapper = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 1.4rem;
  background-color: transparent;
  cursor: pointer;

  :hover {
    background-color: ${COMMON_COLOR.hover};
  }

  :active {
    background-color: ${COMMON_COLOR.active};
  }

  :disabled {
    cursor: default;
    background-color: transparent;
  }

  ${(props: ButtonProps) => props.styleType && STYLE[props.styleType]};
  ${(props: ButtonProps) =>
    props.isSelected && `background-color: ${COMMON_COLOR.active}`};
`;

export default Button;

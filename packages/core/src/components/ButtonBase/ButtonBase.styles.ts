import {css} from '@emotion/react';
import styled from '@emotion/styled';

interface ButtonBaseStyleProps {
  isFullWidth?: boolean;
}

export const ButtonBase = styled.button<ButtonBaseStyleProps>`
  display: inline-flex;
  align-items: center;
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }

  ${({isFullWidth}) =>
    isFullWidth &&
    css`
      width: 100%;
    `}
`;

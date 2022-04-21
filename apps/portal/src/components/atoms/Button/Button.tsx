import {css} from '@emotion/react';
import {ButtonBase} from '@monorepo/core';
import {COLOR_BG_CARD_4, COLOR_TEXT_1} from '@monorepo/token';
import React, {PropsWithChildren} from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ButtonProps {}

const Button = ({children}: PropsWithChildren<ButtonProps>) => {
  return (
    <ButtonBase
      css={css`
        padding: 10px;
        background-color: ${COLOR_BG_CARD_4};
        color: ${COLOR_TEXT_1};
      `}>
      {children}
    </ButtonBase>
  );
};

export default Button;

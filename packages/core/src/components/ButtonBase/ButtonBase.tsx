import React from 'react';

import * as S from './ButtonBase.styles';

export interface ButtonBaseProps extends Omit<React.ComponentPropsWithoutRef<'button'>, 'disabled'> {
  isFullWidth?: boolean;
  isDisabled?: boolean;
}

const ButtonBase = React.forwardRef<HTMLButtonElement, ButtonBaseProps>(({isFullWidth, isDisabled, ...props}, ref) => {
  return <S.ButtonBase ref={ref} disabled={isDisabled} isFullWidth={isFullWidth} {...props} />;
});

export default React.memo(ButtonBase);

ButtonBase.displayName = 'ButtonBase';

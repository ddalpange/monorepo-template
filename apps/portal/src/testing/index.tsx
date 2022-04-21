/* eslint-disable import/export */
// https://testing-library.com/docs/react-testing-library/setup#custom-render

import {render as _render, RenderOptions} from '@testing-library/react';
import {Providers} from 'join-react-context';
import React, {PropsWithChildren, ReactElement} from 'react';

interface CustomRenderProps extends Omit<RenderOptions, 'queries'> {
  withModal?: boolean;
}

const customRender = (
  ui: ReactElement,
  {
    withModal = false,

    ...renderOptions
  }: CustomRenderProps = {}
) => {
  const Wrapper = ({children}: PropsWithChildren<any>) => (
    <Providers providers={<></>}>
      {children}
      {withModal && <div id="__modal-root" />}
    </Providers>
  );

  const renderResult = _render(ui, {wrapper: Wrapper, ...renderOptions});

  return {
    ...renderResult,
    container: renderResult.container.firstChild,
  };
};

export * from '@testing-library/react';
export {customRender as render};

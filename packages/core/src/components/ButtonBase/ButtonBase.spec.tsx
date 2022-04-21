import {render, screen} from '@testing-library/react';
import React from 'react';

import ButtonBase from '.';

describe('<ButtonBase />', () => {
  it('should render correctly', () => {
    const {container} = render(<ButtonBase>Lorem Ipsum</ButtonBase>);
    expect(container).toMatchSnapshot();
  });

  it('should set width to `100%` when `fullWidth` prop is `true`', () => {
    render(<ButtonBase isFullWidth>Lorem Ipsum</ButtonBase>);

    expect(screen.getByRole('button')).toHaveStyle({
      width: '100%',
    });
  });

  it('should not set width to `100%` when `fullWidth` prop is `false`', () => {
    render(<ButtonBase>Lorem Ipsum</ButtonBase>);

    expect(screen.getByRole('button')).not.toHaveStyle({
      width: '100%',
    });
  });

  it.each<[boolean, boolean]>([
    [false, false],
    [true, true],
  ])('should `disabled` property to `%s` when `isDisabled` property is `%s`', (isDisabled, expected) => {
    const {container} = render(<ButtonBase isDisabled={isDisabled}>Lorem Ipsum</ButtonBase>);

    expect(container.firstChild).toHaveProperty('disabled', expected);
  });

  it('should accept type property', () => {
    render(<ButtonBase type="submit">Lorem Ipsum</ButtonBase>);
    const button = screen.queryByText('Lorem Ipsum');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'submit');
  });
});

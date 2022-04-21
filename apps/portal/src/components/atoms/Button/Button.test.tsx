import {render} from '@src/testing';

import Button from './Button';

describe('<Button />', () => {
  it('should render children correctly', () => {
    const {getByRole} = render(<Button>Lorem Ipsum</Button>);
    expect(getByRole('button', {name: 'Lorem Ipsum'})).toBeInTheDocument();
  });
});

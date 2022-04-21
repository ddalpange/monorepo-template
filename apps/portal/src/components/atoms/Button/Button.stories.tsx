import styled from '@emotion/styled';
import {Story} from '@storybook/react';

import Button, {ButtonProps} from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;

  > *:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Default: Story<ButtonProps> = args => (
  <Container>
    <Button {...args} />
  </Container>
);

Default.args = {
  children: 'Button',
};

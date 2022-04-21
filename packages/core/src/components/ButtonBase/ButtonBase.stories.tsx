import {Story} from '@storybook/react';
import React from 'react';

import ButtonBase from '.';

export const Template: Story = args => {
  return <ButtonBase {...args} />;
};

Template.args = {children: 'Lorem Ipsum'};

export default {
  title: 'Components/ButtonBase',
  component: ButtonBase,
};

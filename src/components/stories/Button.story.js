// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { RawButton as Button } from '../Button';

storiesOf(Button.name)
.add('props', () => (
  <Button />
));

// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button as RTButton } from 'react-toolbox/lib/button';

storiesOf(RTButton.name)
.add('props', () => (
  <RTButton label="button" raised primary />
));

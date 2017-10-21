// @flow

import React from 'react';
import type { Element } from 'react';
import { Button as RTButton } from 'react-toolbox/lib/button';
import RTButtonTheme from 'react-toolbox/lib/button/theme.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

/* eslint-disable react/require-default-props */
export type T = {
  accent?: boolean,
  className?: string,
  disabled?: boolean,
  flat?: boolean,
  floating?: boolean,
  href?: string,
  icon?: string | Element<*>,
  inverse?: boolean,
  label?: string,
  mini?: boolean,
  neutral?: boolean,
  onMouseLeave?: (e: Event) => void,
  onMouseUp?: (e: Event) => void,
  primary?: boolean,
  raised?: boolean,
  ripple?: boolean,
  theme?: {|
    accent?: string,
    button?: string,
    flat?: string,
    floating?: string,
    icon?: string,
    inverse?: string,
    mini?: string,
    neutral?: string,
    primary?: string,
    raised?: string,
    ripple?: string,
    toggle?: string,
  |},
  type?: string,
};
/* eslint-eable react/require-default-props */
type ButtonPropType = T & $Shape<T>; // eslint-disable-line no-undef

function Button(props: ButtonPropType) {
  return (
    <RTButton {...props} />
  );
}

export default withStyles(RTButtonTheme)(Button);
export { Button as RawButton };

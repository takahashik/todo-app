// @flow

import React from 'react';
import type { Element } from 'react';
import { Input as RTInput } from 'react-toolbox/lib/input';
import RTInputTheme from 'react-toolbox/lib/input/theme.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

/* eslint-disable react/require-default-props */
export type T = {
  className?: string,
  disabled?: boolean,
  error: String | Element<*>,
  floating?: boolean,
  hint?: string | Element<*>,
  icon?: string | Element<*>,
  inverse?: boolean,
  label?: string | Element<*>,
  maxLength?: number,
  mini?: boolean,
  multiline?: boolean,
  onBlur?: (e: Event) => void,
  onChange?: (e: Event) => void,
  onFocus?: (e: Event) => void,
  onKeyPress?: (e: Event) => void,
  rows?: number,
  required?: boolean,
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
  value?: any,
};
/* eslint-eable react/require-default-props */
type InputPropType = T & $Shape<T>; // eslint-disable-line no-undef

function Input(props: InputPropType) {
  return (
    <RTInput {...props} />
  );
}

export default withStyles(RTInputTheme)(Input);
export { Input as RawInput };

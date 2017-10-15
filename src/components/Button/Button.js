// @flow

import React from 'react';
import { Button as RTButton } from 'react-toolbox/lib/button';
import RTButtonTheme from 'react-toolbox/lib/button/theme.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

/* eslint-disable react/require-default-props */
export type ButtonPropType = {|
  accent?: boolean,
  className?: String,
  disabled?: boolean,
  flat?: boolean,
  floating?: boolean,
  href?: string,
  icon?: string | React.Element<any>,
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
  type: string,
|};
/* eslint-eable react/require-default-props */

function Button(props: ButtonPropType) {
  return (
    <RTButton {...props} />
  );
}

export default withStyles(RTButtonTheme)(Button);
export { Button as RawButton };

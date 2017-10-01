import React from 'react';
import { Button as RTButton } from 'react-toolbox/lib/button';
import RTButtonTheme from 'react-toolbox/lib/button/theme.css';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

function Button() {
  return (
    <RTButton label="button" raised primary />
  );
}

// export default Button;
export default withStyles(RTButtonTheme)(Button);
export { Button as RawButton };

// @flow
/* eslint-env mocha */

import React from 'react';
import assert from 'power-assert';
import { shallow } from 'enzyme';
import RTButton from 'react-toolbox/lib/button';
import { RawButton as Button } from './Button';

describe('Button', () => {
  it('has RTButtonProps', () => {
    const props = {
      accent: true,
      className: 'className',
      disabled: true,
      flat: false,
      floating: false,
      href: 'href',
      icon: 'icon',
      inverse: false,
      label: 'label',
      mini: false,
      neutral: false,
      onMouseLeave: (e: Event) => {}, // eslint-disable-line no-unused-vars
      onMouseUp: (e: Event) => {}, // eslint-disable-line no-unused-vars
      primary: true,
      raised: true,
      ripple: true,
      theme: {
        accent: 'accent',
        button: 'button',
        flat: 'flat',
        floating: 'floating',
        icon: 'icon',
        inverse: 'inverse',
        mini: 'mini',
        neutral: 'neutral',
        primary: 'primary',
        raised: 'raised',
        ripple: 'ripple',
        toggle: 'toggle',
      },
      type: 'type',
    };
    const wrapperButton = shallow(<Button {...props} />).find(RTButton);
    assert(wrapperButton.length === 1);
    Object.keys(props).forEach((key) => {
      assert(wrapperButton.prop(key) === props[key]);
    });
  });
});

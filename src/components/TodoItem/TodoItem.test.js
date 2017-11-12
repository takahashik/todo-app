// @flow
/* eslint-env mocha */

import React from 'react';
import assert from 'power-assert';
import { shallow } from 'enzyme';
import { RawTodoItem as TodoItem } from './TodoItem';
import Button from '../Button';

describe('TodoItem', () => {
  it('has label', () => {
    const props = {
      label: 'label',
    };
    const wrapper = shallow(<TodoItem {...props} />);
    assert(wrapper.find('li').children().equals(props.label));
  });
  it('has isDone', () => {
    const props = {
      label: 'label',
    };
    const wrapperTodo = shallow(<TodoItem {...props} />);
    assert(wrapperTodo.find(Button).prop('label') === 'done');
    const wrapperDone = shallow(<TodoItem {...props} isDone />);
    assert(wrapperDone.find(Button).prop('label') === 'resume');
  });
  it('has theme', () => {
    const props = {
      label: 'label',
      theme: {
        wrapper: 'wrapper',
        todo: 'todo',
      },
    };
    const wrapper = shallow(<TodoItem {...props} />);
    assert(wrapper.find('div').prop('className') === 'wrapper');
    assert(wrapper.find('li').prop('className') === 'todo');
  });
  it('has Button props', () => {
    const props = {
      label: 'label',
      buttonProps: {
        label: 'label',
        flat: true,
      },
    };
    const wrapperButton = shallow(<TodoItem {...props} />).find(Button);
    Object.keys(props.buttonProps).forEach((key) => {
      assert(wrapperButton.prop(key) === props.buttonProps[key]);
    });
  });
});

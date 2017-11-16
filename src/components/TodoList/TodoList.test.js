// @flow
/* eslint-env mocha */

import React from 'react';
import assert from 'power-assert';
import { shallow } from 'enzyme';
import { RawTodoList as TodoList } from './TodoList';
import TodoItem from '../TodoItem';

const todos = ['todo1', 'todo2', 'todo3'];
describe('TodoList', () => {
  it('has todos', () => {
    const props = {
      todos: todos.map((t, i) => ({
        label: t,
        key: String(i),
      })),
    };
    const wrapper = shallow(<TodoList {...props} />);
    assert(wrapper.find(TodoItem).length > 0);
    wrapper.find(TodoItem).forEach((todoItem, i) => {
      const p = props.todos[i];
      Object.keys(p).filter(key => key !== 'key').forEach((key) => {
        assert(todoItem.prop(key) === p[key]);
      });
    });
  });
  it('has theme', () => {
    const props = {
      todos: todos.map((t, i) => ({
        label: t,
        key: String(i),
      })),
      theme: {
        wrapper: 'wrapper',
      },
    };
    const wrapper = shallow(<TodoList {...props} />);
    assert(wrapper.find('div').prop('className') === 'wrapper');
  });
});

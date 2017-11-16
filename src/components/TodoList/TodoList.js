// @flow

import React from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import TodoItem from '../TodoItem';
import type { TodoItemProps } from '../TodoItem';
import _theme from './TodoList.css';

type T = {|
  theme?: {| wrapper?: string, |},
  todos: Array<{
    ...TodoItemProps,
    key: string,
  }>,
|}
type TodoListPropTypes = T & $Shape<T>; // eslint-disable-line no-undef

function TodoList(props: TodoListPropTypes) {
  const {
    theme,
    todos,
  } = props;
  const itemNodes = todos.map(todo => (
    <TodoItem
      {...todo}
    />
  ));
  return (
    <div
      className={cx(theme && theme.wrapper, _theme.wrapper)}
    >
      {itemNodes}
    </div>
  );
}

export { TodoList as RawTodoList };
export default withStyles(_theme)(TodoList);

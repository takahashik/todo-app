// @flow

import React from 'react';
import type { Element } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Button from '../Button';
import type { T as ButtonProps } from '../Button';
import _theme from './TodoItem.css';

type T = {
  label: string | Element<*>,
  isDone?: boolean,
  theme?: {
    wrapper?: string,
    todo?: string,
  },
  buttonProps?: ButtonProps,
}
type TodoItemProps = T & $Shape<T>; // eslint-disable-line no-undef
function TodoItem(props: TodoItemProps) {
  const {
    label,
    isDone,
    theme,
    buttonProps,
  } = props;
  const buttonLabel = isDone ? 'resume' : 'done';
  return (
    <div className={cx(theme && theme.wrapper, _theme.wrapper)} >
      <li className={cx(theme && theme.todo, isDone && _theme.isDone)} >
        {label}
      </li>
      <Button {...(Object.assign({ label: buttonLabel }, buttonProps))} />
    </div>
  );
}

export { TodoItem as RawTodoItem };
export default withStyles(_theme)(TodoItem);
